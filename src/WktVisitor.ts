import Point from "./Point"
import LineString from "./LineString"
import GeometryVisitor from "./GeometryVisitor"

export default class WktVisitor implements GeometryVisitor {
    private buffer:string;

    constructor(){
        this.buffer=""
    }

    visitPoint(point: Point): void {

        this.buffer = point.isEmpty() ? "POINT EMPTY" :"POINT("+point.x()+" "+point.y()+")"
    }
    visitLineString(lineString: LineString): void {
        if(lineString.isEmpty()) this.buffer = "LINESTRING EMPTY";

        else{

        let wkt: string[] = [];
        for (let i=0; i<lineString.getNumPoints(); i++) {
            wkt.push(`${lineString.getPointN(i).x()} ${lineString.getPointN(i).y()}`);
        }

        this.buffer = `LINESTRING(${wkt.join(",")})`;}
    }

    getResult():string{
        return this.buffer;
    }


}