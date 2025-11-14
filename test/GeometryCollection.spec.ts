import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import GeometryCollection from "../src/GeometryCollection";

describe("test GeometryCollection", () => {
    it("test default constructor", () => {
        const g = new GeometryCollection();
        expect(g.getNumGeometries()).to.equal(0);
        expect(g.getType()).to.equal("GeometryCollection");
        expect(g.isEmpty()).to.be.true;
    });
    it("test constructor with geometries", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([2.0, 1.0]);
        const l = new LineString([p1, p2]);
        const g = new GeometryCollection([p1,l,p2])

        expect(g.getNumGeometries()).to.equal(3);
        expect(g.getGeometryN(0)).to.equal(p1);
        expect(g.getGeometryN(1)).to.equal(l);
        expect(g.isEmpty()).to.be.false;

    });

    it("test translate GeometryCollection", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);

        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 2.0])]);

        const g = new GeometryCollection([p1,l,p2])
        g.translate(1.0, 1.5)

        expect((g.getGeometryN(0) as Point).getCoordinate()).to.deep.equal([4.0, 5.5]);
        expect((g.getGeometryN(1) as LineString).getPointN(1).getCoordinate()).to.deep.equal([2.0, 3.5]);

    });

    it("test clone GeometryCollection", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);

        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 2.0])]);
        const g = new GeometryCollection([p1,l,p2])
        const g_copy = g.clone();
        expect((g.getGeometryN(0) as Point).getCoordinate()).to.deep.equal((g_copy.getGeometryN(0) as Point).getCoordinate());
        expect((g.getGeometryN(1) as LineString).getPointN(0).getCoordinate()).to.deep.equal((g_copy.getGeometryN(1) as LineString).getPointN(0).getCoordinate());

    });

});

