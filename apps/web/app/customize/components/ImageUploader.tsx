"use client";

import { useCallback } from "react";

interface ImageUploaderProps {
  image: string | null;
  onImageSelect: (image: string) => void;
}

export default function ImageUploader({
  image,
  onImageSelect,
}: ImageUploaderProps) {
  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    onImageSelect(imageUrl);
  };

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    []
  );

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-center hover:border-black"
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="imageUpload"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {image ? (
        <img
          src={image}
          alt="Uploaded preview"
          className="h-full w-full rounded-lg object-contain"
        />
      ) : (
        <label
          htmlFor="imageUpload"
          className="flex cursor-pointer flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">
            Drag & drop your photo here
          </span>
          <span className="text-xs text-gray-500">
            or click to upload
          </span>
        </label>
      )}
    </div>
  );
}
