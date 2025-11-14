import "mocha";
import { expect } from "chai";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";

describe("test WktWriter", () => {
    it("test WktWriter Point", () => {
        const wktWriter=new WktWriter()

        const p =new Point()
        const wkt_vide=wktWriter.write(p)
        expect(wkt_vide).to.equal("POINT EMPTY")

        const p1 = new Point([3.2, 5.9]);
        const wkt=wktWriter.write(p1)
        expect(wkt).to.equal("POINT(3.2 5.9)")
    });
    it("test WktWriter LineString", () => {
        const wktWriter=new WktWriter()

        const l =new LineString()
        const wkt_vide=wktWriter.write(l)
        expect(wkt_vide).to.equal("LINESTRING EMPTY")

        const p1 = new Point([3.2, 5.9]);
        const p2 = new Point([2.3, 6.1]);
        const l1 = new LineString([p1,p2]);
        const wkt_l1=wktWriter.write(l1)
        expect(wkt_l1).to.equal("LINESTRING(3.2 5.9,2.3 6.1)")
    });
        it("test WktWriter sans geometry", () => {
        const wktWriter=new WktWriter()
        expect(() => wktWriter.write()).to.throw(TypeError, "geometry type not supported");

    });
        it("test WktWriter GeometryCollection", () => {
        const wktWriter=new WktWriter()

        const g_vide =new GeometryCollection()
        const wkt_vide=wktWriter.write(g_vide)
        expect(wkt_vide).to.equal("GEOMETRYCOLLECTION EMPTY")

        const p1 = new Point([3.0, 4.0]);

        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 2.0]), new Point([5.0, 5.0])]);
        const g = new GeometryCollection([p1,l])
        const wkt_g=wktWriter.write(g)
        expect(wkt_g).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,1 2,5 5))")
    });

});

