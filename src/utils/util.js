import { Sprite, Assets } from "pixi.js";

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getSpriteFromCache(name) {
  return new Sprite(Assets.cache.get(name));
}
