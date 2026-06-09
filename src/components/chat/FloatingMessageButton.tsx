// src/components/FloatingMessageButton.tsx
"use client";

import { useState } from "react";
import ChatPopup from "./ChatPopup";

export default function FloatingMessageButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-25 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        💬
      </button>

      {/* Chat Popup */}
      {open && <ChatPopup onClose={() => setOpen(false)} />}
    </>
  );
}