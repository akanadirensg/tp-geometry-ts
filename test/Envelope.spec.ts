import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";

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
    it("test envelope avec Point", () => {        
        const builder = new EnvelopeBuilder();
        const p=new Point([0.0,1.0])
        const p1=new Point([2.0,0.0])
        const p2=new Point([1.0,3.0])

        p.accept(builder)
        const result = builder.build();

        expect(result.getXMax()).to.equal(0.0)
        expect(result.getYMax()).to.equal(1.0)
        expect(result.getXMin()).to.equal(0.0)
        expect(result.getYMin()).to.equal(1.0)
        
    });
    it("test envelope avec LineString", () => {        
        const builder = new EnvelopeBuilder();
        const p=new Point([0.0,1.0])
        const p1=new Point([2.0,0.0])
        const p2=new Point([1.0,3.0])

        const l=new LineString([p,p1,p2])

        l.accept(builder)
        const result = builder.build();

        expect(result.getXMax()).to.equal(2.0)
        expect(result.getYMax()).to.equal(3.0)
        expect(result.getXMin()).to.equal(0.0)
        expect(result.getYMin()).to.equal(0.0)
        
    });
    it("test envelope avec LineString", () => {        
        const builder = new EnvelopeBuilder();
        const p=new Point([0.0,1.0])
        const p1=new Point([2.0,0.0])
        const p2=new Point([1.0,3.0])

        const l=new LineString([p,p1,p2])

        const g=new GeometryCollection([l,p,p1,p2])

        g.accept(builder)
        const result = builder.build();

        expect(result.getXMax()).to.equal(2.0)
        expect(result.getYMax()).to.equal(3.0)
        expect(result.getXMin()).to.equal(0.0)
        expect(result.getYMin()).to.equal(0.0)
        
    });

});

