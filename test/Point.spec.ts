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
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
    });
    it("test translate point", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0,1.5)
        expect(p.getCoordinate()).to.deep.equal([4.0,5.5]);

        const p_vide= new Point();
        p_vide.translate(1.0,1.5)
        expect(p_vide.getCoordinate()).to.deep.equal([]);

        const p_avec_x= new Point([2.0]);
        p_avec_x.translate(1.0,1.5)
        expect(p_avec_x.getCoordinate()).to.deep.equal([3.0]);
    });
});

