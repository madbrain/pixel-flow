FROM debian:sid-slim AS builder

RUN apt-get update && \
    apt-get -y install gcc make libgegl-dev && \
    rm -rf /var/lib/apt/lists/*

COPY gimp-plugin/ /work/
RUN cd /work && make

FROM python:3.9

  #apt install -y python3-dev libgirepository1.0-dev libgegl-dev && \
  #pip install PyGObject python-gegl websockets && \
RUN apt update && \
  apt install -y libgirepository1.0-dev libgegl-dev && \
  pip install PyGObject websockets && \
  rm -rf /var/lib/apt/lists/*

COPY --from=builder /work/gegl-gimp.so /usr/lib/x86_64-linux-gnu/gegl-0.4

RUN mkdir /opt/pixelflow/
COPY server.py /opt/pixelflow/

CMD [ "python", "/opt/pixelflow/server.py" ] 
