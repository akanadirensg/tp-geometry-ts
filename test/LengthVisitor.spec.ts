import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import GeometryCollection from "../src/GeometryCollection";
import LengthVisitor from "../src/LengthVisitor";

describe("test LengthVisitor", () => {
    it("test LengthVisitor with Point", () => {
        const p=new Point()
        const visitor=new LengthVisitor();
        const result = p.accept(visitor);
        expect(result).to.equal(0)
    });
    it("test LengthVisitor with LineString", () => {
        const l=new LineString([new Point([1,0]),new Point([1,1])])
        const visitor=new LengthVisitor();
        const result = l.accept(visitor);
        expect(result).to.equal(1)
    });
    it("test LengthVisitor with GeometryCollection", () => {
        const g=new GeometryCollection([new Point([1,0]),new Point([1,1]),new LineString([new Point([1,0]),new Point([1,1])]),new LineString([new Point([0,1]),new Point([1,1])])])
        const visitor=new LengthVisitor();
        const result = g.accept(visitor);
        expect(result).to.equal(2)
    });

});

