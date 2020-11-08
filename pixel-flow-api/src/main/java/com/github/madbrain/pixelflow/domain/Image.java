package com.github.madbrain.pixelflow.domain;

public class Image {
    private long modificationTime;
    private String name;

    public Image(long modificationTime, String name) {
        this.modificationTime = modificationTime;
        this.name = name;
    }

    public long getModificationTime() {
        return modificationTime;
    }

    public String getName() {
        return name;
    }
}
