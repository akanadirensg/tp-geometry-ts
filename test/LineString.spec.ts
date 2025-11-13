import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getType()).to.equal("LineString");
        expect(l.isEmpty()).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([2.0, 1.0]);
        const l = new LineString([p1, p2]);

        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getPointN(1)).to.equal(p2);
        expect(l.isEmpty()).to.be.false;

    });

    it("test translate linestring", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);

        const l = new LineString([p1, p2]);
        l.translate(1.0, 1.5)
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([4.0, 5.5]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([2.0, 3.5]);

        const l_vide = new LineString();
        l_vide.translate(1.0, 1.5);
        expect(l_vide.isEmpty()).to.be.true;
    });

    it("test clone linestring", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);

        const l = new LineString([p1, p2]);
        const l_copy = l.clone();
        expect(l.getPointN(0).getCoordinate()).to.deep.equal(l_copy.getPointN(0).getCoordinate());
        expect(l.getPointN(1).getCoordinate()).to.deep.equal(l_copy.getPointN(1).getCoordinate());

        const l_vide = new LineString();
        const l_vide_copy = l_vide.clone();
        expect(l_vide_copy.isEmpty()).to.be.true;
    });

    it("test getEnvelope lineString", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);
        const p3 = new Point([-1.0, 1.5]);

        const l = new LineString([p1, p2, p3]);
        const l_envelope = l.getEnvelope()
        expect(l_envelope.getXMax()).to.equal(3.0)
        expect(l_envelope.getYMax()).to.equal(4.0)
        expect(l_envelope.getXMin()).to.equal(-1.0)
        expect(l_envelope.getYMin()).to.equal(1.5)

        const l_vide = new LineString();
        const l_envelope_vide = l_vide.getEnvelope()


        expect(Number.isNaN(l_envelope_vide.getXMax()));
        expect(Number.isNaN(l_envelope_vide.getYMax()));
        expect(Number.isNaN(l_envelope_vide.getXMin()));
        expect(Number.isNaN(l_envelope_vide.getYMin()));
    });
});

