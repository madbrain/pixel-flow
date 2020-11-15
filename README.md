# Pixel Flow

Interactive Image Editor based on Node Graph.

![Screenshot](docs/screenshot.png)

Each Node Graph editor session is rendered interactively by its own
GEGL based server running in a Docker container.

## Running

Replace variable `PIXELFLOW_HOST` in `docker-compose.yml` by a local empty directory
which will used as storage for workspaces. Then run :

```
docker-compose up -d
```

## TODO

 * Add Kubernetes support
