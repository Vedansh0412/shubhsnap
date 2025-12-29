export interface CartItem {
  id: string;
  previewImage: string;
  shape: "circle" | "square";
  quantity: number;
  price: number;
}
