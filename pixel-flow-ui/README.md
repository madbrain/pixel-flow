
# Pixel Flow UI

Typescript implementation of a node graph editor mainly inspired by Blender Nodes.

The editor is generic enough to be used in different contexts, as an example the editor is used as an
graphical frontend to create [GEGL](https://www.gegl.org/) node graphs.

Greatly inspired by [Laidout](https://laidout.org/) on using blender styles nodes
to drive GEGL processing.

# Screenshot

![Screenshot](docs/screenshot.png)

# TODO

* add curve editor
* rename NodeFactory to Graph to also handle connection creation (with GEGL specific ordering)
* order entries in TreeSelector based on labels

# BUGS

* "Delete" key not working on Firefox
* Key pad "."/SUPPR, CTRL-A and Escape not working
* Some CTRL-Z and CTRL-Y are lost after select opened => focus still on inputs ?
* Adjust zoom panning (zoom not properly centered on mouse)
