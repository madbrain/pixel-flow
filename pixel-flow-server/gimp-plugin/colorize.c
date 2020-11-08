
#ifdef GEGL_PROPERTIES

property_color  (color, "Color", "rgba(0.0,0.0,0.0,0.0)")
  description("Color")

#else

#define GEGL_OP_POINT_FILTER
#define GEGL_OP_NAME     colorize
#define GEGL_OP_C_SOURCE colorize.c

#include "gegl-op.h"
#include <math.h>

static void
prepare (GeglOperation *operation)
{
  gegl_operation_set_format (operation, "input",
                             babl_format ("HSLA float"));
  gegl_operation_set_format (operation, "output",
                             babl_format ("HSLA float"));
}

static gboolean
process (GeglOperation       *op,
         void                *in_buf,
         void                *out_buf,
         glong                samples,
         const GeglRectangle *roi,
         gint                 level)
{
  gfloat *in  = in_buf;
  gfloat *out = out_buf;
  GeglProperties *o = GEGL_PROPERTIES (op);
  gfloat color[4] = {0, 0, 0, 0};
  gegl_color_get_pixel (o->color, babl_format ("HSLA float"), color);

  while (samples--)
    {
      out[0] = color[0];
      out[1] = color[1];
      out[2] = in[2] * color[2];
      out[3] = in[3];

      in += 4;
      out+= 4;
    }
  return TRUE;
}

static void
gegl_op_class_init (GeglOpClass *klass)
{
  GeglOperationClass            *operation_class;
  GeglOperationPointFilterClass *point_filter_class;

  operation_class    = GEGL_OPERATION_CLASS (klass);
  point_filter_class = GEGL_OPERATION_POINT_FILTER_CLASS (klass);

  operation_class->prepare     = prepare;
  point_filter_class->process  = process;

  gegl_operation_class_set_keys (operation_class,
    "name",        "gimp:colorize",
    "title",       "Colorize",
    "categories" , "color",
    "description", "Colorize the image",
    NULL);
}

#endif
