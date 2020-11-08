
export enum CommonValueType {
    INTEGER = "integer",
    REAL = "real",
    BOOLEAN = "boolean",
    STRING = "string",
    ENUM = "enum",
}

export interface Range {
    min: number;
    max: number;
}

export interface EnumElement {
    name: string;
    label: string;
}

export interface ValueConverter {
    serialize(value: any): any;
    deserialize(value: any): any;
}

export interface ValueDefinition {
    type: string;
    range?: Range;
    enumValues?: EnumElement[];
    converter?: ValueConverter;
}