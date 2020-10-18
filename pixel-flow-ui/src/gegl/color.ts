import { Color } from "../renderer";

export function convertColorFromString(value: string): Color {
    function getHex(index: number) {
        return parseInt(value.substring(index*2+1, index*2+3), 16);
    }
    if (value.startsWith('#') && value.length >= 7) {
        return {
            r: getHex(0),
            g: getHex(1),
            b: getHex(2)
        };
    }
    return { r: 0, g: 0, b: 0 };
}

export function hsvToRgb(H: number, S: number, V: number): Color {
    const C = V * S;
    const X = C * (1 - Math.abs((H / 60) % 2 - 1));
    const m = V - C;
    if (H < 60) {
        return { r: Math.floor((C+m)*255), g: Math.floor((X+m)*255), b: Math.floor((0+m)*255) };
    } else if (H < 120) {
        return { r: Math.floor((X+m)*255), g: Math.floor((C+m)*255), b: Math.floor((0+m)*255) };
    } else if (H < 180) {
        return { r: Math.floor((0+m)*255), g: Math.floor((C+m)*255), b: Math.floor((X+m)*255) };
    } else if (H < 240) {
        return { r: Math.floor((0+m)*255), g: Math.floor((X+m)*255), b: Math.floor((C+m)*255) };
    } else if (H < 300) {
        return { r: Math.floor((X+m)*255), g: Math.floor((0+m)*255), b: Math.floor((C+m)*255) };
    } else {
        return { r: Math.floor((C+m)*255), g: Math.floor((0+m)*255), b: Math.floor((X+m)*255) };            
    }
}

export function rgbToHsv({ r, g, b}) {
    const Rp = r / 255;
    const Gp = g / 255;
    const Bp = b / 255;
    const Cmax = Math.max(Rp, Gp, Bp);
    const Cmin = Math.min(Rp, Gp, Bp);
    const delta  = Cmax - Cmin;
    let H = 0;
    let S = Cmax > 0 ? delta / Cmax : 0;
    let V = Cmax;
    if (delta == 0) {
        H = 0;
    } else if (Cmax == Rp) {
        H = ((Gp - Bp) / delta) % 6;
    } else if (Cmax == Gp) {
        H = ((Bp - Rp) / delta) + 2;
    } else {
        H = ((Rp - Gp) / delta) + 4;
    }
    H *= 60;
    return { h: H, s: S, v: V };
}