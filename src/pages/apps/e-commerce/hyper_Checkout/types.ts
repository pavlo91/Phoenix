import { CartItem } from "../../../../data/e-commerce/hyper_types";

export type Cart = {
  items: Array<CartItem>;
  sub_total: number;
  shipping: number;
  total: number;
};
