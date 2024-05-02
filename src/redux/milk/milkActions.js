import { BUY_MILK } from "./milkTypes";

export function buyMilk(milk = 1) {
  return {
    type: BUY_MILK,
    payload: milk,
  };
}
