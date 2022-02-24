export type FoodStatus = "Open" | "Close";
export interface category {
  id: string;
  name: string;
}
export interface Food {
  id: string;
  status: FoodStatus;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}
export interface FoodPost {
  id: string;
  status: FoodStatus;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  account: string;
}