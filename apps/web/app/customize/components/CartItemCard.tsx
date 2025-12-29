"use client";

import { CartItem } from "./../../types/cart";

interface CartItemCardProps {
  item: CartItem;
  onQuantityChange: (qty: number) => void;
}

export default function CartItemCard({
  item,
  onQuantityChange,
}: CartItemCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-md border p-4">
      {/* Preview */}
      <img
        src={item.previewImage}
        alt="Magnet preview"
        className="h-16 w-16 rounded-sm border"
      />

      {/* Details */}
      <div className="flex-1">
        <p className="text-sm font-medium">
          Custom Fridge Magnet ({item.shape})
        </p>
        <p className="text-sm text-gray-600">
          ₹{item.price} each
        </p>
      </div>

      {/* Quantity */}
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={(e) =>
          onQuantityChange(Number(e.target.value))
        }
        className="w-16 rounded border px-2 py-1 text-sm"
      />

      {/* Total */}
      <p className="w-16 text-right text-sm font-medium">
        ₹{item.price * item.quantity}
      </p>
    </div>
  );
}
