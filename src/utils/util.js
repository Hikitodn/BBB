import { Sprite, Assets } from "pixi.js";

// random integer number
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get sprite from cache
export function getSpriteFromCache(name) {
  return new Sprite(Assets.cache.get(name));
}
