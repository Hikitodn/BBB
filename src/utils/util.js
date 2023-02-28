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

export function calcDistance(x1, y1, x2 = undefined, y2 = undefined) {
  if (x2 && y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  } else {
    return Math.sqrt(x1 ** 2 + y1 ** 2);
  }
}
