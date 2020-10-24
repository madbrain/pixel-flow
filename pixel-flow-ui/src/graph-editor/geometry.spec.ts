import { Point, Rectangle } from "./geometry";

describe("Rectangle", () => {

    it("build from point", () => {
        const rect = new Point(10, 15).rect(20, 30);
        expect(rect).toEqual(new Rectangle(10, 15, 20, 30));
    })
});