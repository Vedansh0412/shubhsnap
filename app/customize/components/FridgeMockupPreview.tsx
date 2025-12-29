"use client";

interface FridgeMockupPreviewProps {
  previewImage: string;
  shape: "circle" | "square";
}

export default function FridgeMockupPreview({
  previewImage,
  shape,
}: FridgeMockupPreviewProps) {
  /**
   * Magnet size (already adjusted by you)
   * Keeping it small & realistic
   */
  const magnetSize = "w-5 h-5";

  /**
   * Shape-based styling
   * - Circle magnets sit flatter → softer, tighter shadow
   * - Square magnets have edges → slightly deeper shadow
   */
  const magnetRadius =
    shape === "circle" ? "rounded-full" : "rounded-sm";

  const magnetShadow =
    shape === "circle"
      ? "shadow-[0_1px_3px_rgba(0,0,0,0.25)]"
      : "shadow-[0_2px_5px_rgba(0,0,0,0.3)]";

  /**
   * Subtle rotation
   * Circles look more natural with almost no tilt
   */
  const magnetRotation =
    shape === "circle" ? "rotate-[-0.5deg]" : "rotate-[-1deg]";

  return (
    <div className="relative mx-auto mt-6 w-full max-w-sm">
      {/* Fridge image */}
      <img
        src="/mockups/fridge.png"
        alt="Fridge"
        className="w-full rounded-md"
      />

      {/* Magnet (REALISTIC SCALE, SHADOW & DEPTH) */}
      <img
        src={previewImage}
        alt="Magnet on fridge"
        className={`
          absolute
          top-[20%]
          right-[20%]
          ${magnetSize}
          ${magnetRadius}
          ${magnetShadow}
          ${magnetRotation}
        `}
      />
    </div>
  );
}
