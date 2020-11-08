
#ifdef GEGL_PROPERTIES

property_curve (curve, "Curve", NULL)
  description ("The color curve.")

#else

#define GEGL_OP_POINT_FILTER
#define GEGL_OP_NAME     curve
#define GEGL_OP_C_SOURCE curve.c

#include "gegl-op.h"
#include <math.h>

static void
prepare (GeglOperation *operation)
{
  gegl_operation_set_format (operation, "input",
                             babl_format ("RGBA float"));
  gegl_operation_set_format (operation, "output",
                             babl_format ("RGBA float"));
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
  GeglCurve  *curve = o->curve;

  while (samples--)
    {
      out[0] = gegl_curve_calc_value(curve, in[0]);
      out[1] = gegl_curve_calc_value(curve, in[1]);
      out[2] = gegl_curve_calc_value(curve, in[2]);
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
    "name",        "gimp:curve",
    "title",       "Color Curve",
    "categories" , "color",
    "description", "Adjusts the color of the image with a curve",
    NULL);
}

#endif
