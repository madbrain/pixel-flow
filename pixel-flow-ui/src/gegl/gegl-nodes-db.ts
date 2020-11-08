export const gegl = [
    {
        "name": "gimp:colorize",
        "title": "Colorize",
        "description": "Colorize the image",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color",
                "type": "color",
                "def": "#00000000",
                "blurb": "Color",
                "nick": "Color"
            }
        ]
    }
    ,
    {
        "name": "gimp:curve",
        "title": "Color Curve",
        "description": "Adjusts the color of the image with a curve",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "curve",
                "type": "GeglCurve",
                "def": "#00000000",
                "blurb": "The color curve.",
                "nick": "Curve"
            }
        ]
    },
    {
        "name": "gegl:absolute",
        "title": "Absolute",
        "description": "Makes each linear RGB component be the absolute of its value, fabs(input_value)",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:add",
        "title": "Add",
        "description": "Math operation add, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input + value",
        "categories": "compositors:math",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "def": 0.00,
                "blurb": "global value used if aux doesn't contain data",
                "nick": "Value"
            }
        ]
    }
    ,
    {
        "name": "gegl:alien-map",
        "title": "Alien Map",
        "description": "Heavily distort images colors by applying trigonometric functions to map color values.",
        "categories": "artistic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color-model",
                "type": "enum",
                "elements": [
                    { "label": "RGB", "value": "rgb" }],
                "def": "rgb",
                "blurb": "What color model used for the transformation",
                "nick": "Color model"
            }
            ,
            {
                "id": "cpn-1-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Component 1 frequency"
            }
            ,
            {
                "id": "cpn-2-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Component 2 frequency"
            }
            ,
            {
                "id": "cpn-3-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Component 3 frequency"
            }
            ,
            {
                "id": "cpn-1-phaseshift",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Component 1 phase shift"
            }
            ,
            {
                "id": "cpn-2-phaseshift",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Component 2 phase shift"
            }
            ,
            {
                "id": "cpn-3-phaseshift",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Component 3 phase shift"
            }
            ,
            {
                "id": "cpn-1-keep",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Keep component 1"
            }
            ,
            {
                "id": "cpn-2-keep",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Keep component 2"
            }
            ,
            {
                "id": "cpn-3-keep",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Keep component 3"
            }
        ]
    }
    ,
    {
        "name": "gegl:antialias",
        "title": "Scale3X Antialiasing",
        "description": "Antialias using the Scale3X edge-extrapolation algorithm",
        "categories": "enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:apply-lens",
        "title": "Apply Lens",
        "description": "Simulates the optical distortion caused by having an elliptical lens over the image",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "refraction-index",
                "type": "number",
                "range": { "min": 1.00, "max": 100.00 },
                "def": 1.70,
                "blurb": null,
                "nick": "Lens refraction index"
            }
            ,
            {
                "id": "keep-surroundings",
                "type": "boolean",
                "def": false,
                "blurb": "Keep image unchanged, where not affected by the lens.",
                "nick": "Keep original surroundings"
            }
            ,
            {
                "id": "background-color",
                "type": "color",
                "def": "#00000000",
                "blurb": null,
                "nick": "Background color"
            }
        ]
    }
    ,
    {
        "name": "gegl:bayer-matrix",
        "title": "Bayer Matrix",
        "description": "Generate a Bayer matrix pattern",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "subdivisions",
                "type": "int",
                "range": { "min": 0, "max": 15 },
                "def": 1,
                "blurb": "Number of subdivisions",
                "nick": "Subdivisions"
            }
            ,
            {
                "id": "x-scale",
                "type": "int",
                "range": { "min": 1 },
                "def": 1,
                "blurb": "Horizontal pattern scale",
                "nick": "X Scale"
            }
            ,
            {
                "id": "y-scale",
                "type": "int",
                "range": { "min": 1 },
                "def": 1,
                "blurb": "Vertical pattern scale",
                "nick": "Y Scale"
            }
            ,
            {
                "id": "rotation",
                "type": "enum",
                "elements": [
                    { "label": "0°", "value": "0" },
                    { "label": "90°", "value": "90" },
                    { "label": "180°", "value": "180" }],
                "def": "0",
                "blurb": "Pattern rotation angle",
                "nick": "Rotation"
            }
            ,
            {
                "id": "reflect",
                "type": "boolean",
                "def": false,
                "blurb": "Reflect the pattern horizontally",
                "nick": "Reflect"
            }
            ,
            {
                "id": "amplitude",
                "type": "number",
                "def": 0.00,
                "blurb": "Pattern amplitude (logarithmic scale)",
                "nick": "Amplitude"
            }
            ,
            {
                "id": "offset",
                "type": "number",
                "def": 0.00,
                "blurb": "Value offset",
                "nick": "Offset"
            }
            ,
            {
                "id": "exponent",
                "type": "number",
                "def": 0.00,
                "blurb": "Value exponent (logarithmic scale)",
                "nick": "Exponent"
            }
            ,
            {
                "id": "x-offset",
                "type": "int",
                "def": 0,
                "blurb": "Offset for X axis",
                "nick": "X Offset"
            }
            ,
            {
                "id": "y-offset",
                "type": "int",
                "def": 0,
                "blurb": "Offset for Y axis",
                "nick": "Y Offset"
            }
        ]
    }
    ,
    {
        "name": "gegl:bilateral-filter",
        "title": "Bilateral Filter",
        "description": "Like a gaussian blur; but where the contribution for each neighbourhood pixel is also weighted by the color difference with the original center pixel. ",
        "categories": "enhance:noise-reduction",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "blur-radius",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 4.00,
                "blurb": "Radius of square pixel region, (width and height will be radius*2+1).",
                "nick": "Blur radius"
            }
            ,
            {
                "id": "edge-preservation",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 8.00,
                "blurb": "Amount of edge preservation",
                "nick": "Edge preservation"
            }
        ]
    }
    ,
    {
        "name": "gegl:box-blur",
        "title": "Box Blur",
        "description": "Blur resulting from averaging the colors of a square neighbourhood.",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 0, "max": 1000 },
                "def": 4,
                "blurb": "Radius of square pixel region, (width and height will be radius*2+1)",
                "nick": "Radius"
            }
        ]
    }
    ,
    {
        "name": "gegl:brightness-contrast",
        "title": "Brightness Contrast",
        "description": "Changes the light level and contrast. This operation operates in linear light, 'contrast' is a scale factor around 50% gray, and 'brightness' a constant offset to apply after contrast scaling.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "contrast",
                "type": "number",
                "range": { "min": -5.00, "max": 5.00 },
                "def": 1.00,
                "blurb": "Magnitude of contrast scaling >1.0 brighten < 1.0 darken",
                "nick": "Contrast"
            }
            ,
            {
                "id": "brightness",
                "type": "number",
                "range": { "min": -3.00, "max": 3.00 },
                "def": 0.00,
                "blurb": "Amount to increase brightness",
                "nick": "Brightness"
            }
        ]
    }
    ,
    {
        "name": "gegl:buffer-sink",
        "title": "Buffer Sink",
        "description": "Create a new GEGL buffer to write the resulting rendering.",
        "categories": "programming:output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "buffer",
                "type": "gpointer",
                "def": 0.00,
                "blurb": null,
                "nick": "Buffer location"
            }
            ,
            {
                "id": "format",
                "type": "gpointer",
                "def": 0.00,
                "blurb": null,
                "nick": "babl format"
            }
        ]
    }
    ,
    {
        "name": "gegl:buffer-source",
        "title": "Buffer Source",
        "description": "Use an existing in-memory GeglBuffer as image source.",
        "categories": "programming:input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "buffer",
                "type": "GeglBuffer",
                "def": 0.00,
                "blurb": "The GeglBuffer to load into the pipeline",
                "nick": "Input buffer"
            }
        ]
    }
    ,
    {
        "name": "gegl:bump-map",
        "title": "Bump Map",
        "description": "This plug-in uses the algorithm described by John Schlag, \"Fast Embossing Effects on Raster Image Data\" in Graphics GEMS IV (ISBN 0-12-336155-9). It takes a buffer to be applied as a bump map to another buffer and produces a nice embossing effect.",
        "categories": "light",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "type",
                "type": "enum",
                "elements": [
                    { "label": "Linear", "value": "linear" },
                    { "label": "Spherical", "value": "spherical" }],
                "def": "linear",
                "blurb": "Type of map",
                "nick": "Type"
            }
            ,
            {
                "id": "compensate",
                "type": "boolean",
                "def": true,
                "blurb": "Compensate for darkening",
                "nick": "Compensate"
            }
            ,
            {
                "id": "invert",
                "type": "boolean",
                "def": false,
                "blurb": "Invert bumpmap",
                "nick": "Invert"
            }
            ,
            {
                "id": "tiled",
                "type": "boolean",
                "def": false,
                "blurb": "Tiled bumpmap",
                "nick": "Tiled"
            }
            ,
            {
                "id": "azimuth",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 135.00,
                "blurb": null,
                "nick": "Azimuth"
            }
            ,
            {
                "id": "elevation",
                "type": "number",
                "range": { "min": 0.50, "max": 90.00 },
                "def": 45.00,
                "blurb": null,
                "nick": "Elevation"
            }
            ,
            {
                "id": "depth",
                "type": "int",
                "range": { "min": 1, "max": 65 },
                "def": 3,
                "blurb": null,
                "nick": "Depth"
            }
            ,
            {
                "id": "offset-x",
                "type": "int",
                "range": { "min": -20000, "max": 20000 },
                "def": 0,
                "blurb": null,
                "nick": "Offset X"
            }
            ,
            {
                "id": "offset-y",
                "type": "int",
                "range": { "min": -20000, "max": 20000 },
                "def": 0,
                "blurb": null,
                "nick": "Offset Y"
            }
            ,
            {
                "id": "waterlevel",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Level that full transparency should represent",
                "nick": "Waterlevel"
            }
            ,
            {
                "id": "ambient",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Ambient lighting factor"
            }
        ]
    }
    ,
    {
        "name": "gegl:c2g",
        "title": "Color to Grayscale",
        "description": "Color to grayscale conversion, uses envelopes formed with the STRESS approach to perform local color-difference preserving grayscale generation.",
        "categories": "grayscale:color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 2, "max": 6000 },
                "def": 300,
                "blurb": "Neighborhood taken into account, this is the radius in pixels taken into account when deciding which colors map to which gray values",
                "nick": "Radius"
            }
            ,
            {
                "id": "samples",
                "type": "int",
                "range": { "min": 1, "max": 1000 },
                "def": 4,
                "blurb": "Number of samples to do per iteration looking for the range of colors",
                "nick": "Samples"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 1000 },
                "def": 10,
                "blurb": "Number of iterations, a higher number of iterations provides less noisy results at a computational cost",
                "nick": "Iterations"
            }
            ,
            {
                "id": "enhance-shadows",
                "type": "boolean",
                "def": false,
                "blurb": "When enabled details in shadows are boosted at the expense of noise",
                "nick": "Enhance Shadows"
            }
        ]
    }
    ,
    {
        "name": "gegl:cache",
        "title": "Cache",
        "description": "An explicit caching node, caches results and should provide faster recomputation if what is cached by it is expensive but isn't changing.",
        "categories": "programming",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "cache",
                "type": "GeglBuffer",
                "def": false,
                "blurb": "NULL or a GeglBuffer containing cached rendering results, this is a special buffer where gegl_buffer_list_valid_rectangles returns the part of the cache that is valid.",
                "nick": "Cache"
            }
        ]
    }
    ,
    {
        "name": "gegl:cartoon",
        "title": "Cartoon",
        "description": "Simulates a cartoon, its result is similar to a black felt pen drawing subsequently shaded with color. This is achieved by enhancing edges and darkening areas that are already distinctly darker than their neighborhood",
        "categories": "artistic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "mask-radius",
                "type": "number",
                "range": { "min": 0.00, "max": 50.00 },
                "def": 7.00,
                "blurb": null,
                "nick": "Mask radius"
            }
            ,
            {
                "id": "pct-black",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Percent black"
            }
        ]
    }
    ,
    {
        "name": "gegl:cast-format",
        "title": "Cast Format",
        "description": "Cast the data between input_format and output_format, both formats must have the same bpp",
        "categories": "core:color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "input-format",
                "type": "gpointer",
                "def": 0.20,
                "blurb": "The babl format of the input",
                "nick": "Input format"
            }
            ,
            {
                "id": "output-format",
                "type": "gpointer",
                "def": 0.20,
                "blurb": "The babl format of the output",
                "nick": "Output format"
            }
        ]
    }
    ,
    {
        "name": "gegl:cell-noise",
        "title": "Cell Noise",
        "description": "Generates a cellular texture.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.00,
                "blurb": "The scale of the noise function",
                "nick": "Scale"
            }
            ,
            {
                "id": "shape",
                "type": "number",
                "range": { "min": 1.00, "max": 2.00 },
                "def": 2.00,
                "blurb": "Interpolate between Manhattan and Euclidean distance.",
                "nick": "Shape"
            }
            ,
            {
                "id": "rank",
                "type": "int",
                "range": { "min": 1, "max": 3 },
                "def": 1,
                "blurb": "Select the n-th closest point",
                "nick": "Rank"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 20 },
                "def": 1,
                "blurb": "The number of noise octaves.",
                "nick": "Iterations"
            }
            ,
            {
                "id": "palettize",
                "type": "boolean",
                "def": false,
                "blurb": "Fill each cell with a random color",
                "nick": "Palettize"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": "The random seed for the noise function",
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:channel-mixer",
        "title": "Channel Mixer",
        "description": "Remix colors; by defining relative contributions from source components.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "preserve-luminosity",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Preserve luminosity"
            }
            ,
            {
                "id": "rr-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Set the red amount for the red channel",
                "nick": "Red in Red channel"
            }
            ,
            {
                "id": "rg-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the green amount for the red channel",
                "nick": "Green in Red channel"
            }
            ,
            {
                "id": "rb-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the blue amount for the red channel",
                "nick": "Blue in Red channel"
            }
            ,
            {
                "id": "gr-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the red amount for the green channel",
                "nick": "Red in Green channel"
            }
            ,
            {
                "id": "gg-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Set the green amount for the green channel",
                "nick": "Green for Green channel"
            }
            ,
            {
                "id": "gb-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the blue amount for the green channel",
                "nick": "Blue in Green channel"
            }
            ,
            {
                "id": "br-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the red amount for the blue channel",
                "nick": "Red in Blue channel"
            }
            ,
            {
                "id": "bg-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 0.00,
                "blurb": "Set the green amount for the blue channel",
                "nick": "Green in Blue channel"
            }
            ,
            {
                "id": "bb-gain",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Set the blue amount for the blue channel",
                "nick": "Blue in Blue channel"
            }
        ]
    }
    ,
    {
        "name": "gegl:checkerboard",
        "title": "Checkerboard",
        "description": "Render a checkerboard pattern",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Horizontal width of cells pixels",
                "nick": "Width"
            }
            ,
            {
                "id": "y",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Vertical width of cells pixels",
                "nick": "Height"
            }
            ,
            {
                "id": "x-offset",
                "type": "int",
                "def": 0,
                "blurb": "Horizontal offset (from origin) for start of grid",
                "nick": "Offset X"
            }
            ,
            {
                "id": "y-offset",
                "type": "int",
                "def": 0,
                "blurb": "Vertical offset (from origin) for start of grid",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "color1",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The first cell color",
                "nick": "Color 1"
            }
            ,
            {
                "id": "color2",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The second cell color",
                "nick": "Color 2"
            }
            ,
            {
                "id": "format",
                "type": "gpointer",
                "def": "#ffffffff",
                "blurb": "The babl format of the output",
                "nick": "Babl Format"
            }
        ]
    }
    ,
    {
        "name": "gegl:clone",
        "title": "Clone",
        "description": "Clone a buffer, this is the same as gegl:nop but can get special treatment to get more human readable references in serializations/UI.",
        "categories": "core",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "ref",
                "type": "string",
                "def": "ID",
                "blurb": "The reference ID used as input (for use in XML).",
                "nick": "Reference"
            }
        ]
    }
    ,
    {
        "name": "gegl:color",
        "title": "Color",
        "description": "Generates a buffer entirely filled with the specified color, use gegl:crop to get smaller dimensions.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The color to render (defaults to 'black')",
                "nick": "Color"
            }
            ,
            {
                "id": "format",
                "type": "gpointer",
                "def": "#000000ff",
                "blurb": "The babl format of the output",
                "nick": "Babl Format"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-assimilation-grid",
        "title": "Color Assimilation Grid",
        "description": "Turn image grayscale and overlay an oversaturated grid - through color assimilation happening in the human visual system, for some grid scales this produces the illusion that the grayscale grid cells themselves also have color.",
        "categories": "illusions",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "grid-size",
                "type": "number",
                "range": { "min": 0.00, "max": 150.00 },
                "def": 23.00,
                "blurb": null,
                "nick": "Grid size"
            }
            ,
            {
                "id": "saturation",
                "type": "number",
                "range": { "min": 0.00, "max": 30.00 },
                "def": 2.50,
                "blurb": null,
                "nick": "Saturation"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 45.00,
                "blurb": null,
                "nick": "Angle"
            }
            ,
            {
                "id": "line-thickness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.40,
                "blurb": null,
                "nick": "Line thickness"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-enhance",
        "title": "Color Enhance",
        "description": "Stretch color chroma to cover maximum possible range, keeping hue and lightness untouched.",
        "categories": "color:enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:color-exchange",
        "title": "Exchange color",
        "description": "Exchange one color with another, optionally setting a threshold to convert from one shade to another.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "from-color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The color to change.",
                "nick": "From Color"
            }
            ,
            {
                "id": "to-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Replacement color.",
                "nick": "To Color"
            }
            ,
            {
                "id": "red-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Red threshold of the input color",
                "nick": "Red Threshold"
            }
            ,
            {
                "id": "green-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Green threshold of the input color",
                "nick": "Green Threshold"
            }
            ,
            {
                "id": "blue-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Blue threshold of the input color",
                "nick": "Blue Threshold"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-overlay",
        "title": "Color Overlay",
        "description": "Paint a color overlay over the input, preserving its transparency.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "color",
                "def": "#00000000",
                "blurb": "The color to paint over the input",
                "nick": "Color"
            }
            ,
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-rotate",
        "title": "Color Rotate",
        "description": "Replace a range of colors with another",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "src-clockwise",
                "type": "boolean",
                "def": false,
                "blurb": "Switch to clockwise",
                "nick": "Clockwise"
            }
            ,
            {
                "id": "src-from",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Start angle of the source color range",
                "nick": "From"
            }
            ,
            {
                "id": "src-to",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 90.00,
                "blurb": "End angle of the source color range",
                "nick": "To"
            }
            ,
            {
                "id": "dest-clockwise",
                "type": "boolean",
                "def": false,
                "blurb": "Switch to clockwise",
                "nick": "Clockwise"
            }
            ,
            {
                "id": "dest-from",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Start angle of the destination color range",
                "nick": "From"
            }
            ,
            {
                "id": "dest-to",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 90.00,
                "blurb": "End angle of the destination color range",
                "nick": "To"
            }
            ,
            {
                "id": "threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Colors with a saturation less than this will treated as gray",
                "nick": "Gray threshold"
            }
            ,
            {
                "id": "gray-mode",
                "type": "enum",
                "elements": [
                    { "label": "Treat as this", "value": "treat-as" }],
                "def": "(null)",
                "blurb": "Treat as this: Gray colors from above source range will be treated as if they had this hue and saturation\nChange to this: Change gray colors to this hue and saturation",
                "nick": "Gray mode"
            }
            ,
            {
                "id": "hue",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Hue value for above gray settings",
                "nick": "Hue"
            }
            ,
            {
                "id": "saturation",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Saturation value for above gray settings",
                "nick": "Saturation"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-temperature",
        "title": "Color Temperature",
        "description": "Change the color temperature of the image, from an assumed original color temperature to an intended one.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "original-temperature",
                "type": "number",
                "range": { "min": 1000.00, "max": 12000.00 },
                "def": 6500.00,
                "blurb": "Estimated temperature of the light source in Kelvin the image was taken with.",
                "nick": "Original temperature"
            }
            ,
            {
                "id": "intended-temperature",
                "type": "number",
                "range": { "min": 1000.00, "max": 12000.00 },
                "def": 6500.00,
                "blurb": "Corrected estimation of the temperature of the light source in Kelvin.",
                "nick": "Intended temperature"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-to-alpha",
        "title": "Color to Alpha",
        "description": "Convert a specified color to transparency, works best with white.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The color to make transparent.",
                "nick": "Color"
            }
            ,
            {
                "id": "transparency-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "The limit below which colors become transparent.",
                "nick": "Transparency threshold"
            }
            ,
            {
                "id": "opacity-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "The limit above which colors remain opaque.",
                "nick": "Opacity threshold"
            }
        ]
    }
    ,
    {
        "name": "gegl:color-warp",
        "title": "Color warp",
        "description": "Warps the colors of an image between colors with weighted distortion factors, color pairs which are black to black get ignored when constructing the mapping.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "from-0",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 0"
            }
            ,
            {
                "id": "to-0",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 0"
            }
            ,
            {
                "id": "weight-0",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 0"
            }
            ,
            {
                "id": "from-1",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 1"
            }
            ,
            {
                "id": "to-1",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 1"
            }
            ,
            {
                "id": "weight-1",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 1"
            }
            ,
            {
                "id": "from-2",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 2"
            }
            ,
            {
                "id": "to-2",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 2"
            }
            ,
            {
                "id": "weight-2",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 2"
            }
            ,
            {
                "id": "from-3",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 3"
            }
            ,
            {
                "id": "to-3",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 3"
            }
            ,
            {
                "id": "weight-3",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 3"
            }
            ,
            {
                "id": "from-4",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 4"
            }
            ,
            {
                "id": "to-4",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 4"
            }
            ,
            {
                "id": "weight-4",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 4"
            }
            ,
            {
                "id": "from-5",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 5"
            }
            ,
            {
                "id": "to-5",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 5"
            }
            ,
            {
                "id": "weight-5",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 5"
            }
            ,
            {
                "id": "from-6",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 6"
            }
            ,
            {
                "id": "to-6",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 6"
            }
            ,
            {
                "id": "weight-6",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 6"
            }
            ,
            {
                "id": "from-7",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "From 7"
            }
            ,
            {
                "id": "to-7",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "To 7"
            }
            ,
            {
                "id": "weight-7",
                "type": "number",
                "def": 100.00,
                "blurb": null,
                "nick": "weight 7"
            }
            ,
            {
                "id": "weight",
                "type": "number",
                "def": 1.00,
                "blurb": null,
                "nick": "global weight scale"
            }
            ,
            {
                "id": "amount",
                "type": "number",
                "def": 1.00,
                "blurb": null,
                "nick": "amount"
            }
        ]
    }
    ,
    {
        "name": "gegl:component-extract",
        "title": "Extract Component",
        "description": "Extract a color model component",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "component",
                "type": "enum",
                "elements": [
                    { "label": "RGB Red", "value": "rgb-r" },
                    { "label": "RGB Green", "value": "rgb-g" },
                    { "label": "RGB Blue", "value": "rgb-b" },
                    { "label": "Hue", "value": "hue" },
                    { "label": "HSV Saturation", "value": "hsv-s" },
                    { "label": "HSV Value", "value": "hsv-v" },
                    { "label": "HSL Saturation", "value": "hsl-s" },
                    { "label": "HSL Lightness", "value": "hsl-l" },
                    { "label": "CMYK Cyan", "value": "cmyk-c" },
                    { "label": "CMYK Magenta", "value": "cmyk-m" },
                    { "label": "CMYK Yellow", "value": "cmyk-y" },
                    { "label": "CMYK Key", "value": "cmyk-k" },
                    { "label": "Y'CbCr Y'", "value": "ycbcr-y" },
                    { "label": "Y'CbCr Cb", "value": "ycbcr-cb" },
                    { "label": "Y'CbCr Cr", "value": "ycbcr-cr" },
                    { "label": "LAB L", "value": "lab-l" },
                    { "label": "LAB A", "value": "lab-a" },
                    { "label": "LAB B", "value": "lab-b" },
                    { "label": "LCH C(ab)", "value": "lch-c" },
                    { "label": "LCH H(ab)", "value": "lch-h" }],
                "def": "rgb-r",
                "blurb": "Component to extract",
                "nick": "Component"
            }
            ,
            {
                "id": "invert",
                "type": "boolean",
                "def": false,
                "blurb": "Invert the extracted component",
                "nick": "Invert component"
            }
            ,
            {
                "id": "linear",
                "type": "boolean",
                "def": false,
                "blurb": "Use linear output instead of gamma corrected",
                "nick": "Linear output"
            }
        ]
    }
    ,
    {
        "name": "gegl:contrast-curve",
        "title": "Contrast Curve",
        "description": "Adjusts the contrast of a grayscale image with a curve specifying contrast for intensity.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "sampling-points",
                "type": "int",
                "range": { "min": 0, "max": 65536 },
                "def": 0,
                "blurb": "Number of curve sampling points.  0 for exact calculation.",
                "nick": "Sample points"
            }
            ,
            {
                "id": "curve",
                "type": "GeglCurve",
                "def": 0,
                "blurb": "The contrast curve.",
                "nick": "Curve"
            }
        ]
    }
    ,
    {
        "name": "gegl:convert-format",
        "title": "Convert Format",
        "description": "Convert the data to the specified format",
        "categories": "core:color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "format",
                "type": "gpointer",
                "def": 0,
                "blurb": "The babl format of the output",
                "nick": "Output format"
            }
        ]
    }
    ,
    {
        "name": "gegl:convolution-matrix",
        "title": "Convolution Matrix",
        "description": "Apply a generic 5x5 convolution matrix",
        "categories": "generic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "a1",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(1,1)"
            }
            ,
            {
                "id": "a2",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(1,2)"
            }
            ,
            {
                "id": "a3",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(1,3)"
            }
            ,
            {
                "id": "a4",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(1,4)"
            }
            ,
            {
                "id": "a5",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(1,5)"
            }
            ,
            {
                "id": "b1",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(2,1)"
            }
            ,
            {
                "id": "b2",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(2,2)"
            }
            ,
            {
                "id": "b3",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(2,3)"
            }
            ,
            {
                "id": "b4",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(2,4)"
            }
            ,
            {
                "id": "b5",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(2,5)"
            }
            ,
            {
                "id": "c1",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(3,1)"
            }
            ,
            {
                "id": "c2",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(3,2)"
            }
            ,
            {
                "id": "c3",
                "type": "number",
                "def": 1.00,
                "blurb": null,
                "nick": "(3,3)"
            }
            ,
            {
                "id": "c4",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(3,4)"
            }
            ,
            {
                "id": "c5",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(3,5)"
            }
            ,
            {
                "id": "d1",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(4,1)"
            }
            ,
            {
                "id": "d2",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(4,2)"
            }
            ,
            {
                "id": "d3",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(4,3)"
            }
            ,
            {
                "id": "d4",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(4,4)"
            }
            ,
            {
                "id": "d5",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(4,5)"
            }
            ,
            {
                "id": "e1",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(5,1)"
            }
            ,
            {
                "id": "e2",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(5,2)"
            }
            ,
            {
                "id": "e3",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(5,3)"
            }
            ,
            {
                "id": "e4",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(5,4)"
            }
            ,
            {
                "id": "e5",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "(5,5)"
            }
            ,
            {
                "id": "divisor",
                "type": "number",
                "def": 1.00,
                "blurb": null,
                "nick": "Divisor"
            }
            ,
            {
                "id": "offset",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Offset"
            }
            ,
            {
                "id": "red",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Red channel"
            }
            ,
            {
                "id": "green",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Green channel"
            }
            ,
            {
                "id": "blue",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Blue channel"
            }
            ,
            {
                "id": "alpha",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Alpha channel"
            }
            ,
            {
                "id": "normalize",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Normalize"
            }
            ,
            {
                "id": "alpha-weight",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Alpha-weighting"
            }
            ,
            {
                "id": "border",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "clamp",
                "blurb": null,
                "nick": "Border"
            }
        ]
    }
    ,
    {
        "name": "gegl:copy-buffer",
        "title": "Copy Buffer",
        "description": "Writes image data to an already existing buffer",
        "categories": "programming",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "buffer",
                "type": "GeglBuffer",
                "def": "clamp",
                "blurb": "An already existing GeglBuffer to write incoming buffer data to, or NULL.",
                "nick": "Buffer"
            }
        ]
    }
    ,
    {
        "name": "gegl:crop",
        "title": "Crop",
        "description": "Crops a buffer, if the aux pad is connected the bounding box of the node connected is used.",
        "categories": "core",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.00,
                "blurb": null,
                "nick": "Y"
            }
            ,
            {
                "id": "width",
                "type": "number",
                "def": 10.00,
                "blurb": null,
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "number",
                "def": 10.00,
                "blurb": null,
                "nick": "Height"
            }
            ,
            {
                "id": "reset-origin",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Reset origin"
            }
        ]
    }
    ,
    {
        "name": "gegl:cubism",
        "title": "Cubism",
        "description": "Convert the image into randomly rotated square blobs, somehow resembling a cubist painting style",
        "categories": "artistic:scramble",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "tile-size",
                "type": "number",
                "range": { "min": 0.00, "max": 256.00 },
                "def": 10.00,
                "blurb": "Average diameter of each tile (in pixels)",
                "nick": "Tile size"
            }
            ,
            {
                "id": "tile-saturation",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 2.50,
                "blurb": "Expand tiles by this amount",
                "nick": "Tile saturation"
            }
            ,
            {
                "id": "bg-color",
                "type": "color",
                "def": "#00000000",
                "blurb": "The tiles' background color",
                "nick": "Background color"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:deinterlace",
        "title": "Deinterlace",
        "description": "Fix images where every other row or column is missing",
        "categories": "enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "keep",
                "type": "enum",
                "elements": [
                    { "label": "Keep even fields", "value": "even" }],
                "def": "even",
                "blurb": "Keep even or odd fields",
                "nick": "Keep"
            }
            ,
            {
                "id": "orientation",
                "type": "enum",
                "elements": [
                    { "label": "Horizontal", "value": "horizontal" }],
                "def": "horizontal",
                "blurb": "Deinterlace horizontally or vertically",
                "nick": "Orientation"
            }
            ,
            {
                "id": "size",
                "type": "int",
                "range": { "min": 0, "max": 100 },
                "def": 1,
                "blurb": "Block size of deinterlacing rows/columns",
                "nick": "Block size"
            }
        ]
    }
    ,
    {
        "name": "gegl:difference-of-gaussians",
        "title": "Difference of Gaussians",
        "description": "Edge detection with control of edge thickness, based on the difference of two gaussian blurs",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius1",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Radius 1"
            }
            ,
            {
                "id": "radius2",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 2.00,
                "blurb": null,
                "nick": "Radius 2"
            }
        ]
    }
    ,
    {
        "name": "gegl:diffraction-patterns",
        "title": "Diffraction Patterns",
        "description": "Generate diffraction patterns",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "red-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 0.81,
                "blurb": "Light frequency (red)",
                "nick": "Red frequency"
            }
            ,
            {
                "id": "green-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.22,
                "blurb": "Light frequency (green)",
                "nick": "Green frequency"
            }
            ,
            {
                "id": "blue-frequency",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.12,
                "blurb": "Light frequency (blue)",
                "nick": "Blue frequency"
            }
            ,
            {
                "id": "red-contours",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 0.82,
                "blurb": "Number of contours (red)",
                "nick": "Red contours"
            }
            ,
            {
                "id": "green-contours",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 0.82,
                "blurb": "Number of contours (green)",
                "nick": "Green contours"
            }
            ,
            {
                "id": "blue-contours",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 0.97,
                "blurb": "Number of contours (blue)",
                "nick": "Blue contours"
            }
            ,
            {
                "id": "red-sedges",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.61,
                "blurb": "Number of sharp edges (red)",
                "nick": "Red sharp edges"
            }
            ,
            {
                "id": "green-sedges",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.68,
                "blurb": "Number of sharp edges (green)",
                "nick": "Green sharp edges"
            }
            ,
            {
                "id": "blue-sedges",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.64,
                "blurb": "Number of sharp edges (blue)",
                "nick": "Blue sharp edges"
            }
            ,
            {
                "id": "brightness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.07,
                "blurb": "Brightness and shifting/fattening of contours",
                "nick": "Brightness"
            }
            ,
            {
                "id": "scattering",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 37.13,
                "blurb": "Scattering (speed vs. quality)",
                "nick": "Scattering"
            }
            ,
            {
                "id": "polarization",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": -0.47,
                "blurb": "Polarization",
                "nick": "Polarization"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 200,
                "blurb": "Width of the generated buffer",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 200,
                "blurb": "Height of the generated buffer",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:displace",
        "title": "Displace",
        "description": "Displace pixels as indicated by displacement maps",
        "categories": "map",
        "inputs": [
            "aux2",
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "displace-mode",
                "type": "enum",
                "elements": [
                    { "label": "Cartesian", "value": "cartesian" }],
                "def": "cartesian",
                "blurb": "Mode of displacement",
                "nick": "Displacement mode"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": "Type of GeglSampler used to fetch input pixels",
                "nick": "Sampler"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "clamp",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "amount-x",
                "type": "number",
                "range": { "min": -500.00, "max": 500.00 },
                "def": 0.00,
                "blurb": "Displace multiplier for X or radial direction",
                "nick": "X displacement"
            }
            ,
            {
                "id": "amount-y",
                "type": "number",
                "range": { "min": -500.00, "max": 500.00 },
                "def": 0.00,
                "blurb": "Displace multiplier for Y or tangent (degrees) direction",
                "nick": "Y displacement"
            }
            ,
            {
                "id": "center",
                "type": "boolean",
                "def": false,
                "blurb": "Center the displacement around a specified point",
                "nick": "Center displacement"
            }
            ,
            {
                "id": "center-x",
                "type": "number",
                "def": 0.50,
                "blurb": "X coordinate of the displacement center",
                "nick": "Center X"
            }
            ,
            {
                "id": "center-y",
                "type": "number",
                "def": 0.50,
                "blurb": "Y coordinate of the displacement center",
                "nick": "Center Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:display",
        "title": "Display",
        "description": "Display the input buffer in a window.",
        "categories": "meta:display",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "window-title",
                "type": "string",
                "def": "window_title",
                "blurb": "Title to be given to output window",
                "nick": "Window title"
            }
        ]
    }
    ,
    {
        "name": "gegl:distance-transform",
        "title": "Distance Transform",
        "description": "Calculate a distance transform",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "metric",
                "type": "enum",
                "elements": [
                    { "label": "Euclidean", "value": "euclidean" },
                    { "label": "Manhattan", "value": "manhattan" }],
                "def": "euclidean",
                "blurb": "Metric to use for the distance calculation",
                "nick": "Metric"
            }
            ,
            {
                "id": "threshold-lo",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Threshold low"
            }
            ,
            {
                "id": "threshold-hi",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Threshold high"
            }
            ,
            {
                "id": "averaging",
                "type": "int",
                "range": { "min": 0, "max": 1000 },
                "def": 0,
                "blurb": "Number of computations for grayscale averaging",
                "nick": "Grayscale Averaging"
            }
            ,
            {
                "id": "normalize",
                "type": "boolean",
                "def": true,
                "blurb": "Normalize output to range 0.0 to 1.0.",
                "nick": "Normalize"
            }
        ]
    }
    ,
    {
        "name": "gegl:dither",
        "title": "Dither",
        "description": "Reduce the number of colors in the image, by reducing the levels per channel (colors and alpha). Different dithering methods can be specified to counteract quantization induced banding.",
        "categories": "dither",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "red-levels",
                "type": "int",
                "range": { "min": 2, "max": 65536 },
                "def": 6,
                "blurb": "Number of levels for red channel",
                "nick": "Red levels"
            }
            ,
            {
                "id": "green-levels",
                "type": "int",
                "range": { "min": 2, "max": 65536 },
                "def": 7,
                "blurb": "Number of levels for green channel",
                "nick": "Green levels"
            }
            ,
            {
                "id": "blue-levels",
                "type": "int",
                "range": { "min": 2, "max": 65536 },
                "def": 6,
                "blurb": "Number of levels for blue channel",
                "nick": "Blue levels"
            }
            ,
            {
                "id": "alpha-levels",
                "type": "int",
                "range": { "min": 2, "max": 65536 },
                "def": 256,
                "blurb": "Number of levels for alpha channel",
                "nick": "Alpha levels"
            }
            ,
            {
                "id": "dither-method",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Floyd-Steinberg", "value": "floyd-steinberg" },
                    { "label": "Bayer", "value": "bayer" },
                    { "label": "Random", "value": "random" },
                    { "label": "Random Covariant", "value": "random-covariant" },
                    { "label": "Arithmetic add", "value": "add" },
                    { "label": "Arithmetic add covariant", "value": "add-covariant" },
                    { "label": "Arithmetic xor", "value": "xor" }],
                "def": "floyd-steinberg",
                "blurb": "The dithering method to use",
                "nick": "Dithering method"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:divide",
        "title": "Divide",
        "description": "Math operation divide, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = value==0.0f?0.0f:input/value",
        "categories": "compositors:math",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "def": 1.00,
                "blurb": "global value used if aux doesn't contain data",
                "nick": "Value"
            }
        ]
    }
    ,
    {
        "name": "gegl:domain-transform",
        "title": "Smooth by Domain Transform",
        "description": "An edge-preserving smoothing filter implemented with the Domain Transform recursive technique. Similar to a bilateral filter, but faster to compute.",
        "categories": "enhance:noise-reduction",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "n-iterations",
                "type": "int",
                "range": { "min": 1, "max": 5 },
                "def": 3,
                "blurb": "Number of filtering iterations. A value between 2 and 4 is usually enough.",
                "nick": "Quality"
            }
            ,
            {
                "id": "spatial-factor",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 30.00,
                "blurb": "Spatial standard deviation of the blur kernel, measured in pixels.",
                "nick": "Blur radius"
            }
            ,
            {
                "id": "edge-preservation",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.80,
                "blurb": "Amount of edge preservation. This quantity is inversely proportional to the range standard deviation of the blur kernel.",
                "nick": "Edge preservation"
            }
        ]
    }
    ,
    {
        "name": "gegl:dropshadow",
        "title": "Dropshadow",
        "description": "Creates a dropshadow effect on the input buffer",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "number",
                "def": 20.00,
                "blurb": "Horizontal shadow offset",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 20.00,
                "blurb": "Vertical shadow offset",
                "nick": "Y"
            }
            ,
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 10.00,
                "blurb": null,
                "nick": "Blur radius"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The shadow's color (defaults to 'black')",
                "nick": "Color"
            }
            ,
            {
                "id": "opacity",
                "type": "number",
                "range": { "min": 0.00, "max": 2.00 },
                "def": 0.50,
                "blurb": null,
                "nick": "Opacity"
            }
        ]
    }
    ,
    {
        "name": "gegl:edge",
        "title": "Edge Detection",
        "description": "Several simple methods for detecting edges",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "algorithm",
                "type": "enum",
                "elements": [
                    { "label": "Sobel", "value": "sobel" },
                    { "label": "Prewitt compass", "value": "prewitt" },
                    { "label": "Gradient", "value": "gradient" },
                    { "label": "Roberts", "value": "roberts" },
                    { "label": "Differential", "value": "differential" }],
                "def": "sobel",
                "blurb": "Edge detection algorithm",
                "nick": "Algorithm"
            }
            ,
            {
                "id": "amount",
                "type": "number",
                "range": { "min": 1.00, "max": 10.00 },
                "def": 2.00,
                "blurb": "Edge detection amount",
                "nick": "Amount"
            }
            ,
            {
                "id": "border-behavior",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "clamp",
                "blurb": "Edge detection behavior",
                "nick": "Border behavior"
            }
        ]
    }
    ,
    {
        "name": "gegl:edge-laplace",
        "title": "Laplacian Edge Detection",
        "description": "High-resolution edge detection",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:edge-neon",
        "title": "Neon Edge Detection",
        "description": "Performs edge detection using a Gaussian derivative method",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 5.00,
                "blurb": "Radius of effect (in pixels)",
                "nick": "Radius"
            }
            ,
            {
                "id": "amount",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Strength of Effect",
                "nick": "Intensity"
            }
        ]
    }
    ,
    {
        "name": "gegl:edge-sobel",
        "title": "Sobel Edge Detection",
        "description": "Specialized direction-dependent edge detection",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "horizontal",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Horizontal"
            }
            ,
            {
                "id": "vertical",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Vertical"
            }
            ,
            {
                "id": "keep-sign",
                "type": "boolean",
                "def": true,
                "blurb": "Keep negative values in result; when off, the absolute value of the result is used instead.",
                "nick": "Keep Sign"
            }
        ]
    }
    ,
    {
        "name": "gegl:emboss",
        "title": "Emboss",
        "description": "Simulates an image created by embossing",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "type",
                "type": "enum",
                "elements": [
                    { "label": "Emboss", "value": "emboss" }],
                "def": "emboss",
                "blurb": "Rendering type",
                "nick": "Emboss Type"
            }
            ,
            {
                "id": "azimuth",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 30.00,
                "blurb": "Light angle (degrees)",
                "nick": "Azimuth"
            }
            ,
            {
                "id": "elevation",
                "type": "number",
                "range": { "min": 0.00, "max": 180.00 },
                "def": 45.00,
                "blurb": "Elevation angle (degrees)",
                "nick": "Elevation"
            }
            ,
            {
                "id": "depth",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 20,
                "blurb": "Filter width",
                "nick": "Depth"
            }
        ]
    }
    ,
    {
        "name": "gegl:engrave",
        "title": "Engrave",
        "description": "Simulate an antique engraving",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "row-height",
                "type": "int",
                "range": { "min": 2, "max": 16 },
                "def": 10,
                "blurb": "Resolution in pixels",
                "nick": "Height"
            }
            ,
            {
                "id": "limit",
                "type": "boolean",
                "def": false,
                "blurb": "Limit line width",
                "nick": "Limit line width"
            }
        ]
    }
    ,
    {
        "name": "gegl:exp-combine",
        "title": "Combine Exposures",
        "description": "Combine multiple scene exposures into one high dynamic range image.",
        "categories": "compositors",
        "inputs": [
            "exposure-99",
            "exposure-98",
            "exposure-97",
            "exposure-96",
            "exposure-95",
            "exposure-94",
            "exposure-93",
            "exposure-92",
            "exposure-91",
            "exposure-90",
            "exposure-89",
            "exposure-88",
            "exposure-87",
            "exposure-86",
            "exposure-85",
            "exposure-84",
            "exposure-83",
            "exposure-82",
            "exposure-81",
            "exposure-80",
            "exposure-79",
            "exposure-78",
            "exposure-77",
            "exposure-76",
            "exposure-75",
            "exposure-74",
            "exposure-73",
            "exposure-72",
            "exposure-71",
            "exposure-70",
            "exposure-69",
            "exposure-68",
            "exposure-67",
            "exposure-66",
            "exposure-65",
            "exposure-64",
            "exposure-63",
            "exposure-62",
            "exposure-61",
            "exposure-60",
            "exposure-59",
            "exposure-58",
            "exposure-57",
            "exposure-56",
            "exposure-55",
            "exposure-54",
            "exposure-53",
            "exposure-52",
            "exposure-51",
            "exposure-50",
            "exposure-49",
            "exposure-48",
            "exposure-47",
            "exposure-46",
            "exposure-45",
            "exposure-44",
            "exposure-43",
            "exposure-42",
            "exposure-41",
            "exposure-40",
            "exposure-39",
            "exposure-38",
            "exposure-37",
            "exposure-36",
            "exposure-35",
            "exposure-34",
            "exposure-33",
            "exposure-32",
            "exposure-31",
            "exposure-30",
            "exposure-29",
            "exposure-28",
            "exposure-27",
            "exposure-26",
            "exposure-25",
            "exposure-24",
            "exposure-23",
            "exposure-22",
            "exposure-21",
            "exposure-20",
            "exposure-19",
            "exposure-18",
            "exposure-17",
            "exposure-16",
            "exposure-15",
            "exposure-14",
            "exposure-13",
            "exposure-12",
            "exposure-11",
            "exposure-10",
            "exposure-9",
            "exposure-8",
            "exposure-7",
            "exposure-6",
            "exposure-5",
            "exposure-4",
            "exposure-3",
            "exposure-2",
            "exposure-1",
            "exposure-0"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "exposures",
                "type": "string",
                "def": "",
                "blurb": "Relative brightness of each exposure in EV",
                "nick": "Exposure values"
            }
            ,
            {
                "id": "steps",
                "type": "int",
                "range": { "min": 8, "max": 32 },
                "def": 13,
                "blurb": "Log2 of source's discretization steps",
                "nick": "Discretization bits"
            }
            ,
            {
                "id": "sigma",
                "type": "number",
                "range": { "min": 0.00, "max": 32.00 },
                "def": 8.00,
                "blurb": "Weight distribution sigma controlling response contributions",
                "nick": "Weight sigma"
            }
        ]
    }
    ,
    {
        "name": "gegl:exposure",
        "title": "Exposure",
        "description": "Change exposure of an image in shutter speed stops",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "black-level",
                "type": "number",
                "range": { "min": -0.10, "max": 0.10 },
                "def": 0.00,
                "blurb": "Adjust the black level",
                "nick": "Black level"
            }
            ,
            {
                "id": "exposure",
                "type": "number",
                "def": 0.00,
                "blurb": "Relative brightness change in stops",
                "nick": "Exposure"
            }
        ]
    }
    ,
    {
        "name": "gegl:exr-load",
        "title": null,
        "description": "EXR image loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:exr-save",
        "title": null,
        "description": "OpenEXR image saver",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "path of file to write to.",
                "nick": "File"
            }
            ,
            {
                "id": "tile",
                "type": "int",
                "range": { "min": 0, "max": 2048 },
                "def": 0,
                "blurb": "tile size to use.",
                "nick": "Tile"
            }
        ]
    }
    ,
    {
        "name": "gegl:fattal02",
        "title": "Fattal et al. 2002 Tone Mapping",
        "description": "Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator attenuates the magnitudes of local image gradients, producing luminance within the range 0.0-1.0. This tonemapping approach was originally presented by Raanan Fattal, in the 2002 SIGGRAPH paper: Gradient Domain High Dynamic Range Compression.",
        "categories": "tonemapping:enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "alpha",
                "type": "number",
                "range": { "min": 0.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Gradient threshold for detail enhancement",
                "nick": "Alpha"
            }
            ,
            {
                "id": "beta",
                "type": "number",
                "range": { "min": 0.10, "max": 2.00 },
                "def": 0.90,
                "blurb": "Strength of local detail enhancement",
                "nick": "Beta"
            }
            ,
            {
                "id": "saturation",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.80,
                "blurb": "Global color saturation factor",
                "nick": "Saturation"
            }
            ,
            {
                "id": "noise",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Gradient threshold for lowering detail enhancement",
                "nick": "Noise"
            }
        ]
    }
    ,
    {
        "name": "gegl:ff-load",
        "title": "FFmpeg Frame Loader",
        "description": "FFmpeg video frame importer.",
        "categories": "input:video",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of video file to load",
                "nick": "File"
            }
            ,
            {
                "id": "frame",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": null,
                "nick": "Frame number"
            }
            ,
            {
                "id": "frames",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": "Number of frames in video, updates at least when first frame has been decoded.",
                "nick": "frames"
            }
            ,
            {
                "id": "audio-sample-rate",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "audio_sample_rate"
            }
            ,
            {
                "id": "audio-channels",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "audio_channels"
            }
            ,
            {
                "id": "frame-rate",
                "type": "number",
                "range": { "min": 0.00, "max": 2147483647.00 },
                "def": 0.00,
                "blurb": "Frames per second, permits computing time vs frame",
                "nick": "frame-rate"
            }
            ,
            {
                "id": "video-codec",
                "type": "string",
                "def": "",
                "blurb": null,
                "nick": "video-codec"
            }
            ,
            {
                "id": "audio-codec",
                "type": "string",
                "def": "",
                "blurb": null,
                "nick": "audio-codec"
            }
            ,
            {
                "id": "audio",
                "type": "GeglAudioFragment",
                "def": "",
                "blurb": null,
                "nick": "audio"
            }
        ]
    }
    ,
    {
        "name": "gegl:ff-save",
        "title": "FFmpeg Frame Saver",
        "description": "FFmpeg video output sink",
        "categories": "output:video",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "/tmp/fnord.ogv",
                "blurb": "Target path and filename, use '-' for stdout.",
                "nick": "File"
            }
            ,
            {
                "id": "audio",
                "type": "GeglAudioFragment",
                "def": "/tmp/fnord.ogv",
                "blurb": null,
                "nick": "audio"
            }
            ,
            {
                "id": "audio-codec",
                "type": "string",
                "def": "auto",
                "blurb": "Audio codec to use, or auto to use a good default based on container format.",
                "nick": "Audio codec"
            }
            ,
            {
                "id": "audio-sample-rate",
                "type": "int",
                "def": -1,
                "blurb": "-1 means autodetect on first audio fragment",
                "nick": "audio sample rate"
            }
            ,
            {
                "id": "audio-bit-rate",
                "type": "int",
                "def": 64,
                "blurb": "Target encoded video bitrate in kb/s",
                "nick": "audio bitrate in kb/s"
            }
            ,
            {
                "id": "frame-rate",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 25.00,
                "blurb": null,
                "nick": "Frames/second"
            }
            ,
            {
                "id": "video-codec",
                "type": "string",
                "def": "auto",
                "blurb": "Video codec to use, or auto to use a good default based on container format.",
                "nick": "Video codec"
            }
            ,
            {
                "id": "video-bit-rate",
                "type": "int",
                "def": 128,
                "blurb": "Target encoded video bitrate in kb/s",
                "nick": "video bitrate in kb/s"
            }
            ,
            {
                "id": "video-bufsize",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Video bufsize"
            }
            ,
            {
                "id": "container-format",
                "type": "string",
                "def": "auto",
                "blurb": "Container format to use, or auto to autodetect based on file extension.",
                "nick": "Container format"
            }
        ]
    }
    ,
    {
        "name": "gegl:fill-path",
        "title": "Fill Path",
        "description": "Renders a filled region",
        "categories": "render:vector",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Color of paint to use for filling.",
                "nick": "Color"
            }
            ,
            {
                "id": "opacity",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "The fill opacity to use.",
                "nick": "Opacity"
            }
            ,
            {
                "id": "fill-rule",
                "type": "string",
                "def": "nonzero",
                "blurb": "how to determine what to fill (nonzero|evenodd)",
                "nick": "Fill rule."
            }
            ,
            {
                "id": "transform",
                "type": "string",
                "def": "",
                "blurb": "svg style description of transform.",
                "nick": "Transform"
            }
            ,
            {
                "id": "d",
                "type": "GeglPath",
                "def": "",
                "blurb": "A GeglVector representing the path of the stroke",
                "nick": "Vector"
            }
        ]
    }
    ,
    {
        "name": "gegl:fractal-explorer",
        "title": "Fractal Explorer",
        "description": "Rendering of multiple different fractal systems, with configurable coloring options.",
        "categories": "render:fractal",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "fractaltype",
                "type": "enum",
                "elements": [
                    { "label": "Mandelbrot", "value": "mandelbrot" },
                    { "label": "Julia", "value": "julia" },
                    { "label": "Barnsley 1", "value": "barnsley-1" },
                    { "label": "Barnsley 2", "value": "barnsley-2" },
                    { "label": "Barnsley 3", "value": "barnsley-3" },
                    { "label": "Spider", "value": "spider" },
                    { "label": "Man O War", "value": "man-o-war" },
                    { "label": "Lambda", "value": "lambda" }],
                "def": "mandelbrot",
                "blurb": "Type of a fractal",
                "nick": "Fractal type"
            }
            ,
            {
                "id": "iter",
                "type": "int",
                "range": { "min": 1, "max": 1000 },
                "def": 50,
                "blurb": null,
                "nick": "Iterations"
            }
            ,
            {
                "id": "zoom",
                "type": "number",
                "range": { "min": 0.00, "max": 10000000.00 },
                "def": 300.00,
                "blurb": "Zoom in the fractal space",
                "nick": "Zoom"
            }
            ,
            {
                "id": "shiftx",
                "type": "number",
                "def": 0.00,
                "blurb": "X shift in the fractal space",
                "nick": "Shift X"
            }
            ,
            {
                "id": "shifty",
                "type": "number",
                "def": 0.00,
                "blurb": "Y shift in the fractal space",
                "nick": "Shift Y"
            }
            ,
            {
                "id": "cx",
                "type": "number",
                "range": { "min": -2.50, "max": 2.50 },
                "def": -0.75,
                "blurb": "CX (No effect in Mandelbrot and Sierpinski)",
                "nick": "CX"
            }
            ,
            {
                "id": "cy",
                "type": "number",
                "range": { "min": -2.50, "max": 2.50 },
                "def": -0.20,
                "blurb": "CY (No effect in Mandelbrot and Sierpinski)",
                "nick": "CY"
            }
            ,
            {
                "id": "redstretch",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Red stretching factor"
            }
            ,
            {
                "id": "greenstretch",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Green stretching factor"
            }
            ,
            {
                "id": "bluestretch",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Blue stretching factor"
            }
            ,
            {
                "id": "redmode",
                "type": "enum",
                "elements": [
                    { "label": "Sine", "value": "sine" },
                    { "label": "Cosine", "value": "cosine" }],
                "def": "cosine",
                "blurb": null,
                "nick": "Red application mode"
            }
            ,
            {
                "id": "greenmode",
                "type": "enum",
                "elements": [
                    { "label": "Sine", "value": "sine" },
                    { "label": "Cosine", "value": "cosine" }],
                "def": "cosine",
                "blurb": null,
                "nick": "Green application mode"
            }
            ,
            {
                "id": "bluemode",
                "type": "enum",
                "elements": [
                    { "label": "Sine", "value": "sine" },
                    { "label": "Cosine", "value": "cosine" }],
                "def": "sine",
                "blurb": null,
                "nick": "Blue application mode"
            }
            ,
            {
                "id": "redinvert",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Red inversion"
            }
            ,
            {
                "id": "greeninvert",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Green inversion"
            }
            ,
            {
                "id": "blueinvert",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Blue inversion"
            }
            ,
            {
                "id": "ncolors",
                "type": "int",
                "range": { "min": 2, "max": 8192 },
                "def": 256,
                "blurb": null,
                "nick": "Number of colors"
            }
            ,
            {
                "id": "useloglog",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Loglog smoothing"
            }
        ]
    }
    ,
    {
        "name": "gegl:fractal-trace",
        "title": "Fractal Trace",
        "description": "Transform the image with the fractals",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "fractal",
                "type": "enum",
                "elements": [
                    { "label": "Mandelbrot", "value": "mandelbrot" }],
                "def": "mandelbrot",
                "blurb": null,
                "nick": "Fractal type"
            }
            ,
            {
                "id": "X1",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": -1.00,
                "blurb": "X1 value, position",
                "nick": "X1"
            }
            ,
            {
                "id": "X2",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": 0.50,
                "blurb": "X2 value, position",
                "nick": "X2"
            }
            ,
            {
                "id": "Y1",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": -1.00,
                "blurb": "Y1 value, position",
                "nick": "Y1"
            }
            ,
            {
                "id": "Y2",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": 1.00,
                "blurb": "Y2 value, position",
                "nick": "Y2"
            }
            ,
            {
                "id": "JX",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": 0.50,
                "blurb": "Julia seed X value, position",
                "nick": "JX"
            }
            ,
            {
                "id": "JY",
                "type": "number",
                "range": { "min": -50.00, "max": 50.00 },
                "def": 0.50,
                "blurb": "Julia seed Y value, position",
                "nick": "JY"
            }
            ,
            {
                "id": "depth",
                "type": "int",
                "range": { "min": 1, "max": 65536 },
                "def": 3,
                "blurb": null,
                "nick": "Depth"
            }
            ,
            {
                "id": "bailout",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 10000.00,
                "blurb": null,
                "nick": "Bailout length"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "loop",
                "blurb": "How to deal with pixels outside of the input buffer",
                "nick": "Abyss policy"
            }
        ]
    }
    ,
    {
        "name": "gegl:gamma",
        "title": "Gamma",
        "description": "Math operation gamma, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = (input >= 0.0f ? powf (input, value) : -powf (-input, value))",
        "categories": "compositors:math",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "def": 1.00,
                "blurb": "global value used if aux doesn't contain data",
                "nick": "Value"
            }
        ]
    }
    ,
    {
        "name": "gegl:gaussian-blur",
        "title": "Gaussian Blur",
        "description": "Performs an averaging of neighboring pixels with the normal distribution as weighting",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "std-dev-x",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 1.50,
                "blurb": "Standard deviation for the horizontal axis",
                "nick": "Size X"
            }
            ,
            {
                "id": "std-dev-y",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 1.50,
                "blurb": "Standard deviation (spatial scale factor)",
                "nick": "Size Y"
            }
            ,
            {
                "id": "filter",
                "type": "enum",
                "elements": [
                    { "label": "Auto", "value": "auto" },
                    { "label": "FIR", "value": "fir" }],
                "def": "auto",
                "blurb": "How the gaussian kernel is discretized",
                "nick": "Filter"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Black", "value": "black" }],
                "def": "clamp",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "clip-extent",
                "type": "boolean",
                "def": true,
                "blurb": "Should the output extent be clipped to the input extent",
                "nick": "Clip to the input extent"
            }
        ]
    }
    ,
    {
        "name": "gegl:gaussian-blur-selective",
        "title": "Selective Gaussian Blur",
        "description": "Blur neighboring pixels, but only in low-contrast areas",
        "categories": "enhance:noise-reduction",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "blur-radius",
                "type": "number",
                "range": { "min": 1.00, "max": 1000.00 },
                "def": 5.00,
                "blurb": "Radius of square pixel region, (width and height will be radius*2+1).",
                "nick": "Blur radius"
            }
            ,
            {
                "id": "max-delta",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": "Maximum delta",
                "nick": "Max. delta"
            }
        ]
    }
    ,
    {
        "name": "gegl:gblur-1d",
        "title": "1D Gaussian-blur",
        "description": "Performs an averaging of neighboring pixels with the normal distribution as weighting",
        "categories": "hidden:blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "std-dev",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 1.50,
                "blurb": "Standard deviation (spatial scale factor)",
                "nick": "Size"
            }
            ,
            {
                "id": "orientation",
                "type": "enum",
                "elements": [
                    { "label": "Horizontal", "value": "horizontal" }],
                "def": "horizontal",
                "blurb": "The orientation of the blur - hor/ver",
                "nick": "Orientation"
            }
            ,
            {
                "id": "filter",
                "type": "enum",
                "elements": [
                    { "label": "Auto", "value": "auto" },
                    { "label": "FIR", "value": "fir" }],
                "def": "auto",
                "blurb": "How the gaussian kernel is discretized",
                "nick": "Filter"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "clip-extent",
                "type": "boolean",
                "def": true,
                "blurb": "Should the output extent be clipped to the input extent",
                "nick": "Clip to the input extent"
            }
        ]
    }
    ,
    {
        "name": "gegl:gegl",
        "title": "GEGL graph",
        "description": "Do a chain of operations, with key=value pairs after each operation name to set properties. And aux=[ source filter ] for specifying a chain with a source as something connected to an aux pad.",
        "categories": "generic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "string",
                "type": "string",
                "def": "gaussian-blur std-dev-x=0.3rel std-dev-y=0.3rel",
                "blurb": "[op [property=value] [property=value]] [[op] [property=value]",
                "nick": "pipeline"
            }
            ,
            {
                "id": "error",
                "type": "string",
                "def": "",
                "blurb": "There is a problem in the syntax or in the application of parsed property values. Things might mostly work nevertheless.",
                "nick": "Eeeeeek"
            }
        ]
    }
    ,
    {
        "name": "gegl:gegl-buffer-load",
        "title": null,
        "description": "GeglBuffer file loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "/tmp/gegl-buffer.gegl",
                "blurb": "Path of GeglBuffer file to load.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:gegl-buffer-save",
        "title": null,
        "description": "GeglBuffer file writer.",
        "categories": "hidden",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "/tmp/gegl-buffer.gegl",
                "blurb": "Target file path to write GeglBuffer to.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:gif-load",
        "title": "GIF File Loader",
        "description": "GIF image loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load",
                "nick": "File"
            }
            ,
            {
                "id": "frame",
                "type": "int",
                "def": 0,
                "blurb": "frame number to decode",
                "nick": "frame"
            }
            ,
            {
                "id": "frames",
                "type": "int",
                "def": 0,
                "blurb": "Number of frames in gif animation",
                "nick": "frames"
            }
            ,
            {
                "id": "frame-delay",
                "type": "int",
                "def": 100,
                "blurb": "Delay in ms for last decoded frame",
                "nick": "frame-delay"
            }
        ]
    }
    ,
    {
        "name": "gegl:gray",
        "title": "Make Grey",
        "description": "Turns the image grayscale",
        "categories": "grayscale:color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:grid",
        "title": "Grid",
        "description": "Grid renderer",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "int",
                "range": { "min": 1 },
                "def": 32,
                "blurb": "Horizontal width of cells pixels",
                "nick": "Width"
            }
            ,
            {
                "id": "y",
                "type": "int",
                "range": { "min": 1 },
                "def": 32,
                "blurb": "Vertical width of cells pixels",
                "nick": "Height"
            }
            ,
            {
                "id": "x-offset",
                "type": "int",
                "def": 0,
                "blurb": "Horizontal offset (from origin) for start of grid",
                "nick": "Offset X"
            }
            ,
            {
                "id": "y-offset",
                "type": "int",
                "def": 0,
                "blurb": "Vertical offset (from origin) for start of grid",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "line-width",
                "type": "int",
                "range": { "min": 0 },
                "def": 4,
                "blurb": "Width of grid lines in pixels",
                "nick": "Line width"
            }
            ,
            {
                "id": "line-height",
                "type": "int",
                "range": { "min": 0 },
                "def": 4,
                "blurb": "Height of grid lines in pixels",
                "nick": "Line height"
            }
            ,
            {
                "id": "line-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Color of the grid lines",
                "nick": "Color"
            }
        ]
    }
    ,
    {
        "name": "gegl:high-pass",
        "title": "High Pass Filter",
        "description": "Enhances fine details.",
        "categories": "frequency",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "std-dev",
                "type": "number",
                "range": { "min": 0.00, "max": 10000.00 },
                "def": 4.00,
                "blurb": "Standard deviation (spatial scale factor)",
                "nick": "Std. Dev."
            }
            ,
            {
                "id": "contrast",
                "type": "number",
                "range": { "min": 0.00, "max": 5.00 },
                "def": 1.00,
                "blurb": "Contrast of high-pass",
                "nick": "Contrast"
            }
        ]
    }
    ,
    {
        "name": "gegl:hue-chroma",
        "title": "Hue-Chroma",
        "description": "Adjust LCH Hue, Chroma, and Lightness",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "hue",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 0.00,
                "blurb": "Hue adjustment",
                "nick": "Hue"
            }
            ,
            {
                "id": "chroma",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Chroma adjustment",
                "nick": "Chroma"
            }
            ,
            {
                "id": "lightness",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Lightness adjustment",
                "nick": "Lightness"
            }
        ]
    }
    ,
    {
        "name": "gegl:icc-save",
        "title": "ICC profile saver",
        "description": "Stores the ICC profile that would be embedded if stored as an image.",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:illusion",
        "title": "Illusion",
        "description": "Superimpose many altered copies of the image.",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "division",
                "type": "int",
                "range": { "min": 0, "max": 64 },
                "def": 8,
                "blurb": "The number of divisions",
                "nick": "Division"
            }
            ,
            {
                "id": "illusion-type",
                "type": "enum",
                "elements": [
                    { "label": "Type 1", "value": "type1" }],
                "def": "type1",
                "blurb": "Type of illusion",
                "nick": "Illusion type"
            }
        ]
    }
    ,
    {
        "name": "gegl:image-compare",
        "title": null,
        "description": "Compares if input and aux buffers are different. Global statistics are saved in the properties and a visual difference image is produced as a visual result. ",
        "categories": "programming",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "wrong-pixels",
                "type": "int",
                "def": 0,
                "blurb": "Number of differing pixels.",
                "nick": "Wrong pixels"
            }
            ,
            {
                "id": "max-diff",
                "type": "number",
                "def": 0.00,
                "blurb": "Maximum difference between two pixels.",
                "nick": "Maximum difference"
            }
            ,
            {
                "id": "avg-diff-wrong",
                "type": "number",
                "def": 0.00,
                "blurb": "Average difference between wrong pixels.",
                "nick": "Average difference (wrong)"
            }
            ,
            {
                "id": "avg-diff-total",
                "type": "number",
                "def": 0.00,
                "blurb": "Average difference between all pixels.",
                "nick": "Average difference (total)"
            }
        ]
    }
    ,
    {
        "name": "gegl:image-gradient",
        "title": "Image Gradient",
        "description": "Compute gradient magnitude and/or direction by central differencies",
        "categories": "edge-detect",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "output-mode",
                "type": "enum",
                "elements": [
                    { "label": "Magnitude", "value": "magnitude" },
                    { "label": "Direction", "value": "direction" }],
                "def": "magnitude",
                "blurb": "Output Mode",
                "nick": "Output mode"
            }
        ]
    }
    ,
    {
        "name": "gegl:introspect",
        "title": null,
        "description": "GEGL graph visualizer.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "node",
                "type": "GeglNode",
                "def": "magnitude",
                "blurb": null,
                "nick": "Node"
            }
        ]
    }
    ,
    {
        "name": "gegl:invert-gamma",
        "title": "Invert in Perceptual space",
        "description": "Invert the components (except alpha) perceptually, the result is the corresponding \"negative\" image.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:invert-linear",
        "title": "Invert",
        "description": "Invert the components (except alpha) in linear light, the result is the corresponding \"negative\" image.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:jpg-load",
        "title": "JPEG File Loader",
        "description": "JPEG image loader using libjpeg",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI of file to load",
                "nick": "URI"
            }
        ]
    }
    ,
    {
        "name": "gegl:jpg-save",
        "title": "JPEG File Saver",
        "description": "JPEG image saver, using libjpeg",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout",
                "nick": "File"
            }
            ,
            {
                "id": "quality",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 90,
                "blurb": "JPEG compression quality (between 1 and 100)",
                "nick": "Quality"
            }
            ,
            {
                "id": "smoothing",
                "type": "int",
                "range": { "min": 0, "max": 100 },
                "def": 0,
                "blurb": "Smoothing factor from 1 to 100; 0 disables smoothing",
                "nick": "Smoothing"
            }
            ,
            {
                "id": "optimize",
                "type": "boolean",
                "def": true,
                "blurb": "Use optimized huffman tables",
                "nick": "Optimize"
            }
            ,
            {
                "id": "progressive",
                "type": "boolean",
                "def": true,
                "blurb": "Create progressive JPEG images",
                "nick": "Progressive"
            }
            ,
            {
                "id": "grayscale",
                "type": "boolean",
                "def": false,
                "blurb": "Create a grayscale (monochrome) image",
                "nick": "Grayscale"
            }
        ]
    }
    ,
    {
        "name": "gegl:layer",
        "title": "Layer",
        "description": "A layer in the traditional sense",
        "categories": "meta",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "composite-op",
                "type": "string",
                "def": "gegl:over",
                "blurb": "Composite operation to use",
                "nick": "Operation"
            }
            ,
            {
                "id": "opacity",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Opacity"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.00,
                "blurb": "Horizontal position in pixels",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.00,
                "blurb": "Vertical position in pixels",
                "nick": "Y"
            }
            ,
            {
                "id": "scale",
                "type": "number",
                "def": 1.00,
                "blurb": "Scale 1:1 size",
                "nick": "Scale"
            }
            ,
            {
                "id": "src",
                "type": "string",
                "def": "",
                "blurb": "Source image file path (png, jpg, raw, svg, bmp, tif, ...)",
                "nick": "Source"
            }
        ]
    }
    ,
    {
        "name": "gegl:lcms-from-profile",
        "title": "LCMS From Profile",
        "description": "Converts the input from an ICC color profile to a well defined babl format. The buffer's data will then be correctly managed by GEGL for further processing.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "src-profile",
                "type": "gpointer",
                "def": "",
                "blurb": null,
                "nick": "Source Profile"
            }
            ,
            {
                "id": "intent",
                "type": "enum",
                "elements": [
                    { "label": "Perceptual", "value": "perceptual" },
                    { "label": "Relative Colorimetric", "value": "relative-colorimetric" },
                    { "label": "Saturation", "value": "saturation" }],
                "def": "perceptual",
                "blurb": "The rendering intent to use in the conversion.",
                "nick": "Rendering intent"
            }
            ,
            {
                "id": "black-point-compensation",
                "type": "boolean",
                "def": false,
                "blurb": "Convert using black point compensation.",
                "nick": "Black point compensation"
            }
        ]
    }
    ,
    {
        "name": "gegl:lens-distortion",
        "title": "Lens Distortion",
        "description": "Corrects barrel or pincushion lens distortion.",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "main",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Amount of second-order distortion",
                "nick": "Main"
            }
            ,
            {
                "id": "edge",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Amount of fourth-order distortion",
                "nick": "Edge"
            }
            ,
            {
                "id": "zoom",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Rescale overall image size",
                "nick": "Zoom"
            }
            ,
            {
                "id": "x-shift",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Effect centre offset in X",
                "nick": "Shift X"
            }
            ,
            {
                "id": "y-shift",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Effect centre offset in Y",
                "nick": "Shift Y"
            }
            ,
            {
                "id": "brighten",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Adjust brightness in corners",
                "nick": "Brighten"
            }
            ,
            {
                "id": "background",
                "type": "color",
                "def": "#00000000",
                "blurb": null,
                "nick": "Background color"
            }
        ]
    }
    ,
    {
        "name": "gegl:lens-flare",
        "title": "Lens Flare",
        "description": "Adds a lens flare effect.",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pos-x",
                "type": "number",
                "def": 0.50,
                "blurb": "X coordinates of the flare center",
                "nick": "X position"
            }
            ,
            {
                "id": "pos-y",
                "type": "number",
                "def": 0.50,
                "blurb": "Y coordinates of the flare center",
                "nick": "Y position"
            }
        ]
    }
    ,
    {
        "name": "gegl:levels",
        "title": "Levels",
        "description": "Remaps the intensity range of the image",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "in-low",
                "type": "number",
                "range": { "min": -1.00, "max": 4.00 },
                "def": 0.00,
                "blurb": "Input luminance level to become lowest output",
                "nick": "Low input"
            }
            ,
            {
                "id": "in-high",
                "type": "number",
                "range": { "min": -1.00, "max": 4.00 },
                "def": 1.00,
                "blurb": "Input luminance level to become white",
                "nick": "High input"
            }
            ,
            {
                "id": "out-low",
                "type": "number",
                "range": { "min": -1.00, "max": 4.00 },
                "def": 0.00,
                "blurb": "Lowest luminance level in output",
                "nick": "Low output"
            }
            ,
            {
                "id": "out-high",
                "type": "number",
                "range": { "min": -1.00, "max": 4.00 },
                "def": 1.00,
                "blurb": "Highest luminance level in output",
                "nick": "High output"
            }
        ]
    }
    ,
    {
        "name": "gegl:linear-gradient",
        "title": "Linear Gradient",
        "description": "Linear gradient renderer",
        "categories": "render:gradient",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "start-x",
                "type": "number",
                "def": 25.00,
                "blurb": null,
                "nick": "X1"
            }
            ,
            {
                "id": "start-y",
                "type": "number",
                "def": 25.00,
                "blurb": null,
                "nick": "Y1"
            }
            ,
            {
                "id": "end-x",
                "type": "number",
                "def": 150.00,
                "blurb": null,
                "nick": "X2"
            }
            ,
            {
                "id": "end-y",
                "type": "number",
                "def": 150.00,
                "blurb": null,
                "nick": "Y2"
            }
            ,
            {
                "id": "start-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The color at (x1, y1)",
                "nick": "Start Color"
            }
            ,
            {
                "id": "end-color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The color at (x2, y2)",
                "nick": "End Color"
            }
        ]
    }
    ,
    {
        "name": "gegl:linear-sinusoid",
        "title": "Linear Sinusoid",
        "description": "Generate a linear sinusoid pattern",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x-period",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 128.00,
                "blurb": "Period for X axis",
                "nick": "X Period"
            }
            ,
            {
                "id": "y-period",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 128.00,
                "blurb": "Period for Y axis",
                "nick": "Y Period"
            }
            ,
            {
                "id": "x-amplitude",
                "type": "number",
                "def": 0.00,
                "blurb": "Amplitude for X axis (logarithmic scale)",
                "nick": "X Amplitude"
            }
            ,
            {
                "id": "y-amplitude",
                "type": "number",
                "def": 0.00,
                "blurb": "Amplitude for Y axis (logarithmic scale)",
                "nick": "Y Amplitude"
            }
            ,
            {
                "id": "x-phase",
                "type": "number",
                "def": 0.00,
                "blurb": "Phase for X axis",
                "nick": "X Phase"
            }
            ,
            {
                "id": "y-phase",
                "type": "number",
                "def": 0.00,
                "blurb": "Phase for Y axis",
                "nick": "Y Phase"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 90.00,
                "blurb": "Axis separation angle",
                "nick": "Angle"
            }
            ,
            {
                "id": "offset",
                "type": "number",
                "def": 0.00,
                "blurb": "Value offset",
                "nick": "Offset"
            }
            ,
            {
                "id": "exponent",
                "type": "number",
                "def": 0.00,
                "blurb": "Value exponent (logarithmic scale)",
                "nick": "Exponent"
            }
            ,
            {
                "id": "x-offset",
                "type": "number",
                "def": 0.00,
                "blurb": "Offset for X axis",
                "nick": "X Offset"
            }
            ,
            {
                "id": "y-offset",
                "type": "number",
                "def": 0.00,
                "blurb": "Offset for Y axis",
                "nick": "Y Offset"
            }
            ,
            {
                "id": "rotation",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Pattern rotation angle",
                "nick": "Rotation"
            }
            ,
            {
                "id": "supersampling",
                "type": "int",
                "range": { "min": 1, "max": 8 },
                "def": 1,
                "blurb": "Number of samples along each axis per pixel",
                "nick": "Supersampling"
            }
        ]
    }
    ,
    {
        "name": "gegl:load",
        "title": "Load Image",
        "description": "Multipurpose file loader, that uses other native handlers, and fallback conversion using Image Magick's convert.",
        "categories": "meta:input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI of file to load.",
                "nick": "URI"
            }
        ]
    }
    ,
    {
        "name": "gegl:long-shadow",
        "title": "Long Shadow",
        "description": "Creates a long-shadow effect",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "style",
                "type": "enum",
                "elements": [
                    { "label": "Finite", "value": "finite" },
                    { "label": "Infinite", "value": "infinite" },
                    { "label": "Fading", "value": "fading" }],
                "def": "finite",
                "blurb": "Shadow style",
                "nick": "Style"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 45.00,
                "blurb": "Shadow angle",
                "nick": "Angle"
            }
            ,
            {
                "id": "length",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 100.00,
                "blurb": "Shadow length",
                "nick": "Length"
            }
            ,
            {
                "id": "midpoint",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 100.00,
                "blurb": "Shadow fade midpoint",
                "nick": "Midpoint"
            }
            ,
            {
                "id": "midpoint-rel",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.50,
                "blurb": "Shadow fade midpoint, as a factor of the shadow length",
                "nick": "Midpoint (relative)"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Shadow color",
                "nick": "Color"
            }
            ,
            {
                "id": "composition",
                "type": "enum",
                "elements": [
                    { "label": "Shadow plus image", "value": "shadow-plus-image" },
                    { "label": "Shadow only", "value": "shadow-only" }],
                "def": "shadow-plus-image",
                "blurb": "Output composition",
                "nick": "Composition"
            }
        ]
    }
    ,
    {
        "name": "gegl:magick-load",
        "title": null,
        "description": "Image Magick wrapper using the png op.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "/tmp/gegl-logo.svg",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:mantiuk06",
        "title": "Mantiuk 2006 Tone Mapping",
        "description": "Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator constrains contrasts across multiple spatial frequencies, producing luminance within the range 0.0-1.0",
        "categories": "tonemapping",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "contrast",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.10,
                "blurb": "The amount of contrast compression",
                "nick": "Contrast"
            }
            ,
            {
                "id": "saturation",
                "type": "number",
                "range": { "min": 0.00, "max": 2.00 },
                "def": 0.80,
                "blurb": "Global color saturation factor",
                "nick": "Saturation"
            }
            ,
            {
                "id": "detail",
                "type": "number",
                "range": { "min": 1.00, "max": 99.00 },
                "def": 1.00,
                "blurb": "Level of emphasis on image gradient details",
                "nick": "Detail"
            }
        ]
    }
    ,
    {
        "name": "gegl:map-absolute",
        "title": "Map Absolute",
        "description": "sample input with an auxiliary buffer that contain absolute source coordinates",
        "categories": "map",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": null,
                "nick": "Resampling method"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": null,
                "nick": "Abyss policy"
            }
        ]
    }
    ,
    {
        "name": "gegl:map-relative",
        "title": "Map Relative",
        "description": "sample input with an auxiliary buffer that contain relative source coordinates",
        "categories": "map",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scaling",
                "type": "number",
                "range": { "min": 0.00, "max": 5000.00 },
                "def": 1.00,
                "blurb": "scaling factor of displacement, indicates how large spatial displacement a relative mapping value of 1.0 corresponds to.",
                "nick": "Scaling"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": null,
                "nick": "Resampling method"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": null,
                "nick": "Abyss policy"
            }
        ]
    }
    ,
    {
        "name": "gegl:matting-global",
        "title": "Matting Global",
        "description": "Given a sparse user supplied tri-map and an input image, create a foreground alpha matte. Set white as foreground, black as background for the tri-map. Everything else will be treated as unknown and filled in.",
        "categories": "matting",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 10000 },
                "def": 10,
                "blurb": null,
                "nick": "Iterations"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:matting-levin",
        "title": "Matting Levin",
        "description": "Given a sparse user supplied tri-map and an input image, create a foreground alpha mat. Set white as selected, black as unselected, for the tri-map.",
        "categories": "matting",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "epsilon",
                "type": "int",
                "range": { "min": -9, "max": -1 },
                "def": -6,
                "blurb": "Log of the error weighting",
                "nick": "Epsilon"
            }
            ,
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 1, "max": 3 },
                "def": 1,
                "blurb": "Radius of the processing window",
                "nick": "Radius"
            }
            ,
            {
                "id": "threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 0.10 },
                "def": 0.02,
                "blurb": "Alpha threshold for multilevel processing",
                "nick": "Threshold"
            }
            ,
            {
                "id": "lambda",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 100.00,
                "blurb": "Trimap influence factor",
                "nick": "Lambda"
            }
            ,
            {
                "id": "levels",
                "type": "int",
                "range": { "min": 0, "max": 8 },
                "def": 4,
                "blurb": "Number of downsampled levels to use",
                "nick": "Levels"
            }
            ,
            {
                "id": "active-levels",
                "type": "int",
                "range": { "min": 0, "max": 8 },
                "def": 2,
                "blurb": "Number of levels to perform solving",
                "nick": "Active levels"
            }
        ]
    }
    ,
    {
        "name": "gegl:maze",
        "title": "Maze",
        "description": "Draw a labyrinth",
        "categories": "render",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Horizontal width of cells pixels",
                "nick": "Width"
            }
            ,
            {
                "id": "y",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Vertical width of cells pixels",
                "nick": "Height"
            }
            ,
            {
                "id": "algorithm-type",
                "type": "enum",
                "elements": [
                    { "label": "Depth first", "value": "depth-first" }],
                "def": "depth-first",
                "blurb": "Maze algorithm type",
                "nick": "Algorithm type"
            }
            ,
            {
                "id": "tileable",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Tileable"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
            ,
            {
                "id": "fg-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The foreground color",
                "nick": "Foreground Color"
            }
            ,
            {
                "id": "bg-color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The background color",
                "nick": "Background Color"
            }
        ]
    }
    ,
    {
        "name": "gegl:mblur",
        "title": "Temporal blur",
        "description": "Accumulating motion blur using a kalman filter, for use with video sequences of frames.",
        "categories": "blur:video",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "dampness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.95,
                "blurb": "The value represents the contribution of the past to the new frame.",
                "nick": "Dampness"
            }
        ]
    }
    ,
    {
        "name": "gegl:mean-curvature-blur",
        "title": "Mean Curvature Blur",
        "description": "Regularize geometry at a speed proportional to the local mean curvature value",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 0, "max": 500 },
                "def": 20,
                "blurb": "Controls the number of iterations",
                "nick": "Iterations"
            }
        ]
    }
    ,
    {
        "name": "gegl:median-blur",
        "title": "Median Blur",
        "description": "Blur resulting from computing the median color in the neighborhood of each pixel.",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "neighborhood",
                "type": "enum",
                "elements": [
                    { "label": "Square", "value": "square" },
                    { "label": "Circle", "value": "circle" }],
                "def": "circle",
                "blurb": "Neighborhood type",
                "nick": "Neighborhood"
            }
            ,
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 0, "max": 100 },
                "def": 3,
                "blurb": "Neighborhood radius",
                "nick": "Radius"
            }
            ,
            {
                "id": "percentile",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Neighborhood color percentile",
                "nick": "Percentile"
            }
            ,
            {
                "id": "alpha-percentile",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Neighborhood alpha percentile",
                "nick": "Alpha percentile"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" }],
                "def": "(null)",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "high-precision",
                "type": "boolean",
                "def": false,
                "blurb": "Avoid clipping and quantization (slower)",
                "nick": "High precision"
            }
        ]
    }
    ,
    {
        "name": "gegl:mirrors",
        "title": "Kaleidoscopic Mirroring",
        "description": "Create a kaleidoscope like effect.",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "m-angle",
                "type": "number",
                "range": { "min": 0.00, "max": 180.00 },
                "def": 0.00,
                "blurb": "Rotation applied to the mirrors",
                "nick": "Mirror rotation"
            }
            ,
            {
                "id": "r-angle",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Rotation applied to the result",
                "nick": "Result rotation"
            }
            ,
            {
                "id": "n-segs",
                "type": "int",
                "range": { "min": 2, "max": 24 },
                "def": 6,
                "blurb": "Number of mirrors to use",
                "nick": "Mirrors"
            }
            ,
            {
                "id": "c-x",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.50,
                "blurb": "position of symmetry center in output",
                "nick": "Offset X"
            }
            ,
            {
                "id": "c-y",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.50,
                "blurb": "position of symmetry center in output",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "o-x",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "X axis ratio for the center of mirroring",
                "nick": "Center X"
            }
            ,
            {
                "id": "o-y",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Y axis ratio for the center of mirroring",
                "nick": "Center Y"
            }
            ,
            {
                "id": "trim-x",
                "type": "number",
                "range": { "min": 0.00, "max": 0.50 },
                "def": 0.00,
                "blurb": "X axis ratio for trimming mirror expanse",
                "nick": "Trim X"
            }
            ,
            {
                "id": "trim-y",
                "type": "number",
                "range": { "min": 0.00, "max": 0.50 },
                "def": 0.00,
                "blurb": "Y axis ratio for trimming mirror expanse",
                "nick": "Trim Y"
            }
            ,
            {
                "id": "input-scale",
                "type": "number",
                "range": { "min": 0.10, "max": 100.00 },
                "def": 100.00,
                "blurb": "Scale factor to make rendering size bigger",
                "nick": "Zoom"
            }
            ,
            {
                "id": "output-scale",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 1.00,
                "blurb": "Scale factor to make rendering size bigger",
                "nick": "Expand"
            }
            ,
            {
                "id": "clip",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Clip result to input size"
            }
            ,
            {
                "id": "warp",
                "type": "boolean",
                "def": true,
                "blurb": "Fill full output area",
                "nick": "Wrap input"
            }
        ]
    }
    ,
    {
        "name": "gegl:mix",
        "title": "Mix",
        "description": "Do a lerp, linear interpolation (lerp) between input and aux",
        "categories": null,
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "ratio",
                "type": "number",
                "def": 0.50,
                "blurb": "Mixing ratio, read as amount of aux, 0=input 0.5=half 1.0=aux",
                "nick": "Ratio"
            }
        ]
    }
    ,
    {
        "name": "gegl:mono-mixer",
        "title": "Mono Mixer",
        "description": "Monochrome channel mixer",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "preserve-luminosity",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Preserve luminosity"
            }
            ,
            {
                "id": "red",
                "type": "number",
                "range": { "min": -5.00, "max": 5.00 },
                "def": 0.33,
                "blurb": null,
                "nick": "Red Channel Multiplier"
            }
            ,
            {
                "id": "green",
                "type": "number",
                "range": { "min": -5.00, "max": 5.00 },
                "def": 0.33,
                "blurb": null,
                "nick": "Green Channel Multiplier"
            }
            ,
            {
                "id": "blue",
                "type": "number",
                "range": { "min": -5.00, "max": 5.00 },
                "def": 0.33,
                "blurb": null,
                "nick": "Blue Channel Multiplier"
            }
        ]
    }
    ,
    {
        "name": "gegl:mosaic",
        "title": "Mosaic",
        "description": "Mosaic is a filter which transforms an image into what appears to be a mosaic, composed of small primitives, each of constant color and of an approximate size.",
        "categories": "artistic:scramble",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "tile-type",
                "type": "enum",
                "elements": [
                    { "label": "Squares", "value": "squares" },
                    { "label": "Hexagons", "value": "hexagons" },
                    { "label": "Octagons", "value": "octagons" }],
                "def": "hexagons",
                "blurb": "What shape to use for tiles",
                "nick": "Tile geometry"
            }
            ,
            {
                "id": "tile-size",
                "type": "number",
                "range": { "min": 1.00, "max": 1000.00 },
                "def": 15.00,
                "blurb": "Average diameter of each tile (in pixels)",
                "nick": "Tile size"
            }
            ,
            {
                "id": "tile-height",
                "type": "number",
                "range": { "min": 1.00, "max": 1000.00 },
                "def": 4.00,
                "blurb": "Apparent height of each tile (in pixels)",
                "nick": "Tile height"
            }
            ,
            {
                "id": "tile-neatness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.65,
                "blurb": "Deviation from perfectly formed tiles",
                "nick": "Tile neatness"
            }
            ,
            {
                "id": "color-variation",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": "Magnitude of random color variations",
                "nick": "Tile color variation"
            }
            ,
            {
                "id": "color-averaging",
                "type": "boolean",
                "def": true,
                "blurb": "Tile color based on average of subsumed pixels",
                "nick": "Color averaging"
            }
            ,
            {
                "id": "tile-surface",
                "type": "boolean",
                "def": false,
                "blurb": "Surface characteristics",
                "nick": "Rough tile surface"
            }
            ,
            {
                "id": "tile-allow-split",
                "type": "boolean",
                "def": true,
                "blurb": "Allows splitting tiles at hard edges",
                "nick": "Allow splitting tiles"
            }
            ,
            {
                "id": "tile-spacing",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 1.00,
                "blurb": "Inter-tile spacing (in pixels)",
                "nick": "Tile spacing"
            }
            ,
            {
                "id": "joints-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "Joints color"
            }
            ,
            {
                "id": "light-color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": null,
                "nick": "Light color"
            }
            ,
            {
                "id": "light-dir",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 135.00,
                "blurb": "Direction of light-source (in degrees)",
                "nick": "Light direction"
            }
            ,
            {
                "id": "antialiasing",
                "type": "boolean",
                "def": true,
                "blurb": "Enables smoother tile output",
                "nick": "Antialiasing"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:motion-blur-circular",
        "title": "Circular Motion Blur",
        "description": "Circular motion blur",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "center-x",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center X"
            }
            ,
            {
                "id": "center-y",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center Y"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 5.00,
                "blurb": "Rotation blur angle. A large angle may take some time to render",
                "nick": "Angle"
            }
        ]
    }
    ,
    {
        "name": "gegl:motion-blur-linear",
        "title": "Linear Motion Blur",
        "description": "Blur pixels in a direction, simulates blurring caused by moving camera in a straight line during exposure.",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "length",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 10.00,
                "blurb": "Length of blur in pixels",
                "nick": "Length"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 0.00,
                "blurb": "Angle of blur in degrees",
                "nick": "Angle"
            }
        ]
    }
    ,
    {
        "name": "gegl:motion-blur-zoom",
        "title": "Zooming Motion Blur",
        "description": "Zoom motion blur",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "center-x",
                "type": "number",
                "range": { "min": -10.00, "max": 10.00 },
                "def": 0.50,
                "blurb": null,
                "nick": "Center X"
            }
            ,
            {
                "id": "center-y",
                "type": "number",
                "range": { "min": -10.00, "max": 10.00 },
                "def": 0.50,
                "blurb": null,
                "nick": "Center Y"
            }
            ,
            {
                "id": "factor",
                "type": "number",
                "range": { "min": -10.00, "max": 1.00 },
                "def": 0.10,
                "blurb": null,
                "nick": "Blurring factor"
            }
        ]
    }
    ,
    {
        "name": "gegl:multiply",
        "title": "Multiply",
        "description": "Math operation multiply, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input * value",
        "categories": "compositors:math",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "def": 1.00,
                "blurb": "global value used if aux doesn't contain data",
                "nick": "Value"
            }
        ]
    }
    ,
    {
        "name": "gegl:newsprint",
        "title": "Newsprint",
        "description": "Digital halftoning with optional modulations. ",
        "categories": "render",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color-model",
                "type": "enum",
                "elements": [
                    { "label": "White on Black", "value": "white-on-black" },
                    { "label": "Black on White", "value": "black-on-white" },
                    { "label": "RGB", "value": "rgb" }],
                "def": "black-on-white",
                "blurb": "How many inks to use just black, rg, rgb (additive), or cmyk",
                "nick": "Color Model"
            }
            ,
            {
                "id": "pattern2",
                "type": "enum",
                "elements": [
                    { "label": "Line", "value": "line" },
                    { "label": "Circle", "value": "circle" },
                    { "label": "Diamond", "value": "diamond" },
                    { "label": "PSSquare (or Euclidian) dot", "value": "pssquare" }],
                "def": "line",
                "blurb": "Halftoning/dot pattern to use",
                "nick": "Red and cyan pattern"
            }
            ,
            {
                "id": "period2",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 12.00,
                "blurb": "The number of pixels across one repetition of a base pattern at base resolution.",
                "nick": "Red and cyan period"
            }
            ,
            {
                "id": "angle2",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 15.00,
                "blurb": null,
                "nick": "Red and cyan angle"
            }
            ,
            {
                "id": "pattern3",
                "type": "enum",
                "elements": [
                    { "label": "Line", "value": "line" },
                    { "label": "Circle", "value": "circle" },
                    { "label": "Diamond", "value": "diamond" },
                    { "label": "PSSquare (or Euclidian) dot", "value": "pssquare" }],
                "def": "line",
                "blurb": "Halftoning/dot pattern to use",
                "nick": "Green and magenta pattern"
            }
            ,
            {
                "id": "period3",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 12.00,
                "blurb": "The number of pixels across one repetition of a base pattern at base resolution.",
                "nick": "Green and magenta period"
            }
            ,
            {
                "id": "angle3",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 45.00,
                "blurb": null,
                "nick": "Green and magenta angle"
            }
            ,
            {
                "id": "pattern4",
                "type": "enum",
                "elements": [
                    { "label": "Line", "value": "line" },
                    { "label": "Circle", "value": "circle" },
                    { "label": "Diamond", "value": "diamond" },
                    { "label": "PSSquare (or Euclidian) dot", "value": "pssquare" }],
                "def": "line",
                "blurb": "Halftoning/dot pattern to use",
                "nick": "Blue and Yellow pattern"
            }
            ,
            {
                "id": "period4",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 12.00,
                "blurb": "The number of pixels across one repetition of a base pattern at base resolution.",
                "nick": "Blue and Yellow period"
            }
            ,
            {
                "id": "angle4",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Blue and Yellow angle"
            }
            ,
            {
                "id": "pattern",
                "type": "enum",
                "elements": [
                    { "label": "Line", "value": "line" },
                    { "label": "Circle", "value": "circle" },
                    { "label": "Diamond", "value": "diamond" },
                    { "label": "PSSquare (or Euclidian) dot", "value": "pssquare" }],
                "def": "line",
                "blurb": "Halftoning/dot pattern to use",
                "nick": "Black pattern"
            }
            ,
            {
                "id": "period",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 12.00,
                "blurb": "Angle offset for patterns",
                "nick": "Black period"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 75.00,
                "blurb": "Angle offset for patterns",
                "nick": "Black angle"
            }
            ,
            {
                "id": "black-pullout",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "How much of common gray to pull out of CMY",
                "nick": "Black pullout"
            }
            ,
            {
                "id": "aa-samples",
                "type": "int",
                "range": { "min": 1, "max": 128 },
                "def": 16,
                "blurb": "Number of samples that are averaged for antialiasing the result.",
                "nick": "Anti-alias oversampling factor"
            }
            ,
            {
                "id": "turbulence",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Color saturation dependent compression of period",
                "nick": "Turbulence"
            }
            ,
            {
                "id": "blocksize",
                "type": "number",
                "range": { "min": -1.00, "max": 64.00 },
                "def": -1.00,
                "blurb": "Number of periods per tile, this tiling avoids high frequency anomaly that angle boost causes",
                "nick": "Blocksize"
            }
            ,
            {
                "id": "angleboost",
                "type": "number",
                "range": { "min": 0.00, "max": 4.00 },
                "def": 0.00,
                "blurb": "Multiplication factor for desired rotation of the local space for texture, the way this is computed makes it weak for desaturated colors and possibly stronger where there is color.",
                "nick": "Angle Boost"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-cie-lch",
        "title": "Add CIE Lch Noise",
        "description": "Randomize lightness, chroma and hue independently",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "holdness",
                "type": "int",
                "range": { "min": 1, "max": 8 },
                "def": 2,
                "blurb": "A high value lowers the randomness of the noise",
                "nick": "Dulling"
            }
            ,
            {
                "id": "lightness-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 40.00,
                "blurb": null,
                "nick": "Lightness"
            }
            ,
            {
                "id": "chroma-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 40.00,
                "blurb": null,
                "nick": "Chroma"
            }
            ,
            {
                "id": "hue-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 180.00 },
                "def": 3.00,
                "blurb": null,
                "nick": "Hue"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-hsv",
        "title": "Add HSV Noise",
        "description": "Randomize hue, saturation and value independently",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "holdness",
                "type": "int",
                "range": { "min": 1, "max": 8 },
                "def": 2,
                "blurb": "A high value lowers the randomness of the noise",
                "nick": "Dulling"
            }
            ,
            {
                "id": "hue-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 180.00 },
                "def": 3.00,
                "blurb": null,
                "nick": "Hue"
            }
            ,
            {
                "id": "saturation-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.04,
                "blurb": null,
                "nick": "Saturation"
            }
            ,
            {
                "id": "value-distance",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.04,
                "blurb": null,
                "nick": "Value"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-hurl",
        "title": "Randomly Shuffle Pixels",
        "description": "Completely randomize a fraction of pixels",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pct-random",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": null,
                "nick": "Randomization (%)"
            }
            ,
            {
                "id": "repeat",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 1,
                "blurb": null,
                "nick": "Repeat"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-pick",
        "title": "Noise Pick",
        "description": "Randomly interchange some pixels with neighbors",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pct-random",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": null,
                "nick": "Randomization (%)"
            }
            ,
            {
                "id": "repeat",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 1,
                "blurb": null,
                "nick": "Repeat"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-reduction",
        "title": "Noise Reduction",
        "description": "Anisotropic smoothing operation",
        "categories": "enhance:noise-reduction",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 0, "max": 32 },
                "def": 4,
                "blurb": "Controls the number of iterations; lower values give less plastic results",
                "nick": "Strength"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-rgb",
        "title": "Add RGB Noise",
        "description": "Distort colors by random amounts",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "correlated",
                "type": "boolean",
                "def": false,
                "blurb": null,
                "nick": "Correlated noise"
            }
            ,
            {
                "id": "independent",
                "type": "boolean",
                "def": true,
                "blurb": "Control amount of noise for each RGB channel separately",
                "nick": "Independent RGB"
            }
            ,
            {
                "id": "linear",
                "type": "boolean",
                "def": true,
                "blurb": "Operate on linearized RGB color data",
                "nick": "Linear RGB"
            }
            ,
            {
                "id": "gaussian",
                "type": "boolean",
                "def": true,
                "blurb": "Use a gaussian noise distribution, when unticked a linear noise distribution is used instead",
                "nick": "Gaussian distribution"
            }
            ,
            {
                "id": "red",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Red"
            }
            ,
            {
                "id": "green",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Green"
            }
            ,
            {
                "id": "blue",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Blue"
            }
            ,
            {
                "id": "alpha",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Alpha"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-slur",
        "title": "Noise Slur",
        "description": "Randomly slide some pixels downward (similar to melting)",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pct-random",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": null,
                "nick": "Randomization (%)"
            }
            ,
            {
                "id": "repeat",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 1,
                "blurb": null,
                "nick": "Repeat"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-solid",
        "title": "Solid Noise",
        "description": "Create a random cloud-like texture",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x-size",
                "type": "number",
                "range": { "min": 0.10, "max": 16.00 },
                "def": 4.00,
                "blurb": "Horizontal texture size",
                "nick": "X Size"
            }
            ,
            {
                "id": "y-size",
                "type": "number",
                "range": { "min": 0.10, "max": 16.00 },
                "def": 4.00,
                "blurb": "Vertical texture size",
                "nick": "Y Size"
            }
            ,
            {
                "id": "detail",
                "type": "int",
                "range": { "min": 0, "max": 15 },
                "def": 1,
                "blurb": "Detail level",
                "nick": "Detail"
            }
            ,
            {
                "id": "tileable",
                "type": "boolean",
                "def": false,
                "blurb": "Create a tileable output",
                "nick": "Tileable"
            }
            ,
            {
                "id": "turbulent",
                "type": "boolean",
                "def": false,
                "blurb": "Make a turbulent noise",
                "nick": "Turbulent"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 1024,
                "blurb": "Width of the generated buffer",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 768,
                "blurb": "Height of the generated buffer",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:noise-spread",
        "title": "Noise Spread",
        "description": "Move pixels around randomly",
        "categories": "noise",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "amount-x",
                "type": "int",
                "range": { "min": 0, "max": 512 },
                "def": 5,
                "blurb": "Horizontal spread amount",
                "nick": "Horizontal"
            }
            ,
            {
                "id": "amount-y",
                "type": "int",
                "range": { "min": 0, "max": 512 },
                "def": 5,
                "blurb": "Vertical spread amount",
                "nick": "Vertical"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:nop",
        "title": "No Operation",
        "description": "No operation (can be used as a routing point)",
        "categories": "core",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:normal-map",
        "title": "Normal Map",
        "description": "Generate a normal map from a height map",
        "categories": "misc",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 10.00,
                "blurb": "The amount by which to scale the height values",
                "nick": "Scale"
            }
            ,
            {
                "id": "x-component",
                "type": "enum",
                "elements": [
                    { "label": "Red", "value": "red" },
                    { "label": "Green", "value": "green" }],
                "def": "red",
                "blurb": "The component used for the X coordinates",
                "nick": "X Component"
            }
            ,
            {
                "id": "y-component",
                "type": "enum",
                "elements": [
                    { "label": "Red", "value": "red" },
                    { "label": "Green", "value": "green" }],
                "def": "green",
                "blurb": "The component used for the Y coordinates",
                "nick": "Y Component"
            }
            ,
            {
                "id": "flip-x",
                "type": "boolean",
                "def": false,
                "blurb": "Flip the X coordinates",
                "nick": "Flip X"
            }
            ,
            {
                "id": "flip-y",
                "type": "boolean",
                "def": false,
                "blurb": "Flip the Y coordinates",
                "nick": "Flip Y"
            }
            ,
            {
                "id": "full-z",
                "type": "boolean",
                "def": false,
                "blurb": "Use the full [0,1] range to encode the Z coordinates",
                "nick": "Full Z Range"
            }
            ,
            {
                "id": "tileable",
                "type": "boolean",
                "def": false,
                "blurb": "Generate a tileable map",
                "nick": "Tileable"
            }
        ]
    }
    ,
    {
        "name": "gegl:npd",
        "title": null,
        "description": "Performs n-point image deformation",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "model",
                "type": "gpointer",
                "def": false,
                "blurb": "Model - basic element we operate on",
                "nick": "Model"
            }
            ,
            {
                "id": "square-size",
                "type": "int",
                "range": { "min": 5, "max": 1000 },
                "def": 20,
                "blurb": "Size of an edge of square the mesh consists of",
                "nick": "Square Size"
            }
            ,
            {
                "id": "rigidity",
                "type": "int",
                "range": { "min": 0, "max": 10000 },
                "def": 100,
                "blurb": "The number of deformation iterations",
                "nick": "Rigidity"
            }
            ,
            {
                "id": "asap-deformation",
                "type": "boolean",
                "def": false,
                "blurb": "ASAP deformation is performed when TRUE, ARAP deformation otherwise",
                "nick": "ASAP Deformation"
            }
            ,
            {
                "id": "mls-weights",
                "type": "boolean",
                "def": false,
                "blurb": "Use MLS weights",
                "nick": "MLS Weights"
            }
            ,
            {
                "id": "mls-weights-alpha",
                "type": "number",
                "range": { "min": 0.10, "max": 2.00 },
                "def": 1.00,
                "blurb": "Alpha parameter of MLS weights",
                "nick": "MLS Weights Alpha"
            }
            ,
            {
                "id": "preserve-model",
                "type": "boolean",
                "def": false,
                "blurb": "When TRUE the model will not be freed",
                "nick": "Preserve Model"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
        ]
    }
    ,
    {
        "name": "gegl:npy-save",
        "title": "NumPy File Saver",
        "description": "NumPy (Numerical Python) image saver",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:oilify",
        "title": "Oilify",
        "description": "Emulate an oil painting",
        "categories": "artistic",
        "inputs": [
            "aux2",
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "mask-radius",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 4,
                "blurb": "Radius of circle around pixel, can also be scaled per pixel by a buffer on the aux pad.",
                "nick": "Mask Radius"
            }
            ,
            {
                "id": "exponent",
                "type": "int",
                "range": { "min": 1, "max": 20 },
                "def": 8,
                "blurb": "Exponent for processing; controls smoothness - can be scaled per pixel with a buffer on the aux2 pad.",
                "nick": "Exponent"
            }
            ,
            {
                "id": "intensities",
                "type": "int",
                "range": { "min": 8, "max": 256 },
                "def": 128,
                "blurb": "Histogram size",
                "nick": "Number of intensities"
            }
            ,
            {
                "id": "use-inten",
                "type": "boolean",
                "def": true,
                "blurb": "Use pixel luminance values",
                "nick": "Intensity Mode"
            }
        ]
    }
    ,
    {
        "name": "gegl:opacity",
        "title": "Opacity",
        "description": "Weights the opacity of the input both the value of the aux input and the global value property.",
        "categories": "transparency",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "range": { "min": -10.00, "max": 10.00 },
                "def": 1.00,
                "blurb": "Global opacity value that is always used on top of the optional auxiliary input buffer.",
                "nick": "Opacity"
            }
        ]
    }
    ,
    {
        "name": "gegl:open-buffer",
        "title": "Open GEGL Buffer",
        "description": "Use an on-disk GeglBuffer as data source.",
        "categories": "input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "a GeglBuffer on disk to open",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:panorama-projection",
        "title": "Panorama Projection",
        "description": "Do panorama viewer rendering mapping or its inverse for an equirectangular input image. (2:1 ratio containing 360x180 degree panorama).",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pan",
                "type": "number",
                "range": { "min": -360.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Horizontal camera panning",
                "nick": "Pan"
            }
            ,
            {
                "id": "tilt",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 0.00,
                "blurb": "Vertical camera panning",
                "nick": "Tilt"
            }
            ,
            {
                "id": "spin",
                "type": "number",
                "range": { "min": -360.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Spin angle around camera axis",
                "nick": "Spin"
            }
            ,
            {
                "id": "zoom",
                "type": "number",
                "range": { "min": 0.01, "max": 1000.00 },
                "def": 100.00,
                "blurb": "Zoom level",
                "nick": "Zoom"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": -1, "max": 10000 },
                "def": -1,
                "blurb": "output/rendering width in pixels, -1 for input width",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": -1, "max": 10000 },
                "def": -1,
                "blurb": "output/rendering height in pixels, -1 for input height",
                "nick": "Height"
            }
            ,
            {
                "id": "inverse",
                "type": "boolean",
                "def": false,
                "blurb": "Do the inverse mapping, useful for touching up zenith, nadir or other parts of panorama.",
                "nick": "Inverse transform"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "nearest",
                "blurb": "Image resampling method to use, for good results with double resampling when retouching panoramas, use nearest to generate the view and cubic or better for the inverse transform back to panorama.",
                "nick": "Resampling method"
            }
        ]
    }
    ,
    {
        "name": "gegl:path",
        "title": "Render Path",
        "description": "Renders a brush stroke",
        "categories": "render:vector",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "fill",
                "type": "color",
                "def": "#00000099",
                "blurb": "Color of paint to use for filling, use 0 opacity to disable filling",
                "nick": "Fill Color"
            }
            ,
            {
                "id": "stroke",
                "type": "color",
                "def": "#00000000",
                "blurb": "Color of paint to use for stroking",
                "nick": "Stroke Color"
            }
            ,
            {
                "id": "stroke-width",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 2.00,
                "blurb": "The width of the brush used to stroke the path",
                "nick": "Stroke width"
            }
            ,
            {
                "id": "stroke-opacity",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Opacity of stroke, note, does not behave like SVG since at the moment stroking is done using an airbrush tool",
                "nick": "Stroke opacity"
            }
            ,
            {
                "id": "stroke-hardness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.60,
                "blurb": "Hardness of the brush, 0.0 for a soft brush, 1.0 for a hard brush",
                "nick": "Hardness"
            }
            ,
            {
                "id": "fill-rule",
                "type": "string",
                "def": "nonzero",
                "blurb": "How to determine what to fill (nonzero|evenodd)",
                "nick": "Fill rule"
            }
            ,
            {
                "id": "transform",
                "type": "string",
                "def": "",
                "blurb": "SVG style description of transform",
                "nick": "Transform"
            }
            ,
            {
                "id": "fill-opacity",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "The fill opacity to use",
                "nick": "Fill opacity"
            }
            ,
            {
                "id": "d",
                "type": "GeglPath",
                "def": 1.00,
                "blurb": "A GeglVector representing the path of the stroke",
                "nick": "Vector"
            }
        ]
    }
    ,
    {
        "name": "gegl:pdf-load",
        "title": "pdf loader",
        "description": "PDF page decoder",
        "categories": "input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "file to load",
                "nick": "Path"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "uri of file to load",
                "nick": "URI"
            }
            ,
            {
                "id": "page",
                "type": "int",
                "range": { "min": 1, "max": 10000 },
                "def": 1,
                "blurb": "Page to render",
                "nick": "Page"
            }
            ,
            {
                "id": "pages",
                "type": "int",
                "range": { "min": 1, "max": 10000 },
                "def": 1,
                "blurb": "Total pages, provided as a visual read-only property",
                "nick": "Pages"
            }
            ,
            {
                "id": "ppi",
                "type": "number",
                "range": { "min": 10.00, "max": 2400.00 },
                "def": 200.00,
                "blurb": "Point/pixels per inch",
                "nick": "PPI"
            }
            ,
            {
                "id": "password",
                "type": "string",
                "def": "",
                "blurb": "Password to use for decryption of PDF, or blank for none",
                "nick": "Password"
            }
        ]
    }
    ,
    {
        "name": "gegl:perlin-noise",
        "title": "Perlin Noise",
        "description": "Perlin noise generator",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "alpha",
                "type": "number",
                "def": 1.20,
                "blurb": null,
                "nick": "Alpha"
            }
            ,
            {
                "id": "scale",
                "type": "number",
                "def": 1.80,
                "blurb": null,
                "nick": "Scale"
            }
            ,
            {
                "id": "zoff",
                "type": "number",
                "def": -1.00,
                "blurb": null,
                "nick": "Z offset"
            }
            ,
            {
                "id": "n",
                "type": "int",
                "range": { "min": 0, "max": 20 },
                "def": 3,
                "blurb": null,
                "nick": "Iterations"
            }
        ]
    }
    ,
    {
        "name": "gegl:photocopy",
        "title": "Photocopy",
        "description": "Simulate color distortion produced by a copy machine",
        "categories": "artistic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "mask-radius",
                "type": "number",
                "range": { "min": 0.00, "max": 50.00 },
                "def": 10.00,
                "blurb": null,
                "nick": "Mask Radius"
            }
            ,
            {
                "id": "sharpness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.50,
                "blurb": null,
                "nick": "Sharpness"
            }
            ,
            {
                "id": "black",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Percent Black"
            }
            ,
            {
                "id": "white",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.20,
                "blurb": null,
                "nick": "Percent White"
            }
        ]
    }
    ,
    {
        "name": "gegl:pixbuf",
        "title": "GdkPixbuf Source",
        "description": "Uses the GdkPixbuf located at the memory location in <em>pixbuf</em>.",
        "categories": "programming:input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pixbuf",
                "type": "GdkPixbuf",
                "def": 0.20,
                "blurb": "GdkPixbuf to use",
                "nick": "Pixbuf"
            }
        ]
    }
    ,
    {
        "name": "gegl:pixelize",
        "title": "Pixelize",
        "description": "Simplify image into an array of solid-colored rectangles",
        "categories": "blur:scramble",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "norm",
                "type": "enum",
                "elements": [
                    { "label": "Diamond", "value": "diamond" },
                    { "label": "Round", "value": "round" }],
                "def": "(null)",
                "blurb": "The shape of pixels",
                "nick": "Shape"
            }
            ,
            {
                "id": "size-x",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Width of blocks in pixels",
                "nick": "Block width"
            }
            ,
            {
                "id": "size-y",
                "type": "int",
                "range": { "min": 1 },
                "def": 16,
                "blurb": "Height of blocks in pixels",
                "nick": "Block height"
            }
            ,
            {
                "id": "offset-x",
                "type": "int",
                "def": 0,
                "blurb": "Horizontal offset of blocks in pixels",
                "nick": "Offset X"
            }
            ,
            {
                "id": "offset-y",
                "type": "int",
                "def": 0,
                "blurb": "Vertical offset of blocks in pixels",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "ratio-x",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Horizontal size ratio of a pixel inside each block",
                "nick": "Size ratio X"
            }
            ,
            {
                "id": "ratio-y",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Vertical size ratio of a pixel inside each block",
                "nick": "Size ratio Y"
            }
            ,
            {
                "id": "background",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "Color used to fill the background",
                "nick": "Background color"
            }
        ]
    }
    ,
    {
        "name": "gegl:plasma",
        "title": "Plasma",
        "description": "Creates an image filled with a plasma effect.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "turbulence",
                "type": "number",
                "range": { "min": 0.00, "max": 7.00 },
                "def": 1.00,
                "blurb": "High values give more variation in details",
                "nick": "Turbulence"
            }
            ,
            {
                "id": "x",
                "type": "int",
                "def": 0,
                "blurb": "X start of the generated buffer",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "int",
                "def": 0,
                "blurb": "Y start of the generated buffer",
                "nick": "Y"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 1024,
                "blurb": "Width of the generated buffer",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 768,
                "blurb": "Height of the generated buffer",
                "nick": "Height"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:png-load",
        "title": "PNG File Loader",
        "description": "PNG image loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI for file to load.",
                "nick": "URI"
            }
        ]
    }
    ,
    {
        "name": "gegl:png-save",
        "title": "PNG File Saver",
        "description": "PNG image saver, using libpng",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout.",
                "nick": "File"
            }
            ,
            {
                "id": "compression",
                "type": "int",
                "range": { "min": 1, "max": 9 },
                "def": 3,
                "blurb": "PNG compression level from 1 to 9",
                "nick": "Compression"
            }
            ,
            {
                "id": "bitdepth",
                "type": "int",
                "range": { "min": 8, "max": 16 },
                "def": 16,
                "blurb": "8 and 16 are the currently accepted values.",
                "nick": "Bitdepth"
            }
        ]
    }
    ,
    {
        "name": "gegl:polar-coordinates",
        "title": "Polar Coordinates",
        "description": "Convert image to or from polar coordinates",
        "categories": "transform:map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "depth",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 100.00,
                "blurb": null,
                "nick": "Circle depth in percent"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Offset angle"
            }
            ,
            {
                "id": "bw",
                "type": "boolean",
                "def": false,
                "blurb": "Start from the right instead of the left",
                "nick": "Map backwards"
            }
            ,
            {
                "id": "top",
                "type": "boolean",
                "def": true,
                "blurb": "Put the top row in the middle and the bottom row on the outside",
                "nick": "Map from top"
            }
            ,
            {
                "id": "polar",
                "type": "boolean",
                "def": true,
                "blurb": "Map the image to a circle",
                "nick": "To polar"
            }
            ,
            {
                "id": "pole-x",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": "Origin point for the polar coordinates",
                "nick": "X"
            }
            ,
            {
                "id": "pole-y",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": "Origin point for the polar coordinates",
                "nick": "Y"
            }
            ,
            {
                "id": "middle",
                "type": "boolean",
                "def": true,
                "blurb": "Let origin point to be the middle one",
                "nick": "Choose middle"
            }
        ]
    }
    ,
    {
        "name": "gegl:posterize",
        "title": "Posterize",
        "description": "Reduces the number of levels in each color component of the image.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "levels",
                "type": "int",
                "range": { "min": 1, "max": 64 },
                "def": 8,
                "blurb": "number of levels per component",
                "nick": "Levels"
            }
        ]
    }
    ,
    {
        "name": "gegl:ppm-load",
        "title": "PPM File Loader",
        "description": "PPM image loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI of image to load.",
                "nick": "URI"
            }
        ]
    }
    ,
    {
        "name": "gegl:ppm-save",
        "title": "PPM File Saver",
        "description": "PPM image saver (Portable pixmap saver.)",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout.",
                "nick": "File"
            }
            ,
            {
                "id": "rawformat",
                "type": "boolean",
                "def": true,
                "blurb": null,
                "nick": "Raw format"
            }
            ,
            {
                "id": "bitdepth",
                "type": "int",
                "range": { "min": 8, "max": 16 },
                "def": 16,
                "blurb": "8 and 16 are the currently accepted values.",
                "nick": "Bitdepth"
            }
        ]
    }
    ,
    {
        "name": "gegl:radial-gradient",
        "title": "Radial Gradient",
        "description": "Radial gradient renderer",
        "categories": "render:gradient",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "start-x",
                "type": "number",
                "def": 25.00,
                "blurb": null,
                "nick": "X1"
            }
            ,
            {
                "id": "start-y",
                "type": "number",
                "def": 25.00,
                "blurb": null,
                "nick": "Y1"
            }
            ,
            {
                "id": "end-x",
                "type": "number",
                "def": 50.00,
                "blurb": null,
                "nick": "X2"
            }
            ,
            {
                "id": "end-y",
                "type": "number",
                "def": 50.00,
                "blurb": null,
                "nick": "Y2"
            }
            ,
            {
                "id": "start-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The color at (x1, y1)",
                "nick": "Start Color"
            }
            ,
            {
                "id": "end-color",
                "type": "color",
                "def": "#ffffffff",
                "blurb": "The color at (x2, y2)",
                "nick": "End Color"
            }
        ]
    }
    ,
    {
        "name": "gegl:raw-load",
        "title": "libraw File Loader",
        "description": "Camera RAW image loader",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
            ,
            {
                "id": "image-num",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Image number"
            }
            ,
            {
                "id": "color-space",
                "type": "enum",
                "elements": [
                    { "label": "Camera RGB", "value": "camera" },
                    { "label": "s RGB", "value": "sRGB" },
                    { "label": "Adobe RGB compatible", "value": "Adobish" },
                    { "label": "Wide gamut RGB", "value": "Wide gamut" }],
                "def": "sRGB",
                "blurb": "Color space to use for loaded data",
                "nick": "Color space"
            }
            ,
            {
                "id": "quality",
                "type": "int",
                "def": 10,
                "blurb": null,
                "nick": "quality"
            }
        ]
    }
    ,
    {
        "name": "gegl:rectangle",
        "title": "Rectangle",
        "description": "A rectangular source of a fixed size with a solid color",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "number",
                "def": 42.00,
                "blurb": "Horizontal position",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 42.00,
                "blurb": "Vertical position",
                "nick": "Y"
            }
            ,
            {
                "id": "width",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 23.00,
                "blurb": "Horizontal extent",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 42.00,
                "blurb": "Vertical extent",
                "nick": "Height"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#008000ff",
                "blurb": "Color to render",
                "nick": "Color"
            }
        ]
    }
    ,
    {
        "name": "gegl:recursive-transform",
        "title": "Recursive Transform",
        "description": "Apply a transformation recursively.",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "transform",
                "type": "string",
                "def": "matrix (1, 0, 0, 0, 1, 0, 0, 0, 1)",
                "blurb": "Transformation matrix, using SVG syntax (or multiple matrices, separated by semicolons)",
                "nick": "Transform"
            }
            ,
            {
                "id": "first-iteration",
                "type": "int",
                "range": { "min": 0, "max": 20 },
                "def": 0,
                "blurb": "First iteration",
                "nick": "First iteration"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 0, "max": 20 },
                "def": 3,
                "blurb": "Number of iterations",
                "nick": "Iterations"
            }
            ,
            {
                "id": "fade-color",
                "type": "color",
                "def": "#00000000",
                "blurb": "Color to fade transformed images towards, with a rate depending on its alpha",
                "nick": "Fade color"
            }
            ,
            {
                "id": "fade-opacity",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Amount by which to scale the opacity of each transformed image",
                "nick": "Fade opacity"
            }
            ,
            {
                "id": "paste-below",
                "type": "boolean",
                "def": false,
                "blurb": "Paste transformed images below each other",
                "nick": "Paste below"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Mathematical method for reconstructing pixel values",
                "nick": "Resampling method"
            }
        ]
    }
    ,
    {
        "name": "gegl:red-eye-removal",
        "title": "Red Eye Removal",
        "description": "Remove the red eye effect caused by camera flashes",
        "categories": "enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 0.80 },
                "def": 0.40,
                "blurb": "Red eye threshold",
                "nick": "Threshold"
            }
        ]
    }
    ,
    {
        "name": "gegl:reflect",
        "title": "Reflect",
        "description": "Reflect an image about a line, whose direction is specified by the vector that is defined by the x and y properties. ",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.00,
                "blurb": "Direction vector's X component",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.00,
                "blurb": "Direction vector's Y component",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:reinhard05",
        "title": "Reinhard 2005 Tone Mapping",
        "description": "Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This is an efficient global operator derived from simple physiological observations, producing luminance within the range 0.0-1.0",
        "categories": "tonemapping",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "brightness",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Overall brightness of the image",
                "nick": "Brightness"
            }
            ,
            {
                "id": "chromatic",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Adaptation to color variation across the image",
                "nick": "Chromatic adaptation"
            }
            ,
            {
                "id": "light",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Adaptation to light variation across the image",
                "nick": "Light adaptation"
            }
        ]
    }
    ,
    {
        "name": "gegl:remap",
        "title": "Remap",
        "description": "stretch components of pixels individually based on luminance envelopes",
        "categories": "compositors",
        "inputs": [
            "aux2",
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:rgb-clip",
        "title": "Clip RGB",
        "description": "Keep RGB pixels values inside a specific range",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "clip-low",
                "type": "boolean",
                "def": true,
                "blurb": "Clip low pixel values",
                "nick": "Clip low pixel values"
            }
            ,
            {
                "id": "low-limit",
                "type": "number",
                "range": { "max": 0.00 },
                "def": 0.00,
                "blurb": "Pixels values lower than this limit will be set to it",
                "nick": "Low limit"
            }
            ,
            {
                "id": "clip-high",
                "type": "boolean",
                "def": true,
                "blurb": "Clip high pixel values",
                "nick": "Clip high pixel values"
            }
            ,
            {
                "id": "high-limit",
                "type": "number",
                "range": { "min": 1.00 },
                "def": 1.00,
                "blurb": "Pixels values higher than this limit will be set to it",
                "nick": "High limit"
            }
        ]
    }
    ,
    {
        "name": "gegl:rgbe-load",
        "title": "RGBE File Loader",
        "description": "RGBE image loader (Radiance HDR format).",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:rgbe-save",
        "title": "RGBE File Saver",
        "description": "RGBE image saver (Radiance HDR format)",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:ripple",
        "title": "Ripple",
        "description": "Displace pixels in a ripple pattern",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "amplitude",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 25.00,
                "blurb": null,
                "nick": "Amplitude"
            }
            ,
            {
                "id": "period",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 200.00,
                "blurb": null,
                "nick": "Period"
            }
            ,
            {
                "id": "phi",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Phase shift"
            }
            ,
            {
                "id": "angle",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Angle"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": null,
                "nick": "Resampling method"
            }
            ,
            {
                "id": "wave-type",
                "type": "enum",
                "elements": [
                    { "label": "Sine", "value": "sine" },
                    { "label": "Triangle", "value": "triangle" }],
                "def": "sine",
                "blurb": null,
                "nick": "Wave type"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "tileable",
                "type": "boolean",
                "def": false,
                "blurb": "Retain tilebility",
                "nick": "Tileable"
            }
        ]
    }
    ,
    {
        "name": "gegl:rotate",
        "title": "Rotate",
        "description": "Rotate the buffer around the specified origin.",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "degrees",
                "type": "number",
                "range": { "min": -720.00, "max": 720.00 },
                "def": 0.00,
                "blurb": "Angle to rotate (counter-clockwise)",
                "nick": "Degrees"
            }
        ]
    }
    ,
    {
        "name": "gegl:rotate-on-center",
        "title": "Rotate on center",
        "description": "Rotate the buffer around its center, taking care of possible offsets.",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "degrees",
                "type": "number",
                "def": 0.00,
                "blurb": "Angle to rotate (counter-clockwise)",
                "nick": "Degrees"
            }
            ,
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "Ignored. Always uses center of input buffer",
                "nick": "origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Ignored. Always uses center of input buffer",
                "nick": "origin-y"
            }
        ]
    }
    ,
    {
        "name": "gegl:saturation",
        "title": "Saturation",
        "description": "Changes the saturation",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 1.00,
                "blurb": "Scale, strength of effect",
                "nick": "Scale"
            }
            ,
            {
                "id": "colorspace",
                "type": "enum",
                "elements": [
                    { "label": "Native", "value": "Native" },
                    { "label": "CIE Lab/Lch", "value": "CIE-Lab" }],
                "def": "Native",
                "blurb": null,
                "nick": "Interpolation Color Space"
            }
        ]
    }
    ,
    {
        "name": "gegl:save",
        "title": "Save",
        "description": "Multipurpose file saver, that uses other native save handlers depending on extension, use the format specific save ops to specify additional parameters.",
        "categories": "meta:output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to save.",
                "nick": "File"
            }
        ]
    }
    ,
    {
        "name": "gegl:save-pixbuf",
        "title": "Store in GdkPixbuf",
        "description": "Store image in a GdkPixbuf.",
        "categories": "programming:output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "pixbuf",
                "type": "gpointer",
                "def": "",
                "blurb": null,
                "nick": "Pixbuf location"
            }
        ]
    }
    ,
    {
        "name": "gegl:scale-ratio",
        "title": "Scale ratio",
        "description": "Scales the buffer according to a ratio.",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": 0.00,
                "blurb": "Horizontal scale factor",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": 0.00,
                "blurb": "Vertical scale factor",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:scale-size",
        "title": "Scale size",
        "description": "Scales the buffer according to a size.",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": 100.00,
                "blurb": "Horizontal size",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": 100.00,
                "blurb": "Vertical size",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:scale-size-keepaspect",
        "title": "Scale size keep aspect",
        "description": "Scales the buffer to a size, preserving aspect ratio",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "abyss-policy",
                "type": "enum",
                "elements": [
                    { "label": "None", "value": "none" },
                    { "label": "Clamp", "value": "clamp" },
                    { "label": "Loop", "value": "loop" },
                    { "label": "Black", "value": "black" }],
                "def": "none",
                "blurb": "How image edges are handled",
                "nick": "Abyss policy"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": -1.00,
                "blurb": "Horizontal size",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "range": { "min": -9000.00, "max": 9000.00 },
                "def": -1.00,
                "blurb": "Vertical size",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:sdl2-display",
        "title": "SDL2 Display",
        "description": "Displays the input buffer in an SDL2 window (restricted to one display op/process, due to SDL2 implementation issues).",
        "categories": "display",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "window-title",
                "type": "string",
                "def": "window_title",
                "blurb": "Title to be given to output window",
                "nick": "Window title"
            }
        ]
    }
    ,
    {
        "name": "gegl:seamless-clone",
        "title": null,
        "description": "Seamless cloning operation",
        "categories": "blend",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "max-refine-scale",
                "type": "int",
                "range": { "min": 0, "max": 100000 },
                "def": 5,
                "blurb": "Maximal scale of refinement points to be used for the interpolation mesh",
                "nick": "Refinement scale"
            }
            ,
            {
                "id": "xoff",
                "type": "int",
                "range": { "min": -100000, "max": 100000 },
                "def": 0,
                "blurb": "How much horizontal offset should applied to the paste",
                "nick": "Offset X"
            }
            ,
            {
                "id": "yoff",
                "type": "int",
                "range": { "min": -100000, "max": 100000 },
                "def": 0,
                "blurb": "How much horizontal offset should applied to the paste",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "error-msg",
                "type": "string",
                "def": "",
                "blurb": "An error message in case of a failure",
                "nick": "Error message"
            }
        ]
    }
    ,
    {
        "name": "gegl:seamless-clone-compose",
        "title": null,
        "description": "Seamless cloning composite operation",
        "categories": "compositors:meta:blend",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "max-refine-scale",
                "type": "int",
                "range": { "min": 0, "max": 100000 },
                "def": 2000,
                "blurb": "Maximal amount of refinement points to be used for the interpolation mesh",
                "nick": "Refinement steps"
            }
            ,
            {
                "id": "xoff",
                "type": "int",
                "range": { "min": 0, "max": 100000 },
                "def": 0,
                "blurb": "How much horizontal offset should applied to the paste",
                "nick": "Offset X"
            }
            ,
            {
                "id": "yoff",
                "type": "int",
                "range": { "min": 0, "max": 100000 },
                "def": 0,
                "blurb": "How much vertical offset should applied to the paste",
                "nick": "Offset Y"
            }
            ,
            {
                "id": "error-msg",
                "type": "string",
                "def": "",
                "blurb": "An error message in case of a failure",
                "nick": "Error message"
            }
        ]
    }
    ,
    {
        "name": "gegl:sepia",
        "title": "Sepia",
        "description": "Apply a sepia tone to the input image",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Strength of the sepia effect",
                "nick": "Effect strength"
            }
            ,
            {
                "id": "srgb",
                "type": "boolean",
                "def": true,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "gegl:shadows-highlights",
        "title": "Shadows-Highlights",
        "description": "Perform shadows and highlights correction",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "shadows",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Adjust exposure of shadows",
                "nick": "Shadows"
            }
            ,
            {
                "id": "highlights",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Adjust exposure of highlights",
                "nick": "Highlights"
            }
            ,
            {
                "id": "whitepoint",
                "type": "number",
                "range": { "min": -10.00, "max": 10.00 },
                "def": 0.00,
                "blurb": "Shift white point",
                "nick": "White point adjustment"
            }
            ,
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.10, "max": 1500.00 },
                "def": 100.00,
                "blurb": "Spatial extent",
                "nick": "Radius"
            }
            ,
            {
                "id": "compress",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Compress the effect on shadows/highlights and preserve midtones",
                "nick": "Compress"
            }
            ,
            {
                "id": "shadows-ccorrect",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 100.00,
                "blurb": "Adjust saturation of shadows",
                "nick": "Shadows color adjustment"
            }
            ,
            {
                "id": "highlights-ccorrect",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Adjust saturation of highlights",
                "nick": "Highlights color adjustment"
            }
        ]
    }
    ,
    {
        "name": "gegl:shadows-highlights-correction",
        "title": null,
        "description": "Lighten shadows and darken highlights",
        "categories": "hidden",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "shadows",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Adjust exposure of shadows",
                "nick": "Shadows"
            }
            ,
            {
                "id": "highlights",
                "type": "number",
                "range": { "min": -100.00, "max": 100.00 },
                "def": 0.00,
                "blurb": "Adjust exposure of highlights",
                "nick": "Highlights"
            }
            ,
            {
                "id": "whitepoint",
                "type": "number",
                "range": { "min": -10.00, "max": 10.00 },
                "def": 0.00,
                "blurb": "Shift white point",
                "nick": "White point adjustment"
            }
            ,
            {
                "id": "compress",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Compress the effect on shadows/highlights and preserve midtones",
                "nick": "Compress"
            }
            ,
            {
                "id": "shadows-ccorrect",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 100.00,
                "blurb": "Adjust saturation of shadows",
                "nick": "Shadows color adjustment"
            }
            ,
            {
                "id": "highlights-ccorrect",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": "Adjust saturation of highlights",
                "nick": "Highlights color adjustment"
            }
        ]
    }
    ,
    {
        "name": "gegl:shear",
        "title": "Shear",
        "description": "Shears the buffer. ",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.00,
                "blurb": "Horizontal shear amount",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.00,
                "blurb": "Vertical shear amount",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:shift",
        "title": "Shift",
        "description": "Shift each row or column of pixels by a random amount",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "shift",
                "type": "int",
                "range": { "min": 0, "max": 200 },
                "def": 5,
                "blurb": "Maximum amount to shift",
                "nick": "Shift"
            }
            ,
            {
                "id": "direction",
                "type": "enum",
                "elements": [
                    { "label": "Horizontal", "value": "horizontal" }],
                "def": "horizontal",
                "blurb": null,
                "nick": "Shift direction"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:simplex-noise",
        "title": "Simplex Noise",
        "description": "Generates a solid noise texture.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00, "max": 20.00 },
                "def": 1.00,
                "blurb": "The scale of the noise function",
                "nick": "Scale"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 20 },
                "def": 1,
                "blurb": "The number of noise octaves.",
                "nick": "Iterations"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": "The random seed for the noise function",
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:sinus",
        "title": "Sinus",
        "description": "Generate complex sinusoidal textures",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x-scale",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 15.00,
                "blurb": "Scale value for x axis",
                "nick": "X Scale"
            }
            ,
            {
                "id": "y-scale",
                "type": "number",
                "range": { "min": 0.00 },
                "def": 15.00,
                "blurb": "Scale value for y axis",
                "nick": "Y Scale"
            }
            ,
            {
                "id": "complexity",
                "type": "number",
                "range": { "min": 0.00, "max": 15.00 },
                "def": 1.00,
                "blurb": "Complexity factor",
                "nick": "Complexity"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
            ,
            {
                "id": "tiling",
                "type": "boolean",
                "def": true,
                "blurb": "If set, the pattern generated will tile",
                "nick": "Force tiling"
            }
            ,
            {
                "id": "perturbation",
                "type": "boolean",
                "def": true,
                "blurb": "If set, the pattern will be a little more distorted",
                "nick": "Distorted"
            }
            ,
            {
                "id": "color1",
                "type": "color",
                "def": "#ffff00ff",
                "blurb": null,
                "nick": "Color 1"
            }
            ,
            {
                "id": "color2",
                "type": "color",
                "def": "#0000ffff",
                "blurb": null,
                "nick": "Color 2"
            }
            ,
            {
                "id": "blend-mode",
                "type": "enum",
                "elements": [
                    { "label": "Linear", "value": "linear" },
                    { "label": "Bilinear", "value": "bilinear" }],
                "def": "(null)",
                "blurb": null,
                "nick": "Blend Mode"
            }
            ,
            {
                "id": "blend-power",
                "type": "number",
                "range": { "min": -7.50, "max": 7.50 },
                "def": 0.00,
                "blurb": "Power used to stretch the blend",
                "nick": "Exponent"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 1024,
                "blurb": "Width of the generated buffer",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 768,
                "blurb": "Height of the generated buffer",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:slic",
        "title": "Simple Linear Iterative Clustering",
        "description": "Superpixels based on k-means clustering",
        "categories": "color:segmentation",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "cluster-size",
                "type": "int",
                "range": { "min": 2 },
                "def": 32,
                "blurb": "Size of a region side",
                "nick": "Regions size"
            }
            ,
            {
                "id": "compactness",
                "type": "int",
                "range": { "min": 1, "max": 40 },
                "def": 20,
                "blurb": "Cluster size",
                "nick": "Compactness"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 30 },
                "def": 1,
                "blurb": "Number of iterations",
                "nick": "Iterations"
            }
        ]
    }
    ,
    {
        "name": "gegl:snn-mean",
        "title": "Symmetric Nearest Neighbour",
        "description": "Noise reducing edge preserving blur filter based on Symmetric Nearest Neighbours",
        "categories": "enhance:noise-reduction",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 0, "max": 100 },
                "def": 8,
                "blurb": "Radius of square pixel region, (width and height will be radius*2+1)",
                "nick": "Radius"
            }
            ,
            {
                "id": "pairs",
                "type": "int",
                "range": { "min": 1, "max": 2 },
                "def": 2,
                "blurb": "Number of pairs; higher number preserves more acute features",
                "nick": "Pairs"
            }
        ]
    }
    ,
    {
        "name": "gegl:soft-light",
        "title": "Soft-light",
        "description": "SVG blend operation soft-light (<code>if 2 * cA < aA: d = cB * (aA - (aB == 0 ? 1 : 1 - cB / aB) * (2 * cA - aA)) + cA * (1 - aB) + cB * (1 - aA); if 8 * cB <= aB: d = cB * (aA - (aB == 0 ? 1 : 1 - cB / aB) * (2 * cA - aA) * (aB == 0 ? 3 : 3 - 8 * cB / aB)) + cA * (1 - aB) + cB * (1 - aA); otherwise: d = (aA * cB + (aB == 0 ? 0 : sqrt (cB / aB) * aB - cB) * (2 * cA - aA)) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "gegl:softglow",
        "title": "Softglow",
        "description": "Simulate glow by making highlights intense and fuzzy",
        "categories": "artistic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "glow-radius",
                "type": "number",
                "range": { "min": 1.00, "max": 50.00 },
                "def": 10.00,
                "blurb": null,
                "nick": "Glow radius"
            }
            ,
            {
                "id": "brightness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.30,
                "blurb": null,
                "nick": "Brightness"
            }
            ,
            {
                "id": "sharpness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.85,
                "blurb": null,
                "nick": "Sharpness"
            }
        ]
    }
    ,
    {
        "name": "gegl:spherize",
        "title": "Spherize",
        "description": "Wrap image around a spherical cap",
        "categories": "distort:map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "mode",
                "type": "enum",
                "elements": [
                    { "label": "Radial", "value": "radial" },
                    { "label": "Horizontal", "value": "horizontal" }],
                "def": "radial",
                "blurb": "Displacement mode",
                "nick": "Mode"
            }
            ,
            {
                "id": "angle-of-view",
                "type": "number",
                "range": { "min": 0.00, "max": 180.00 },
                "def": 0.00,
                "blurb": "Camera angle of view",
                "nick": "Angle of view"
            }
            ,
            {
                "id": "curvature",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Spherical cap apex angle, as a fraction of the co-angle of view",
                "nick": "Curvature"
            }
            ,
            {
                "id": "amount",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "Displacement scaling factor (negative values refer to the inverse displacement)",
                "nick": "Amount"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Mathematical method for reconstructing pixel values",
                "nick": "Resampling method"
            }
        ]
    }
    ,
    {
        "name": "gegl:spiral",
        "title": "Spiral",
        "description": "Spiral renderer",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "type",
                "type": "enum",
                "elements": [
                    { "label": "Linear", "value": "linear" }],
                "def": "linear",
                "blurb": "Spiral type",
                "nick": "Type"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.50,
                "blurb": "Spiral origin X coordinate",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.50,
                "blurb": "Spiral origin Y coordinate",
                "nick": "Y"
            }
            ,
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 1.00 },
                "def": 100.00,
                "blurb": "Spiral radius",
                "nick": "Radius"
            }
            ,
            {
                "id": "base",
                "type": "number",
                "range": { "min": 1.00 },
                "def": 2.00,
                "blurb": "Logarithmic spiral base",
                "nick": "Base"
            }
            ,
            {
                "id": "balance",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Area balance between the two colors",
                "nick": "Balance"
            }
            ,
            {
                "id": "rotation",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Spiral rotation",
                "nick": "Rotation"
            }
            ,
            {
                "id": "direction",
                "type": "enum",
                "elements": [
                    { "label": "Clockwise", "value": "cw" }],
                "def": "cw",
                "blurb": "Spiral swirl direction",
                "nick": "Direction"
            }
            ,
            {
                "id": "color1",
                "type": "color",
                "def": "#000000ff",
                "blurb": null,
                "nick": "Color 1"
            }
            ,
            {
                "id": "color2",
                "type": "color",
                "def": "#ffffffff",
                "blurb": null,
                "nick": "Color 2"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 1024,
                "blurb": "Width of the generated buffer",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 768,
                "blurb": "Height of the generated buffer",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:stereographic-projection",
        "title": "Little Planet",
        "description": "Do a stereographic/little planet transform of an equirectangular image.",
        "categories": "map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pan",
                "type": "number",
                "range": { "min": -360.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Horizontal camera panning",
                "nick": "Pan"
            }
            ,
            {
                "id": "tilt",
                "type": "number",
                "range": { "min": -180.00, "max": 180.00 },
                "def": 90.00,
                "blurb": "Vertical camera panning",
                "nick": "Tilt"
            }
            ,
            {
                "id": "spin",
                "type": "number",
                "range": { "min": -360.00, "max": 360.00 },
                "def": 0.00,
                "blurb": "Spin angle around camera axis",
                "nick": "Spin"
            }
            ,
            {
                "id": "zoom",
                "type": "number",
                "range": { "min": 0.01, "max": 1000.00 },
                "def": 100.00,
                "blurb": "Zoom level",
                "nick": "Zoom"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": -1, "max": 10000 },
                "def": -1,
                "blurb": "output/rendering width in pixels, -1 for input width",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": -1, "max": 10000 },
                "def": -1,
                "blurb": "output/rendering height in pixels, -1 for input height",
                "nick": "Height"
            }
            ,
            {
                "id": "inverse",
                "type": "boolean",
                "def": false,
                "blurb": "Do the inverse mapping, useful for touching up zenith, nadir or other parts of panorama.",
                "nick": "Inverse transform"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "nearest",
                "blurb": "Image resampling method to use, for good results with double resampling when retouching panoramas, use nearest to generate the view and cubic or better for the inverse transform back to panorama.",
                "nick": "Resampling method"
            }
        ]
    }
    ,
    {
        "name": "gegl:stress",
        "title": "Spatio Temporal Retinex-like Envelope with Stochastic Sampling",
        "description": "Spatio Temporal Retinex-like Envelope with Stochastic Sampling",
        "categories": "enhance:tonemapping",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 2, "max": 6000 },
                "def": 300,
                "blurb": "Neighborhood taken into account, for enhancement ideal values are close to the longest side of the image, increasing this increases the runtime",
                "nick": "Radius"
            }
            ,
            {
                "id": "samples",
                "type": "int",
                "range": { "min": 2, "max": 500 },
                "def": 5,
                "blurb": "Number of samples to do per iteration looking for the range of colors",
                "nick": "Samples"
            }
            ,
            {
                "id": "iterations",
                "type": "int",
                "range": { "min": 1, "max": 1000 },
                "def": 5,
                "blurb": "Number of iterations, a higher number of iterations provides a less noisy rendering at a computational cost",
                "nick": "Iterations"
            }
            ,
            {
                "id": "enhance-shadows",
                "type": "boolean",
                "def": false,
                "blurb": "When enabled also enhances shadow regions - when disabled a more natural result is yielded",
                "nick": "Enhance Shadows"
            }
        ]
    }
    ,
    {
        "name": "gegl:stretch-contrast",
        "title": "Stretch Contrast",
        "description": "Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images).",
        "categories": "color:enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "keep-colors",
                "type": "boolean",
                "def": true,
                "blurb": "Impact each channel with the same amount",
                "nick": "Keep colors"
            }
            ,
            {
                "id": "perceptual",
                "type": "boolean",
                "def": false,
                "blurb": "When set operate on gamma corrected values instead of linear RGB - acting like the old normalize filter in GIMP",
                "nick": "Non-linear components"
            }
        ]
    }
    ,
    {
        "name": "gegl:stretch-contrast-hsv",
        "title": "Stretch Contrast HSV",
        "description": "Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images). This version differs from Contrast Autostretch in that it works in HSV space, and preserves hue.",
        "categories": "color:enhance",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:subtract",
        "title": "Subtract",
        "description": "Math operation subtract, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input - value",
        "categories": "compositors:math",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "def": 0.00,
                "blurb": "global value used if aux doesn't contain data",
                "nick": "Value"
            }
        ]
    }
    ,
    {
        "name": "gegl:supernova",
        "title": "Supernova",
        "description": "This plug-in produces an effect like a supernova burst. The amount of the light effect is approximately in proportion to 1/r, where r is the distance from the center of the star.",
        "categories": "light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "center-x",
                "type": "number",
                "def": 0.50,
                "blurb": "X coordinates of the center of supernova",
                "nick": "Center X"
            }
            ,
            {
                "id": "center-y",
                "type": "number",
                "def": 0.50,
                "blurb": "Y coordinates of the center of supernova",
                "nick": "Center Y"
            }
            ,
            {
                "id": "radius",
                "type": "int",
                "range": { "min": 1, "max": 20000 },
                "def": 20,
                "blurb": "Radius of supernova",
                "nick": "Radius"
            }
            ,
            {
                "id": "spokes-count",
                "type": "int",
                "range": { "min": 1, "max": 1024 },
                "def": 100,
                "blurb": "Number of spokes",
                "nick": "Number of spokes"
            }
            ,
            {
                "id": "random-hue",
                "type": "int",
                "range": { "min": 0, "max": 360 },
                "def": 0,
                "blurb": "Random hue",
                "nick": "Random hue"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#0000ffff",
                "blurb": "The color of supernova.",
                "nick": "Color"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": "The random seed for spokes and random hue",
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:svg-huerotate",
        "title": "SVG Hue Rotate",
        "description": "SVG color matrix operation svg_huerotate",
        "categories": "compositors:svgfilter",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "values",
                "type": "string",
                "def": "",
                "blurb": "list of <number>s",
                "nick": "Values"
            }
        ]
    }
    ,
    {
        "name": "gegl:svg-load",
        "title": "SVG File Loader",
        "description": "Load an SVG file using librsvg",
        "categories": "input",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI for file to load",
                "nick": "URI"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "def": -1,
                "blurb": "Width for rendered image",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "def": -1,
                "blurb": "Height for rendered image",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:svg-luminancetoalpha",
        "title": "SVG Luminance to Alpha",
        "description": "SVG color matrix operation svg_luminancetoalpha",
        "categories": "compositors:svgfilter",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:svg-matrix",
        "title": "SVG Matrix",
        "description": "SVG color matrix operation svg_matrix",
        "categories": "compositors:svgfilter",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "values",
                "type": "string",
                "def": "",
                "blurb": "list of <number>s",
                "nick": "Values"
            }
        ]
    }
    ,
    {
        "name": "gegl:svg-saturate",
        "title": "SVG Saturate",
        "description": "SVG color matrix operation svg_saturate",
        "categories": "compositors:svgfilter",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "values",
                "type": "string",
                "def": "",
                "blurb": "list of <number>s",
                "nick": "Values"
            }
        ]
    }
    ,
    {
        "name": "gegl:text",
        "title": "Render Text",
        "description": "Display a string of text using pango and cairo.",
        "categories": "render",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "string",
                "type": "string",
                "def": "Hello",
                "blurb": "String to display (utf8)",
                "nick": "Text"
            }
            ,
            {
                "id": "font",
                "type": "string",
                "def": "Sans",
                "blurb": "Font family (utf8)",
                "nick": "Font family"
            }
            ,
            {
                "id": "size",
                "type": "number",
                "range": { "min": 0.00, "max": 2048.00 },
                "def": 10.00,
                "blurb": "Font size in pixels.",
                "nick": "Size"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Color for the text (defaults to 'black')",
                "nick": "Color"
            }
            ,
            {
                "id": "wrap",
                "type": "int",
                "range": { "min": -1, "max": 1000000 },
                "def": -1,
                "blurb": "Sets the width in pixels at which long lines will wrap. Use -1 for no wrapping.",
                "nick": "Wrap width"
            }
            ,
            {
                "id": "vertical-wrap",
                "type": "int",
                "range": { "min": -1, "max": 1000000 },
                "def": -1,
                "blurb": "Sets the height in pixels according to which the text is vertically justified. Use -1 for no vertical justification.",
                "nick": "Wrap height"
            }
            ,
            {
                "id": "alignment",
                "type": "int",
                "range": { "min": 0, "max": 2 },
                "def": 0,
                "blurb": "Alignment for multi-line text (0=Left, 1=Center, 2=Right)",
                "nick": "Justification"
            }
            ,
            {
                "id": "vertical-alignment",
                "type": "int",
                "range": { "min": 0, "max": 2 },
                "def": 0,
                "blurb": "Vertical text alignment (0=Top, 1=Middle, 2=Bottom)",
                "nick": "Vertical justification"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "def": 0,
                "blurb": "Rendered width in pixels. (read only)",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "def": 0,
                "blurb": "Rendered height in pixels. (read only)",
                "nick": "Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:texturize-canvas",
        "title": "Texturize Canvas",
        "description": "Textures the image as if it were an artist's canvas.",
        "categories": "artistic",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "direction",
                "type": "enum",
                "elements": [
                    { "label": "Top-right", "value": "top-right" },
                    { "label": "Top-left", "value": "top-left" },
                    { "label": "Bottom-left", "value": "bottom-left" }],
                "def": "top-right",
                "blurb": "Position of the light source which lightens the canvas: Top-right, Top-left, Bottom-left or Bottom-right",
                "nick": "Direction"
            }
            ,
            {
                "id": "depth",
                "type": "int",
                "range": { "min": 1, "max": 50 },
                "def": 4,
                "blurb": "Apparent depth of the rendered canvas effect; from 1 (very flat) to 50 (very deep)",
                "nick": "Depth"
            }
        ]
    }
    ,
    {
        "name": "gegl:threshold",
        "title": "Threshold",
        "description": "Thresholds the image to white/black based on either the global value set in the value property, or per pixel from the aux input.",
        "categories": "color",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "value",
                "type": "number",
                "range": { "min": -200.00, "max": 200.00 },
                "def": 0.50,
                "blurb": "Scalar threshold level (overridden if an auxiliary input buffer is provided.).",
                "nick": "Threshold"
            }
        ]
    }
    ,
    {
        "name": "gegl:tiff-load",
        "title": "TIFF File Loader",
        "description": "TIFF image loader using libtiff",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI for file to load",
                "nick": "URI"
            }
            ,
            {
                "id": "directory",
                "type": "int",
                "range": { "min": 1 },
                "def": 1,
                "blurb": "Image file directory (subfile)",
                "nick": "Directory"
            }
        ]
    }
    ,
    {
        "name": "gegl:tiff-save",
        "title": "TIFF File Saver",
        "description": "TIFF image saver using libtiff",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout",
                "nick": "File"
            }
            ,
            {
                "id": "bitdepth",
                "type": "int",
                "range": { "min": -1, "max": 64 },
                "def": -1,
                "blurb": "-1, 8, 16, 32 and 64 are the currently accepted values, -1 means auto",
                "nick": "Bitdepth"
            }
            ,
            {
                "id": "fp",
                "type": "int",
                "range": { "min": -1, "max": 1 },
                "def": -1,
                "blurb": "floating point -1 means auto, 0 means integer 1 meant float.",
                "nick": "use floating point"
            }
        ]
    }
    ,
    {
        "name": "gegl:tile",
        "title": "Tile",
        "description": "Infinitely repeats the input image.",
        "categories": "tile",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "offset-x",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Horizontal offset"
            }
            ,
            {
                "id": "offset-y",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Vertical offset"
            }
        ]
    }
    ,
    {
        "name": "gegl:tile-glass",
        "title": "Tile Glass",
        "description": "Simulate distortion caused by rectangular glass tiles",
        "categories": "artistic:map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "tile-width",
                "type": "int",
                "range": { "min": 5, "max": 500 },
                "def": 25,
                "blurb": null,
                "nick": "Tile Width"
            }
            ,
            {
                "id": "tile-height",
                "type": "int",
                "range": { "min": 5, "max": 500 },
                "def": 25,
                "blurb": null,
                "nick": "Tile Height"
            }
        ]
    }
    ,
    {
        "name": "gegl:tile-paper",
        "title": "Paper Tile",
        "description": "Cut image into paper tiles, and slide them",
        "categories": "artistic:map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "tile-width",
                "type": "int",
                "range": { "min": 1 },
                "def": 155,
                "blurb": "Width of the tile",
                "nick": "Tile Width"
            }
            ,
            {
                "id": "tile-height",
                "type": "int",
                "range": { "min": 1 },
                "def": 56,
                "blurb": "Height of the tile",
                "nick": "Tile Height"
            }
            ,
            {
                "id": "move-rate",
                "type": "number",
                "range": { "min": 1.00, "max": 100.00 },
                "def": 25.00,
                "blurb": "Move rate",
                "nick": "Move rate"
            }
            ,
            {
                "id": "wrap-around",
                "type": "boolean",
                "def": false,
                "blurb": "Wrap the fractional tiles",
                "nick": "Wrap around"
            }
            ,
            {
                "id": "fractional-type",
                "type": "enum",
                "elements": [
                    { "label": "Background", "value": "background" },
                    { "label": "Ignore", "value": "ignore" }],
                "def": "(null)",
                "blurb": "Fractional Type",
                "nick": "Fractional type"
            }
            ,
            {
                "id": "centering",
                "type": "boolean",
                "def": true,
                "blurb": "Centering of the tiles",
                "nick": "Centering"
            }
            ,
            {
                "id": "background-type",
                "type": "enum",
                "elements": [
                    { "label": "Transparent", "value": "transparent" },
                    { "label": "Inverted image", "value": "invert" },
                    { "label": "Image", "value": "image" }],
                "def": "invert",
                "blurb": "Background type",
                "nick": "Background type"
            }
            ,
            {
                "id": "bg-color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "The tiles' background color",
                "nick": "Background color"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:tile-seamless",
        "title": "Make Seamlessly tileable",
        "description": "Make the input buffer seamlessly tileable. The algorithm is not content-aware, so the result may need post-processing.",
        "categories": "tile",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:transform",
        "title": "Transform",
        "description": "Do a transformation using SVG syntax transformation.",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "transform",
                "type": "string",
                "def": "",
                "blurb": "Transformation SVG syntax transformation string",
                "nick": "Transform"
            }
        ]
    }
    ,
    {
        "name": "gegl:translate",
        "title": "Translate",
        "description": "Repositions the buffer (with subpixel precision), if integer coordinates are passed a fast-path without resampling is used",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "origin-x",
                "type": "number",
                "def": 0.00,
                "blurb": "X coordinate of origin",
                "nick": "Origin-x"
            }
            ,
            {
                "id": "origin-y",
                "type": "number",
                "def": 0.00,
                "blurb": "Y coordinate of origin",
                "nick": "Origin-y"
            }
            ,
            {
                "id": "near-z",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Z coordinate of the near clipping plane",
                "nick": "Near-z"
            }
            ,
            {
                "id": "sampler",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "linear",
                "blurb": "Sampler used internally",
                "nick": "Sampler"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.00,
                "blurb": "Horizontal translation",
                "nick": "X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.00,
                "blurb": "Vertical translation",
                "nick": "Y"
            }
        ]
    }
    ,
    {
        "name": "gegl:unpremultiply",
        "title": "Unpremultiply alpha",
        "description": "Unpremultiplies a buffer that contains pre-multiplied colors (but according to the babl format is not.)",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:unsharp-mask",
        "title": "Sharpen (Unsharp Mask)",
        "description": "Sharpen image, by adding difference to blurred image, a technique for sharpening originally used in darkrooms.",
        "categories": "enhance:sharpen",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "std-dev",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 3.00,
                "blurb": "Expressed as standard deviation, in pixels",
                "nick": "Radius"
            }
            ,
            {
                "id": "scale",
                "type": "number",
                "range": { "min": 0.00, "max": 300.00 },
                "def": 0.50,
                "blurb": "Scaling factor for unsharp-mask, the strength of effect",
                "nick": "Amount"
            }
            ,
            {
                "id": "threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Threshold"
            }
        ]
    }
    ,
    {
        "name": "gegl:v4l",
        "title": "Video4Linux Frame Source",
        "description": "Video4Linux input, webcams framegrabbers and similar devices.",
        "categories": "input:video",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "/dev/video0",
                "blurb": "Path to v4l device",
                "nick": "Path"
            }
            ,
            {
                "id": "width",
                "type": "int",
                "range": { "min": 0 },
                "def": 320,
                "blurb": "Width for rendered image",
                "nick": "Width"
            }
            ,
            {
                "id": "height",
                "type": "int",
                "range": { "min": 0 },
                "def": 240,
                "blurb": "Height for rendered image",
                "nick": "Height"
            }
            ,
            {
                "id": "frame",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": "current frame number, can be changed to trigger a reload of the image.",
                "nick": "Frame"
            }
            ,
            {
                "id": "fps",
                "type": "int",
                "range": { "min": 0 },
                "def": 0,
                "blurb": "autotrigger reload this many times a second.",
                "nick": "FPS"
            }
        ]
    }
    ,
    {
        "name": "gegl:value-invert",
        "title": "Value Invert",
        "description": "Invert the value component, the result has the brightness inverted, keeping the color.",
        "categories": "color",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:value-propagate",
        "title": "Value Propagate",
        "description": "Propagate certain values to neighboring pixels. Erode and dilate any color or opacity.",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "mode",
                "type": "enum",
                "elements": [
                    { "label": "More white (larger value)", "value": "white" },
                    { "label": "More black (smaller value)", "value": "black" },
                    { "label": "Middle value to peaks", "value": "middle" },
                    { "label": "Color to peaks", "value": "color-peak" },
                    { "label": "Only color", "value": "color" },
                    { "label": "More opaque", "value": "opaque" }],
                "def": "white",
                "blurb": "Mode of value propagation",
                "nick": "Mode"
            }
            ,
            {
                "id": "lower-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "The minimum difference in value at which to propagate a pixel",
                "nick": "Lower threshold"
            }
            ,
            {
                "id": "upper-threshold",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "The maximum difference in value at which to propagate a pixel",
                "nick": "Upper threshold"
            }
            ,
            {
                "id": "rate",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "The strength with which to propagate a pixel to its neighbors",
                "nick": "Propagating rate"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#0000ffff",
                "blurb": "Color to use for the \"Only color\" and \"Color to peaks\" modes",
                "nick": "Color"
            }
            ,
            {
                "id": "top",
                "type": "boolean",
                "def": true,
                "blurb": "Propagate to top",
                "nick": "To top"
            }
            ,
            {
                "id": "left",
                "type": "boolean",
                "def": true,
                "blurb": "Propagate to left",
                "nick": "To left"
            }
            ,
            {
                "id": "right",
                "type": "boolean",
                "def": true,
                "blurb": "Propagate to right",
                "nick": "To right"
            }
            ,
            {
                "id": "bottom",
                "type": "boolean",
                "def": true,
                "blurb": "Propagate to bottom",
                "nick": "To bottom"
            }
            ,
            {
                "id": "value",
                "type": "boolean",
                "def": true,
                "blurb": "Whether to propagate a pixel's color",
                "nick": "Propagating value channel"
            }
            ,
            {
                "id": "alpha",
                "type": "boolean",
                "def": true,
                "blurb": "Whether to propagate a pixel's opacity",
                "nick": "Propagating alpha channel"
            }
        ]
    }
    ,
    {
        "name": "gegl:vector-stroke",
        "title": "Vector Stroke",
        "description": "Renders a vector stroke",
        "categories": "render:vector",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Color of paint to use for stroking.",
                "nick": "Color"
            }
            ,
            {
                "id": "width",
                "type": "number",
                "range": { "min": 0.00, "max": 200.00 },
                "def": 2.00,
                "blurb": "The width of the brush used to stroke the path.",
                "nick": "Width"
            }
            ,
            {
                "id": "opacity",
                "type": "number",
                "range": { "min": -2.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Opacity of stroke, note, does not behave like SVG since at the moment stroking is done using an airbrush tool.",
                "nick": "Opacity"
            }
            ,
            {
                "id": "transform",
                "type": "string",
                "def": "",
                "blurb": "svg style description of transform.",
                "nick": "Transform"
            }
            ,
            {
                "id": "d",
                "type": "GeglPath",
                "def": "",
                "blurb": "A GeglVector representing the path of the stroke",
                "nick": "Vector"
            }
        ]
    }
    ,
    {
        "name": "gegl:video-degradation",
        "title": "Video Degradation",
        "description": "This function simulates the degradation of being on an old low-dotpitch RGB video monitor.",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "pattern",
                "type": "enum",
                "elements": [
                    { "label": "Staggered", "value": "staggered" },
                    { "label": "Large staggered", "value": "large-staggered" },
                    { "label": "Striped", "value": "striped" },
                    { "label": "Wide striped", "value": "wide-striped" },
                    { "label": "Long staggered", "value": "long-staggered" },
                    { "label": "3x3", "value": "3x3" },
                    { "label": "Large 3x3", "value": "large-3x3" },
                    { "label": "Hex", "value": "hex" }],
                "def": "striped",
                "blurb": "Type of RGB pattern to use",
                "nick": "Pattern"
            }
            ,
            {
                "id": "additive",
                "type": "boolean",
                "def": true,
                "blurb": "Whether the function adds the result to the original image.",
                "nick": "Additive"
            }
            ,
            {
                "id": "rotated",
                "type": "boolean",
                "def": false,
                "blurb": "Whether to rotate the RGB pattern by ninety degrees.",
                "nick": "Rotated"
            }
        ]
    }
    ,
    {
        "name": "gegl:vignette",
        "title": "Vignette",
        "description": "Applies a vignette to an image. Simulates the luminance fall off at the edge of exposed film, and some other fuzzier border effects that can naturally occur with analog photography",
        "categories": "render:light",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "shape",
                "type": "enum",
                "elements": [
                    { "label": "Circle", "value": "circle" },
                    { "label": "Square", "value": "square" }],
                "def": "circle",
                "blurb": null,
                "nick": "Vignette shape"
            }
            ,
            {
                "id": "color",
                "type": "color",
                "def": "#000000ff",
                "blurb": "Defaults to 'black', you can use transparency here to erase portions of an image",
                "nick": "Color"
            }
            ,
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00, "max": 3.00 },
                "def": 1.20,
                "blurb": "How far out vignetting goes as portion of half image diagonal",
                "nick": "Radius"
            }
            ,
            {
                "id": "softness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.80,
                "blurb": null,
                "nick": "Softness"
            }
            ,
            {
                "id": "gamma",
                "type": "number",
                "range": { "min": 0.00, "max": 10.00 },
                "def": 2.00,
                "blurb": "Falloff linearity",
                "nick": "Gamma"
            }
            ,
            {
                "id": "proportion",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 1.00,
                "blurb": "How close we are to image proportions",
                "nick": "Proportion"
            }
            ,
            {
                "id": "squeeze",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Aspect ratio to use, -0.5 = 1:2, 0.0 = 1:1, 0.5 = 2:1, -1.0 = 1:inf 1.0 = inf:1, this is applied after proportion is taken into account, to directly use squeeze factor as proportions, set proportion to 0.0.",
                "nick": "Squeeze"
            }
            ,
            {
                "id": "x",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center Y"
            }
            ,
            {
                "id": "rotation",
                "type": "number",
                "range": { "min": 0.00, "max": 360.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Rotation"
            }
        ]
    }
    ,
    {
        "name": "gegl:warp",
        "title": "Warp",
        "description": "Compute a relative displacement mapping from a stroke",
        "categories": "transform",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "strength",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 50.00,
                "blurb": null,
                "nick": "Strength"
            }
            ,
            {
                "id": "size",
                "type": "number",
                "range": { "min": 1.00, "max": 10000.00 },
                "def": 40.00,
                "blurb": null,
                "nick": "Size"
            }
            ,
            {
                "id": "hardness",
                "type": "number",
                "range": { "min": 0.00, "max": 1.00 },
                "def": 0.50,
                "blurb": null,
                "nick": "Hardness"
            }
            ,
            {
                "id": "spacing",
                "type": "number",
                "range": { "min": 0.00, "max": 100.00 },
                "def": 0.01,
                "blurb": null,
                "nick": "Spacing"
            }
            ,
            {
                "id": "stroke",
                "type": "GeglPath",
                "def": 0.01,
                "blurb": null,
                "nick": "Stroke"
            }
            ,
            {
                "id": "behavior",
                "type": "enum",
                "elements": [
                    { "label": "Move pixels", "value": "move" },
                    { "label": "Grow area", "value": "grow" },
                    { "label": "Shrink area", "value": "shrink" },
                    { "label": "Swirl clockwise", "value": "swirl-cw" },
                    { "label": "Swirl counter-clockwise", "value": "swirl-ccw" },
                    { "label": "Erase warping", "value": "erase" }],
                "def": "move",
                "blurb": "Behavior of the op",
                "nick": "Behavior"
            }
        ]
    }
    ,
    {
        "name": "gegl:waterpixels",
        "title": "Waterpixels",
        "description": "Superpixels based on the watershed transformation",
        "categories": "segmentation",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "size",
                "type": "int",
                "range": { "min": 8 },
                "def": 32,
                "blurb": null,
                "nick": "Superpixels size"
            }
            ,
            {
                "id": "smoothness",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Gradient smoothness"
            }
            ,
            {
                "id": "regularization",
                "type": "int",
                "range": { "min": 0, "max": 50 },
                "def": 0,
                "blurb": "trade-off between superpixel regularity and adherence to object boundaries",
                "nick": "Spatial regularization"
            }
            ,
            {
                "id": "fill",
                "type": "enum",
                "elements": [
                    { "label": "Average", "value": "average" }],
                "def": "average",
                "blurb": "How to fill superpixels",
                "nick": "Superpixels color"
            }
        ]
    }
    ,
    {
        "name": "gegl:watershed-transform",
        "title": "Watershed Transform",
        "description": "Labels propagation by watershed transformation. Output buffer will keep the input format. Unlabelled pixels are marked with a given flag value (by default: last component with NULL value). The aux buffer is a \"Y u8\" image representing the priority levels (lower value is higher priority). If aux is absent, all labellized pixels have the same priority and propagated labels have a lower priority.",
        "categories": "hidden",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "flag-component",
                "type": "int",
                "def": -1,
                "blurb": "Index of component flagging unlabelled pixels",
                "nick": "Index of component flagging unlabelled pixels"
            }
            ,
            {
                "id": "flag",
                "type": "gpointer",
                "def": -1,
                "blurb": "Pointer to flag value for unlabelled pixels",
                "nick": "flag"
            }
        ]
    }
    ,
    {
        "name": "gegl:wavelet-blur",
        "title": "Wavelet Blur",
        "description": "This blur is used for the wavelet decomposition filter, each pixel is computed from another by the HAT transform",
        "categories": "blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 1.00,
                "blurb": "Radius of the wavelet blur",
                "nick": "Radius"
            }
        ]
    }
    ,
    {
        "name": "gegl:wavelet-blur-1d",
        "title": "1D Wavelet-blur",
        "description": "This blur is used for the wavelet decomposition filter, each pixel is computed from another by the HAT transform",
        "categories": "hidden:blur",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00, "max": 1500.00 },
                "def": 1.00,
                "blurb": "Radius of the wavelet blur",
                "nick": "Radius"
            }
            ,
            {
                "id": "orientation",
                "type": "enum",
                "elements": [
                    { "label": "Horizontal", "value": "horizontal" }],
                "def": "horizontal",
                "blurb": "The orientation of the blur - hor/ver",
                "nick": "Orientation"
            }
        ]
    }
    ,
    {
        "name": "gegl:waves",
        "title": "Waves",
        "description": "Distort the image with waves",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "x",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center X"
            }
            ,
            {
                "id": "y",
                "type": "number",
                "def": 0.50,
                "blurb": null,
                "nick": "Center Y"
            }
            ,
            {
                "id": "amplitude",
                "type": "number",
                "range": { "min": 0.00, "max": 1000.00 },
                "def": 25.00,
                "blurb": "Amplitude of the ripple",
                "nick": "Amplitude"
            }
            ,
            {
                "id": "period",
                "type": "number",
                "range": { "min": 0.10, "max": 1000.00 },
                "def": 100.00,
                "blurb": "Period (wavelength) of the ripple",
                "nick": "Period"
            }
            ,
            {
                "id": "phi",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": null,
                "nick": "Phase shift"
            }
            ,
            {
                "id": "aspect",
                "type": "number",
                "range": { "min": 0.10, "max": 10.00 },
                "def": 1.00,
                "blurb": null,
                "nick": "Aspect ratio"
            }
            ,
            {
                "id": "sampler-type",
                "type": "enum",
                "elements": [
                    { "label": "Nearest", "value": "nearest" },
                    { "label": "Linear", "value": "linear" },
                    { "label": "Cubic", "value": "cubic" },
                    { "label": "NoHalo", "value": "nohalo" }],
                "def": "cubic",
                "blurb": "Mathematical method for reconstructing pixel values",
                "nick": "Resampling method"
            }
            ,
            {
                "id": "clamp",
                "type": "boolean",
                "def": false,
                "blurb": "Limit deformation in the image area.",
                "nick": "Clamp deformation"
            }
        ]
    }
    ,
    {
        "name": "gegl:webp-load",
        "title": "WebP File Loader",
        "description": "WebP image loader.",
        "categories": "hidden",
        "inputs": [],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Path of file to load",
                "nick": "File"
            }
            ,
            {
                "id": "uri",
                "type": "string",
                "def": "",
                "blurb": "URI for file to load",
                "nick": "URI"
            }
        ]
    }
    ,
    {
        "name": "gegl:webp-save",
        "title": "WebP File Saver",
        "description": "WebP image saver",
        "categories": "output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "path",
                "type": "string",
                "def": "",
                "blurb": "Target path and filename, use '-' for stdout",
                "nick": "File"
            }
            ,
            {
                "id": "quality",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 90,
                "blurb": "WebP compression quality",
                "nick": "Quality"
            }
        ]
    }
    ,
    {
        "name": "gegl:weighted-blend",
        "title": "Weighted Blend",
        "description": "blend two images using alpha values as weights",
        "categories": "compositors:blend",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
        ]
    }
    ,
    {
        "name": "gegl:whirl-pinch",
        "title": "Whirl Pinch",
        "description": "Distort an image by whirling and pinching",
        "categories": "distort:map",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "whirl",
                "type": "number",
                "def": 90.00,
                "blurb": "Whirl angle (degrees)",
                "nick": "Whirl"
            }
            ,
            {
                "id": "pinch",
                "type": "number",
                "range": { "min": -1.00, "max": 1.00 },
                "def": 0.00,
                "blurb": "Pinch amount",
                "nick": "Pinch"
            }
            ,
            {
                "id": "radius",
                "type": "number",
                "range": { "min": 0.00, "max": 2.00 },
                "def": 1.00,
                "blurb": "Radius (1.0 is the largest circle that fits in the image, and 2.0 goes all the way to the corners)",
                "nick": "Radius"
            }
        ]
    }
    ,
    {
        "name": "gegl:wind",
        "title": "Wind",
        "description": "Wind-like bleed effect",
        "categories": "distort",
        "inputs": [
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "style",
                "type": "enum",
                "elements": [
                    { "label": "Wind", "value": "wind" }],
                "def": "wind",
                "blurb": "Style of effect",
                "nick": "Style"
            }
            ,
            {
                "id": "direction",
                "type": "enum",
                "elements": [
                    { "label": "Left", "value": "left" },
                    { "label": "Right", "value": "right" },
                    { "label": "Top", "value": "top" }],
                "def": "left",
                "blurb": "Direction of the effect",
                "nick": "Direction"
            }
            ,
            {
                "id": "edge",
                "type": "enum",
                "elements": [
                    { "label": "Both", "value": "both" },
                    { "label": "Leading", "value": "leading" }],
                "def": "leading",
                "blurb": "Edge behavior",
                "nick": "Edge Affected"
            }
            ,
            {
                "id": "threshold",
                "type": "int",
                "range": { "min": 0, "max": 50 },
                "def": 10,
                "blurb": "Higher values restrict the effect to fewer areas of the image",
                "nick": "Threshold"
            }
            ,
            {
                "id": "strength",
                "type": "int",
                "range": { "min": 1, "max": 100 },
                "def": 10,
                "blurb": "Higher values increase the magnitude of the effect",
                "nick": "Strength"
            }
            ,
            {
                "id": "seed",
                "type": "int",
                "def": 0,
                "blurb": null,
                "nick": "Random seed"
            }
        ]
    }
    ,
    {
        "name": "gegl:write-buffer",
        "title": "Write Buffer",
        "description": "Write input data into an existing GEGL buffer destination surface.",
        "categories": "programming:output",
        "inputs": [
            "input"],
        "outputs": [],
        "properties": [
            {
                "id": "buffer",
                "type": "GeglBuffer",
                "def": 0,
                "blurb": "A pre-existing GeglBuffer to write incoming buffer data to.",
                "nick": "Buffer location"
            }
        ]
    }
    ,
    {
        "name": "svg:clear",
        "title": "Clear",
        "description": "Porter Duff operation clear (d = 0.0f)",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:color-burn",
        "title": "Color-burn",
        "description": "SVG blend operation color-burn (<code>if cA * aB + cB * aA <= aA * aB: d = cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == 0 ? 1 : (aA * (cA * aB + cB * aA - aA * aB) / cA) + cA * (1 - aB) + cB * (1 - aA))</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:color-dodge",
        "title": "Color-dodge",
        "description": "SVG blend operation color-dodge (<code>if cA * aB + cB * aA >= aA * aB: d = aA * aB + cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == aA ? 1 : cB * aA / (aA == 0 ? 1 : 1 - cA / aA)) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:darken",
        "title": null,
        "description": "SVG blend operation darken (<code>d = MIN (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:difference",
        "title": null,
        "description": "SVG blend operation difference (<code>d = cA + cB - 2 * (MIN (cA * aB, cB * aA))</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:dst",
        "title": "Dst",
        "description": "Porter Duff operation dst (d = cB)",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:dst-atop",
        "title": "Dst-atop",
        "description": "Porter Duff operation dst-atop (d = cB * aA + cA * (1.0f - aB))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:dst-in",
        "title": "Dst-in",
        "description": "Porter Duff operation dst-in (d = cB * aA)",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:dst-out",
        "title": "Dst-out",
        "description": "Porter Duff operation dst-out (d = cB * (1.0f - aA))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:dst-over",
        "title": "Dst-over",
        "description": "Porter Duff operation dst-over (d = cB + cA * (1.0f - aB))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:exclusion",
        "title": null,
        "description": "SVG blend operation exclusion (<code>d = (cA * aB + cB * aA - 2 * cA * cB) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:hard-light",
        "title": "Hard-light",
        "description": "SVG blend operation hard-light (<code>if 2 * cA < aA: d = 2 * cA * cB + cA * (1 - aB) + cB * (1 - aA) otherwise: d = aA * aB - 2 * (aB - cB) * (aA - cA) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:lighten",
        "title": null,
        "description": "SVG blend operation lighten (<code>d = MAX (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:overlay",
        "title": "Overlay",
        "description": "SVG blend operation overlay (<code>if 2 * cB > aB: d = 2 * cA * cB + cA * (1 - aB) + cB * (1 - aA) otherwise: d = aA * aB - 2 * (aB - cB) * (aA - cA) + cA * (1 - aB) + cB * (1 - aA)</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:plus",
        "title": "Plus",
        "description": "SVG blend operation plus (<code>d = cA + cB</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:screen",
        "title": null,
        "description": "SVG blend operation screen (<code>d = cA + cB - cA * cB</code>)",
        "categories": "compositors:svgfilter",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:src",
        "title": "Src",
        "description": "Porter Duff operation src (d = cA)",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:src-atop",
        "title": "Src-atop",
        "description": "Porter Duff operation src-atop (d = cA * aB + cB * (1.0f - aA))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:src-in",
        "title": "Src-in",
        "description": "Porter Duff compositing operation src-in (formula:   cA * aB)",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:src-out",
        "title": "Src-out",
        "description": "Porter Duff operation src-out (d = cA * (1.0f - aB))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:src-over",
        "title": "Normal compositing",
        "description": "Porter Duff operation over (also known as normal mode, and src-over) (d = cA + cB * (1 - aA))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
    ,
    {
        "name": "svg:xor",
        "title": "Xor",
        "description": "Porter Duff operation xor (d = cA * (1.0f - aB)+ cB * (1.0f - aA))",
        "categories": "compositors:porter-duff",
        "inputs": [
            "aux",
            "input"],
        "outputs": [
            "output"],
        "properties": [
            {
                "id": "srgb",
                "type": "boolean",
                "def": false,
                "blurb": "Use sRGB gamma instead of linear",
                "nick": "sRGB"
            }
        ]
    }
]
