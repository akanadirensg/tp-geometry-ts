import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry {
    private original: Geometry;
    private cachedEnvelope: Envelope | null;

    constructor(original: Geometry) {
        this.original = original;
        this.cachedEnvelope = null
    }

    asText(): string {
        return this.original.asText()
    }

    getType(): string {
        return this.original.getType()
    }
    isEmpty(): boolean {
        return this.original.isEmpty()
    }
    translate(dx: number, dy: number): void {
        this.original.translate(dx, dy)
        this.cachedEnvelope = null;
    }
    clone(): Geometry {
        return this.original.clone()
    }
    accept(visitor: GeometryVisitor): void {
        this.original.accept(visitor)

    }

    getEnvelope(): Envelope {
        if (this.cachedEnvelope === null) {
            this.cachedEnvelope = this.original.getEnvelope()
        }
        return this.cachedEnvelope;
    }

}