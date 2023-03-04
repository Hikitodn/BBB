import { Collider } from "./collider";

export class CircleCollider extends Collider {
  constructor() {
    super();
  }

  rectCollider(object) {
    let axes1 = [];
    let axes2 = [];
    axes1.push(this.normal);
    axes1.push(this.dir);
    axes2.push(object.normal);
    axes2.push(object.dir);
    let proj1,
      proj2 = 0;

    for (let i = 0; i < axes1.length; i++) {
      proj1 = projShapeOntoAxis(axes1[i], o1);
      proj2 = projShapeOntoAxis(axes1[i], o2);
      let overlap =
        Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);
      if (overlap < 0) {
        return false;
      }
    }

    for (let i = 0; i < axes2.length; i++) {
      proj1 = projShapeOntoAxis(axes2[i], o1);
      proj2 = projShapeOntoAxis(axes2[i], o2);
      let overlap =
        Math.min(proj1.max, proj2.max) - Math.max(proj1.min, proj2.min);
      if (overlap < 0) {
        return false;
      }
    }

    return true;
  }
}
