import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import GeometryCollection from "../src/GeometryCollection";



describe("test LogGeometryVisitor", () => {
    it("test LogGeometryVisitor avec Point", () => {

        let result = ""
        const visitor = new LogGeometryVisitor((message) => {
            result = message
        })
        const p_vide = new Point();
        p_vide.accept(visitor)
        expect(result).to.equal("Je suis un point vide.")

        result = ""
        const visitor1 = new LogGeometryVisitor((message) => {
            result = message
        })
        const p = new Point([3.0, 4.0]);
        p.accept(visitor1)
        expect(result).to.equal("Je suis un point avec x=3 et y=4.")


    });

    it("test LogGeometryVisitor avec LineString", () => {

        let result = ""
        const visitor = new LogGeometryVisitor((message) => {
            result = message
        })
        const l_vide = new LineString();
        l_vide.accept(visitor)
        expect(result).to.equal("Je suis une polyligne vide.")

        result = ""
        const visitor1 = new LogGeometryVisitor((message) => {
            result = message
        })
        const l = new LineString([new Point([3.0, 4.0])]);
        l.accept(visitor1)
        expect(result).to.equal("Je suis une polyligne définie par 1 point(s).")


    });

    it("test LogGeometryVisitor avec GeometryCollection", () => {


        let result = ""
        const visitor = new LogGeometryVisitor((message) => {
            result = message
        })
        const l_vide = new GeometryCollection();
        l_vide.accept(visitor)
        expect(result).to.equal("Je suis une collection vide.")


        result = ""
        const visitor1 = new LogGeometryVisitor((message) => {
            result = message
        })
        const p1 = new Point([3.0, 4.0]);

        const l = new LineString([new Point([3.0, 4.0]), new Point([1.0, 2.0]), new Point([5.0, 5.0])]);
        const g = new GeometryCollection([p1,l])
        g.accept(visitor1)
        expect(result).to.equal("Je suis une collection définie par 2 point(s)/lignes(s).")


    });

});

