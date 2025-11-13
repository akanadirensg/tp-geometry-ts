import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
    });
    it("test translate point", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(1.0, 1.5)
        expect(p.getCoordinate()).to.deep.equal([4.0, 5.5]);

        const p_vide = new Point();
        p_vide.translate(1.0, 1.5)
        expect(p_vide.getCoordinate()).to.deep.equal([]);

        const p_avec_x = new Point([2.0]);
        p_avec_x.translate(1.0, 1.5)
        expect(p_avec_x.getCoordinate()).to.deep.equal([3.0]);
    });
    it("test clone point", () => {
        const p = new Point([3.0, 4.0]);
        const p_copy = p.clone()
        expect(p.getCoordinate()).to.deep.equal(p_copy.getCoordinate());

        const p_vide = new Point();
        const p_vide_copy = p_vide.clone()
        expect(p_vide.getCoordinate()).to.deep.equal(p_vide_copy.getCoordinate());
    });

    it("test getEnvelope point", () => {
        const p = new Point([3.0, 4.0]);
        const p_envelope = p.getEnvelope();

        expect(p_envelope.getXMax()).to.equal(3.0)
        expect(p_envelope.getYMax()).to.equal(4.0)
        expect(p_envelope.getXMin()).to.equal(3.0)
        expect(p_envelope.getYMin()).to.equal(4.0)


        const p_vide = new Point();
        const p_envelope_vide = p_vide.getEnvelope();
        expect(Number.isNaN(p_envelope_vide.getXMax()));
        expect(Number.isNaN(p_envelope_vide.getYMax()));
        expect(Number.isNaN(p_envelope_vide.getXMin()));
        expect(Number.isNaN(p_envelope_vide.getYMin()));
    });
});

