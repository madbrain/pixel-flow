
PLUGIN=gegl-gimp.so
SRCS=colorize.c curve.c module.c
LIBS=gegl-0.4

CFLAGS=$(shell pkg-config --cflags $(LIBS)) -I.  -DGEGL_OP_BUNDLE -fPIC
LDFLAGS=$(shell pkg-config --libs $(LIBS))

OBJS=$(SRCS:.c=.o)

$(PLUGIN): $(OBJS)
	$(CC) $(CFLAGS) -shared -fPIC -o $@ $^ $(LDFLAGS)

%.o: %.c
	$(CC) $(CFLAGS) -c $<

clean:
	rm -rf *.o $(PLUGIN)
