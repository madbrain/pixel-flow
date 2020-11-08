
#include <gegl-plugin.h>

void gegl_op_colorize_register_type(GTypeModule *module);
void gegl_op_curve_register_type(GTypeModule *module);

static const GeglModuleInfo modinfo = {
  GEGL_MODULE_ABI_VERSION
};

const GeglModuleInfo * gegl_module_query (GTypeModule *module);
gboolean gegl_module_register (GTypeModule *module);

G_MODULE_EXPORT const GeglModuleInfo *
gegl_module_query (GTypeModule *module)
{
  return &modinfo;
}

G_MODULE_EXPORT gboolean
gegl_module_register (GTypeModule *module)
{
  gegl_op_colorize_register_type(module);
  gegl_op_curve_register_type(module);

  return TRUE;
}
