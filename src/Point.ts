import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate; // ? dit que peut etre non definie

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [];
  }
  getType(): string {
      return "Point";
  }

  isEmpty(): boolean {
      return this.coordinate.length === 0;
  }

  translate(dx: number, dy: number): void {
    if (!this.isEmpty()){
      if (this.coordinate.length > 0) this.coordinate[0] += dx;
      if (this.coordinate.length > 1) this.coordinate[1] += dy;
    }
  }

  clone(): Point {
      return new Point([...this.coordinate])
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate.length > 1  ? this.coordinate[1] : Number.NaN ;
  }

}
