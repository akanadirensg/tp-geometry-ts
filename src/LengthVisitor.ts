import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default class LengthVisitor implements GeometryVisitor<number> {

  visitPoint(point: Point): number {
    return 0;
  }

  visitLineString(lineString: LineString): number {
    let length = 0;

    for (let i = 1; i < lineString.getNumPoints(); i++) {
      const p1 = lineString.getPointN(i - 1);
      const p2 = lineString.getPointN(i);

      const dx = p2.x() - p1.x();
      const dy = p2.y() - p1.y();

      length += Math.sqrt(dx * dx + dy * dy);
    }

    return length;
  }

  visitGeometryCollection(geometryCollection: GeometryCollection): number {
    let total = 0;

    for (let i = 0; i < geometryCollection.getNumGeometries(); i++) {
      const geom = geometryCollection.getGeometryN(i);
      total += geom.accept(this); 
    }

    return total;
  }
}
