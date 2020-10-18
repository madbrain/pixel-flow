
export enum CommonValueType {
    INTEGER = "integer",
    REAL = "real",
    BOOLEAN = "boolean",
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

export interface ValueDefinition {
    type: string;
    range?: Range;
    enumValues?: EnumElement[];
}