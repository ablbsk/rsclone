export interface IOrder {
  _id: string;
  userId: string;
  image: string;
  price: number;
  status: string;
  date: string;
}

export interface IOrderForGraph {
  label: string;
  price: number;
  count: number;
}
