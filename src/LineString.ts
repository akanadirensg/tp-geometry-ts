import Point from "./Point"
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString implements Geometry {
  private points?: Array<Point>;

  constructor(points?: Array<Point>) {
    this.points = points || [];
  }

  getType(): string {
    return "LineString";
  }
  isEmpty(): boolean {
    return this.points.length === 0;
  }

  translate(dx: number, dy: number): void {
    if (!this.isEmpty()) {
      for (let point of this.points) {
        point.translate(dx, dy)
      }
    }
  }

  clone(): LineString {
    const copy_points: Point[] = [];
    for(let point of this.points){
      copy_points.push(point.clone());
    }
    return new LineString(copy_points);
  }

  accept(visitor: GeometryVisitor): void {
      visitor.visitLineString(this);
  }

  getEnvelope(): Envelope {
    const envelopeBuilder = new EnvelopeBuilder();
    
    for(let point of this.points){
      envelopeBuilder.insert(point.getCoordinate())
    }
    return envelopeBuilder.build()
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }


}