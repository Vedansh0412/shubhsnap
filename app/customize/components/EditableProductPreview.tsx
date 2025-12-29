"use client";

import { useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "./EditableProductPreview.module.css";

interface EditableProductPreviewProps {
  image: string;
  shape: "circle" | "square";
  editable: boolean;

  scale: number;
  offset: { x: number; y: number };

  setScale: (value: number) => void;
  setOffset: (value: { x: number; y: number }) => void;

  onPreviewChange?: (dataUrl: string) => void;
}

export default function EditableProductPreview({
  image,
  shape,
  editable,
  scale,
  offset,
  setScale,
  setOffset,
  onPreviewChange,
}: EditableProductPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const CANVAS_SIZE = 320;
  const lastPos = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  /* Load image once */
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      imgRef.current = img;
      draw();
    };
  }, [image]);

  useEffect(() => {
    draw();
  }, [scale, offset, shape]);

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imgRef.current;

    if (!canvas || !ctx || !img) return;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.save();
    ctx.beginPath();
    if (shape === "circle") {
      ctx.arc(
        CANVAS_SIZE / 2,
        CANVAS_SIZE / 2,
        CANVAS_SIZE / 2,
        0,
        Math.PI * 2
      );
    } else {
      ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
    ctx.clip();

    /* White magnet base */
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.drawImage(
      img,
      offset.x,
      offset.y,
      CANVAS_SIZE * scale,
      CANVAS_SIZE * scale
    );

    ctx.restore();

    ctx.strokeStyle = "#000";
    ctx.lineWidth = editable ? 4 : 3;
    ctx.beginPath();
    shape === "circle"
      ? ctx.arc(
          CANVAS_SIZE / 2,
          CANVAS_SIZE / 2,
          CANVAS_SIZE / 2 - 2,
          0,
          Math.PI * 2
        )
      : ctx.rect(2, 2, CANVAS_SIZE - 4, CANVAS_SIZE - 4);
    ctx.stroke();

    onPreviewChange?.(canvas.toDataURL("image/png"));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!editable) return;
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!editable || !dragging.current) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    setOffset({
      x: offset.x + dx,
      y: offset.y + dy,
    });

    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  const coverMagnet = () => {
    setScale(1.2);
    setOffset({ x: -20, y: -20 });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={editable ? styles.editorWrapper : undefined}>
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className={editable ? "cursor-move" : "cursor-default"}
        />
      </div>

      {editable && (
        <>
          <button
            onClick={coverMagnet}
            className="cursor-pointer rounded border px-4 py-1 text-sm"
          >
            Cover entire magnet
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setScale(Math.max(0.5, scale - 0.1))}
              className="cursor-pointer rounded border px-3 py-1"
            >
              <Minus size={16} />
            </button>

            <span className="text-sm font-medium">Zoom</span>

            <button
              onClick={() => setScale(Math.min(3, scale + 0.1))}
              className="cursor-pointer rounded border px-3 py-1"
            >
              <Plus size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
