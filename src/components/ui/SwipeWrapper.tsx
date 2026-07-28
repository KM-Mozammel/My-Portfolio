"use client";

import { useRef } from "react";

type SwipeWrapperProps = {
  children: React.ReactNode;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
};

export default function SwipeWrapper({
  children,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: SwipeWrapperProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > threshold && onSwipeLeft) onSwipeLeft();
      if (diffX < -threshold && onSwipeRight) onSwipeRight();
    }
    // Vertical swipe
    else {
      if (diffY > threshold && onSwipeUp) onSwipeUp();
      if (diffY < -threshold && onSwipeDown) onSwipeDown();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
}