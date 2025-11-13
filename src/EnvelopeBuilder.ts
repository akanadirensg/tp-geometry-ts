import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {

    private Xmin: number;
    private Ymin: number;
    private Xmax: number;
    private Ymax: number;

    constructor() {
        this.Xmin = Number.NaN;
        this.Ymin = Number.NaN;
        this.Xmax = Number.NaN;
        this.Ymax = Number.NaN;
    }

    insert(coordinate: Coordinate) {
        if (coordinate.length > 0) {
            if (coordinate[0] < this.Xmin || isNaN(this.Xmin)) this.Xmin = coordinate[0];
            if (coordinate[0] > this.Xmax || isNaN(this.Xmax)) this.Xmax = coordinate[0];
        }
        if (coordinate.length > 1) {
            if (coordinate[1] > this.Ymax || isNaN(this.Ymax)) this.Ymax = coordinate[1];
            if (coordinate[1] < this.Ymin || isNaN(this.Ymin)) this.Ymin = coordinate[1];
        }
    }

    build(): Envelope {
        if (isNaN(this.Xmin) ||
            isNaN(this.Xmin) ||
            isNaN(this.Xmin) ||
            isNaN(this.Xmin)) return new Envelope();
        return new Envelope([this.Xmin, this.Ymin], [this.Xmax, this.Ymax]);
    }
}