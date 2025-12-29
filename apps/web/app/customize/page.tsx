"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StepProgress from "./components/StepProgress";
import ImageUploader from "./components/ImageUploader";
import ShapeSelector from "./components/ShapeSelector";
import EditableProductPreview from "./components/EditableProductPreview";
import FridgeMockupPreview from "./components/FridgeMockupPreview";
import CartItemCard from "./components/CartItemCard";
import CartSummary from "./components/CartSummary";

import { CartItem } from "./../types/cart";
import { Pencil, Check } from "lucide-react";

const TOTAL_STEPS = 4;
const MAGNET_PRICE = 199;

export default function CustomizePage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] =
    useState<"circle" | "square" | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  /* Persisted editor state */
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [cartItem, setCartItem] = useState<CartItem | null>(null);

  /* ----------------------------
   * Navigation handlers
   * ---------------------------- */
  const handleNext = () => {
    if (step === 3 && previewImage && selectedShape) {
      setCartItem({
        id: crypto.randomUUID(),
        previewImage,
        shape: selectedShape,
        quantity: 1,
        price: MAGNET_PRICE,
      });
    }

    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      router.push("/");
      return;
    }

    setStep((prev) => Math.max(1, prev - 1));
  };

  /* ----------------------------
   * Render
   * ---------------------------- */
  return (
    <div className="mx-auto max-w-5xl bg-white px-4 py-12 text-black">
      <h1 className="mb-2 text-3xl font-semibold">
        Customize Your Magnet
      </h1>

      <StepProgress currentStep={step} totalSteps={TOTAL_STEPS} />

      <div className="mt-10 rounded-md border p-8">
        {/* STEP 1 */}
        {step === 1 && (
          <ImageUploader
            image={uploadedImage}
            onImageSelect={setUploadedImage}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <ShapeSelector
            selectedShape={selectedShape}
            onSelect={setSelectedShape}
          />
        )}

        {/* STEP 3 */}
        {step === 3 && uploadedImage && selectedShape && (
          <div className="grid gap-10 md:grid-cols-2">
            {/* Magnet Preview */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">Magnet Preview</h2>

                <button
                  onClick={() => setIsEditing((v) => !v)}
                  className="cursor-pointer flex items-center gap-2 rounded border px-3 py-1 text-sm"
                >
                  {isEditing ? <Check size={16} /> : <Pencil size={16} />}
                  {isEditing ? "Done" : "Edit"}
                </button>
              </div>

              <EditableProductPreview
                image={uploadedImage}
                shape={selectedShape}
                editable={isEditing}
                scale={scale}
                offset={offset}
                setScale={setScale}
                setOffset={setOffset}
                onPreviewChange={setPreviewImage}
              />
            </div>

            {/* Fridge Preview */}
            <div>
              <h2 className="text-lg font-medium">On Your Fridge</h2>

              {previewImage && (
                <FridgeMockupPreview
                  previewImage={previewImage}
                  shape={selectedShape}
                />
              )}
            </div>
          </div>
        )}

        {/* STEP 4 — CART */}
        {step === 4 && cartItem && (
          <>
            <h2 className="mb-4 text-lg font-medium">Your Cart</h2>

            <CartItemCard
              item={cartItem}
              onQuantityChange={(qty) =>
                setCartItem({ ...cartItem, quantity: qty })
              }
            />

            <CartSummary total={cartItem.price * cartItem.quantity} onCheckout={function (): void {
              throw new Error("Function not implemented.");
            } } />
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="cursor-pointer rounded border px-6 py-2"
        >
          Back
        </button>

        {step < TOTAL_STEPS && (
          <button
            onClick={handleNext}
            disabled={
              (step === 1 && !uploadedImage) ||
              (step === 2 && !selectedShape)
            }
            className="cursor-pointer rounded bg-black px-6 py-2 text-white"
          >
            {step === 3 ? "Add to Cart" : "Next"}
          </button>
        )}

        {step === 4 && (
          <button
            onClick={() => alert("Proceed to Pay")}
            className="cursor-pointer rounded bg-black px-8 py-3 text-white text-sm"
          >
            Proceed to Pay
          </button>
        )}
      </div>
    </div>
  );
}
