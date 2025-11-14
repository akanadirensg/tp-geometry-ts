import Point from "./Point"
import LineString from "./LineString"

export default class LogGeometryVisitor {
    constructor(
        private log=console.log
    ){
    }

    visitPoint(g: Point){
        if(g.isEmpty()){
            this.log("Je suis un point vide.")

        }else {
            this.log("Je suis un point avec x="+g.x()+" et y="+g.y()+".")
        }
    }

        visitLineString(l: LineString){
        if(l.isEmpty()){
            this.log("Je suis une polyligne vide.")

        }else {
            this.log("Je suis une polyligne définie par "+l.getNumPoints()+" point(s).")
        }
    }
}