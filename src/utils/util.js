import { Sprite, Assets } from "pixi.js";

// random integer number
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get sprite from cache
export function getSpriteFromCache(name) {
  return new Sprite(Assets.cache.get(name));
}

// calc angle
export function calcAngle(x1, y1, x2, y2) {
  let dot = dotProduct(x1, y1, x2, y2);
  let d1 = calcDistance(x1, y1);
  let d2 = calcDistance(x2, y2);
  let cosAlpha = dot / (d1 * d2);
  return Math.acos(cosAlpha);
}

// dot
export function dotProduct(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}

// calc vector
export function calcVector(x1, y1, x2, y2) {
  return {
    x: x2 - x1,
    y: y2 - y1,
  };
}

// distance 2 obj
export function calcDistance(x1, y1, x2 = undefined, y2 = undefined) {
  if (x2 && y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  } else {
    return Math.sqrt(x1 ** 2 + y1 ** 2);
  }
}

export function calcUnit(obj, result) {
  if (result === 0) {
    return { x: 0, y: 0 };
  } else {
    return { x: obj.x / result, y: obj.y / result };
  }
}

export function calcNormal(obj) {
  let vector = {
    x: -obj.y,
    y: obj.x,
  };
  let distance = calcDistance(vector.x, vector.y);
  let result = calcUnit(vector, distance);
  return result;
}

export function projShapeOntoAxis(axis, obj) {
  let min = dotProduct(axis.x, axis.y, obj.vertex[0][0], obj.vertex[0][1]);
  let max = min;
  for (let i = 0; i < obj.vertex.length; i++) {
    let p = dotProduct(axis.x, axis.y, obj.vertex[i][0], obj.vertex[i][1]);
    if (p < min) {
      min = p;
    }
    if (p > max) {
      max = p;
    }
  }
  return {
    min: min,
    max: max,
  };
}
