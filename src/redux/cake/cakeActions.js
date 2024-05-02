import { BUY_CAKE } from "./cakeTypes";

export function buyCake(cake = 1) {
  return {
    type:BUY_CAKE,
    payload: cake,
  };
}
