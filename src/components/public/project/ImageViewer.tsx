import { useState } from "react";
import type { ImageViewerProps } from "./ProjectType";

export default function ImageViewer({  previewImg, setPreviewImg }: ImageViewerProps) {
    const [zoomed, setZoomed] = useState(false);

    const closePreview = () => {
        setPreviewImg(null);
        setZoomed(false);
    };

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-51 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closePreview}
        >
            <button
                className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                onClick={closePreview}
            >
                ✕
            </button>

            <img
                src={previewImg}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    setZoomed((z) => !z);
                }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-300 ease-in-out cursor-zoom-in ${zoomed ? "scale-150 cursor-zoom-out" : "scale-100"}`}
            />
        </div>
    );
}