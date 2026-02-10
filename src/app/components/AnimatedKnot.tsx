"use client";
import { useEffect, useRef } from "react";

export default function AnimatedKnot() {
  const pathRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    pathRefs.current.forEach((p) => {
      if (!p) return;
      const len = p.getTotalLength();
      p.style.setProperty("--len", String(len));
      // Dash and gap both half the length, so the dash is always visible
      const dash = len / 2;
      p.style.setProperty("--dash", String(dash));
      p.style.strokeDasharray = `${dash} ${dash}`;
      p.style.strokeDashoffset = "0";
    });
  }, []);

  const setRef = (el: SVGRectElement | null, idx: number) => {
    pathRefs.current[idx] = el;
  };

  return (
    <div style={{ width: "100%", maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <div
        style={{
          background: "transparent",
          borderRadius: 6,
          padding: 28,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="-28 0 900 700"
          width="80%"
          height="80%"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background ribbon strokes (thicker, dark) */}
          <g strokeLinecap="round" strokeLinejoin="round">
            <rect
              x="120"
              y="80"
              width="400"
              height="400"
              rx="60"
              transform="rotate(45 250 210)"
              fill="none"
              stroke="#2e2e36"
              strokeWidth="48"
            />
            <rect
              x="360"
              y="220"
              width="400"
              height="400"
              rx="60"
              transform="rotate(-45 490 350)"
              fill="none"
              stroke="#2e2e36"
              strokeWidth="48"
            />
          </g>

          {/* Top thin outline to create subtle groove */}
          <g strokeLinecap="round" strokeLinejoin="round" opacity="0.15">
            <rect
              x="120"
              y="80"
              width="400"
              height="400"
              rx="60"
              transform="rotate(45 250 210)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
            <rect
              x="360"
              y="220"
              width="400"
              height="400"
              rx="60"
              transform="rotate(-45 490 350)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
          </g>

          {/* Animated white-moving-dash strokes (on top) */}
          <g strokeLinecap="round" strokeLinejoin="round">
            {/* Path 0 */}
            <rect
              x="120"
              y="80"
              width="400"
              height="400"
              rx="60"
              transform="rotate(45 250 210)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              ref={(el) => setRef(el, 0)}
              className="moving"
            />

            {/* Path 1 */}
            <rect
              x="360"
              y="220"
              width="400"
              height="400"
              rx="60"
              transform="rotate(-45 490 350)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              ref={(el) => setRef(el, 1)}
              className="moving moving--slow"
            />
          </g>

          {/* extra: another moving path with different dash length or offset */}
          <g>
            {/* small inner loop - just example */}
            <rect
              x="260"
              y="160"
              width="400"
              height="400"
              rx="24"
              transform="rotate(45 340 240)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              ref={(el) => setRef(el, 2)}
              className="moving moving--faster"
            />
          </g>

          <style jsx>{`
            .moving {
              stroke-linecap: round;
              stroke-linejoin: round;
              /* dash and gap are set dynamically via JS */
              animation: dashmove 4s linear infinite;
            }
            .moving--slow {
              animation-duration: 6.2s;
            }
            .moving--faster {
              animation-duration: 2.6s;
              animation-direction: reverse;
              opacity: 0.95;
            }
            @keyframes dashmove {
              from {
                stroke-dashoffset: 0;
              }
              to {
                stroke-dashoffset: var(--len);
              }
            }
          `}</style>
        </svg>
      </div>
    </div>
  );
}