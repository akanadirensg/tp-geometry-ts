import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test Envelope", () => {
    it("test envelope avec envelopeBuilder", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build();

        expect(result.getXMax()).to.equal(2.0)
        expect(result.getYMax()).to.equal(3.0)
        expect(result.getXMin()).to.equal(0.0)
        expect(result.getYMin()).to.equal(0.0)
        

        const envlope = new Envelope([0.0,0.0],[2.0,3.0]);
        expect(result.toString()).to.equal(envlope.toString())
        expect(envlope.toString()).to.equal("bottomLeft: 0,0, topRight: 2,3");
    });
    it("test envelope vide avec EnvelopeBuilder", () => {        
        const builder = new EnvelopeBuilder();
        const envelope_vide = builder.build()
        expect(envelope_vide.isEmpty()).to.be.true;
        expect(Number.isNaN(envelope_vide.getXMax()));
        expect(Number.isNaN(envelope_vide.getYMax()));
        expect(Number.isNaN(envelope_vide.getXMin()));
        expect(Number.isNaN(envelope_vide.getYMin()));
        expect(envelope_vide.toString()).to.equal("");
    });
    it("test envelope vide", () => {        
        const envelope_vide=new Envelope();
        expect(envelope_vide.isEmpty()).to.be.true;
        expect(Number.isNaN(envelope_vide.getXMax()));
        expect(Number.isNaN(envelope_vide.getYMax()));
        expect(Number.isNaN(envelope_vide.getXMin()));
        expect(Number.isNaN(envelope_vide.getYMin()));
        expect(envelope_vide.toString()).to.equal("");
    });

});

