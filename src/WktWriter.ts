import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default class WktWriter {
    write(geometry?: Geometry): string {
        if (geometry instanceof Point) {
            // traiter le cas Point
            return geometry.isEmpty() ? "POINT EMPTY" : "POINT(" + geometry.x() + " " + geometry.y() + ")"
        } else if (geometry instanceof LineString) {
            // traiter le cas LineString
            if (geometry.isEmpty()) return "LINESTRING EMPTY";

            let wkt: string[] = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                wkt.push(`${geometry.getPointN(i).x()} ${geometry.getPointN(i).y()}`);
            }

            return `LINESTRING(${wkt.join(",")})`;
        } else if (geometry instanceof GeometryCollection) {
            if (geometry.isEmpty()) return "GEOMETRYCOLLECTION EMPTY";
            else {
                let wkt: string[] = [];
                for (let i = 0; i < geometry.getNumGeometries(); i++) {
                    wkt.push(geometry.getGeometryN(i).asText());
                }
                return `GEOMETRYCOLLECTION(${wkt.join(",")})`;
            }
        }



        else {
            throw new TypeError("geometry type not supported");
        }

    }
}