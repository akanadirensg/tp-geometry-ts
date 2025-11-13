import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate; // ? dit que peut etre non definie

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate ;
  }
  getType(): string {
      return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate ? this.coordinate[1] : Number.NaN ;
  }

}
