import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryCollection extends AbstractGeometry {
    private geometries?: Array<Geometry>;

    constructor(geometries?: Array<Geometry>) {
        super()
        this.geometries = geometries || [];
    }

    getNumGeometries(): number {
        return this.geometries.length
    }

    getGeometryN(n: number) {
        return this.geometries[n];
    }

    getType(): string {
        return "GeometryCollection"
    }

    isEmpty(): boolean {
        return this.geometries.length === 0;
    }

    translate(dx: number, dy: number): void {
        if (!this.isEmpty()) {
            for (let geometry of this.geometries) {
                geometry.translate(dx, dy)
            }
        }
    }

    clone(): GeometryCollection {
        const copy_geometries: Geometry[] = [];
        for(let geometry of this.geometries){
            copy_geometries.push(geometry.clone());
        }
        return new GeometryCollection(copy_geometries);
    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return visitor.visitGeometryCollection(this);
    }


}