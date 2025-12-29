"use client";

interface ShapeSelectorProps {
  selectedShape: "circle" | "square" | null;
  onSelect: (shape: "circle" | "square") => void;
}

export default function ShapeSelector({
  selectedShape,
  onSelect,
}: ShapeSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Circle Card */}
      <button
        onClick={() => onSelect("circle")}
        className={`flex flex-col items-center gap-4 rounded-lg border p-6 transition ${
          selectedShape === "circle"
            ? "border-black bg-gray-100"
            : "border-gray-200 hover:border-black"
        }`}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-black">
          <span className="text-sm">Circle</span>
        </div>
        <span className="font-medium">Circular Magnet</span>
      </button>

      {/* Square Card */}
      <button
        onClick={() => onSelect("square")}
        className={`flex flex-col items-center gap-4 rounded-lg border p-6 transition ${
          selectedShape === "square"
            ? "border-black bg-gray-100"
            : "border-gray-200 hover:border-black"
        }`}
      >
        <div className="flex h-24 w-24 items-center justify-center border-2 border-black">
          <span className="text-sm">Square</span>
        </div>
        <span className="font-medium">Square Magnet</span>
      </button>
    </div>
  );
}
