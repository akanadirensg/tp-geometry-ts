import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Geometry from "../src/Geometry";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("GeometryWithCachedEnvelope", () => {

    it("cache l’enveloppe d’un Point", () => {
        let g: Geometry = new Point([3.0, 4.0]);
        g = new GeometryWithCachedEnvelope(g)

        const a = g.getEnvelope();
        const b = g.getEnvelope();

        expect(a).to.equal(b);

        expect(g.asText()).to.equal("POINT(3 4)")
        expect(g.getType()).to.equal("Point")
        expect(g.isEmpty()).to.be.false;
        expect(g.clone()).to.not.equal(g)
        let result = ""
        const visitor = new LogGeometryVisitor((message) => {
            result = message
        })
        g.accept(visitor)
        expect(result).to.equal("Je suis un point avec x=3 et y=4.")

    });

    it("invalide le cache après translate()", () => {
        let g: Geometry = new Point([3.0, 4.0]);
        g = new GeometryWithCachedEnvelope(g)

        const a = g.getEnvelope()

        g.translate(1, 2);
        const b = g.getEnvelope()

        expect(b).to.not.equal(a);


    });

    it("cache l’enveloppe d’une LineString", () => {
        let g: Geometry = new LineString([
            new Point([3.0, 3.0]),
            new Point([5.0, 4.0])
        ]);
        g = new GeometryWithCachedEnvelope(g)

        const a = g.getEnvelope()
        const b = g.getEnvelope()

        expect(a).to.equal(b);
    });

});
