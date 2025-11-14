import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";
import GeometryCollection from "../src/GeometryCollection";



describe("test LogGeometryVisitor", () => {
    it("test WktVisitor avec Point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([3.0, 4.0]);
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT(3 4)")


        const visitor2 = new WktVisitor();
        const geometry2 = new Point();
        geometry2.accept(visitor2);
        const wkt2 = visitor2.getResult();
        expect(wkt2).to.equal("POINT EMPTY")

    });

    it("test WktVisitor avec LineString", () => {
        const visitor = new WktVisitor();
        const geometry = new LineString([new Point([3.0, 4.0]), new Point([1.0, 1.0])]);
        geometry.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING(3 4,1 1)")


        const visitor2 = new WktVisitor();
        const geometry2 = new LineString();
        geometry2.accept(visitor2);
        const wkt2 = visitor2.getResult();
        expect(wkt2).to.equal("LINESTRING EMPTY")

    });


    it("test WktVisitor avec GeometryCollection", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([3.0, 4.0]);

        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 2.0]), new Point([5.0, 5.0])]);
        const g = new GeometryCollection([p1,l])
        g.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,1 2,5 5))")


        const visitor2 = new WktVisitor();
        const geometry2 = new GeometryCollection();
        geometry2.accept(visitor2);
        const wkt2 = visitor2.getResult();
        expect(wkt2).to.equal("GEOMETRYCOLLECTION EMPTY")

    });


});

