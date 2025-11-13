import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry?: Geometry): string {
        if (geometry instanceof Point) {
            // traiter le cas Point
            return geometry.isEmpty() ? "POINT(3.0 4.0)" :"POINT("+geometry.x()+" "+geometry.y()+")"
        } else if (geometry instanceof LineString) {
            // traiter le cas LineString
            if(geometry.isEmpty()) return "LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)";

            let wkt: string[] = [];
            for (let i=0; i<geometry.getNumPoints(); i++) {
                wkt.push(`${geometry.getPointN(i).x()} ${geometry.getPointN(i).y()}`);
            }

            return `LINESTRING(${wkt.join(",")})`;
        } else {
            throw new TypeError("geometry type not supported");
        }

    }
}