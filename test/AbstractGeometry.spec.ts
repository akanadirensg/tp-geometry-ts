import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test de la fonction asText", () => {
    it("test asText avec Point", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.asText()).to.equal("POINT(3 4)")
        const p_vide = new Point();
        expect(p_vide.asText()).to.equal("POINT EMPTY")
    });

    it("test asText avec LineString", () => {
        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 1.0])]);
        expect(l.asText()).to.equal("LINESTRING(3 4,1 1)")
        const l_vide = new LineString();
        expect(l_vide.asText()).to.equal("LINESTRING EMPTY")
    });
});

