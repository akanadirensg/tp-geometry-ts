import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft || [];
        this.topRight = topRight || [];
    }

    isEmpty(): boolean {
        return this.bottomLeft.length === 0 || this.topRight.length === 0;
    }

    getXMin(): number {
        return this.isEmpty() ? Number.NaN : this.bottomLeft[0];
    }

    getYMin(): number {
        return this.isEmpty() ? Number.NaN : this.bottomLeft[1];
    }

    getXMax(): number {
        return this.isEmpty() ? Number.NaN : this.topRight[0];
    }

    getYMax(): number {
        return this.isEmpty() ? Number.NaN : this.topRight[1];
    }

    toString(): string {
        return this.isEmpty() ? "" : "bottomLeft: "+this.getXMin()+","+this.getXMin()+", topRight: "+this.getXMax()+","+this.getYMax();
    }

}