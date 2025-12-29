"use client";

interface CartSummaryProps {
  total: number;
  onCheckout: () => void;
}

export default function CartSummary({
  total,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className="mt-6 rounded-md border p-4">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹{total}</span>
      </div>

      {/* <button
        onClick={onCheckout}
        className="mt-4 w-full cursor-pointer rounded bg-black py-2 text-white"
      >
        Proceed to Checkout
      </button> */}
    </div>
  );
}
