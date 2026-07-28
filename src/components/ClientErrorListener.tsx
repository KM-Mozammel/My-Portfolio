// components/ClientErrorListener.tsx
"use client";

import { useEffect } from "react";

export function ClientErrorListener() {
  useEffect(() => {
    // ---------- 1. Normal JavaScript errors ----------
    const handleError = (event: ErrorEvent) => {
      // Prevent the browser from also logging it (optional)
      // event.preventDefault();

      sendErrorToServer({
        type: "UnhandledClientError",
        message: event.message || "Unknown client error",
        path: window.location.pathname + window.location.search,
        stack: event.error?.stack || event.message,
        extra: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    };

    // ---------- 2. Unhandled Promise rejections ----------
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;

      let message = "Unhandled Promise Rejection";
      let stack: string | undefined;

      if (reason instanceof Error) {
        message = reason.message;
        stack = reason.stack;
      } else if (typeof reason === "string") {
        message = reason;
      } else {
        try {
          message = JSON.stringify(reason);
        } catch {
          message = String(reason);
        }
      }

      sendErrorToServer({
        type: "UnhandledPromiseRejection",
        message,
        path: window.location.pathname + window.location.search,
        stack,
        extra: {
          reason: String(reason),
        },
      });
    };

    // ---------- 3. Helper: send to our API ----------
    function sendErrorToServer(payload: {
      type: string;
      message: string;
      path: string;
      stack?: string;
      extra?: Record<string, any>;
    }) {
      // Don't send in development if you want (optional)
      // if (process.env.NODE_ENV === "development") return;

      fetch("/api/log-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        // keepalive helps if the page is unloading
        keepalive: true,
      }).catch((err) => {
        // Fallback so we never crash because of the logger itself
        console.error("[ClientErrorListener] Failed to send error log:", err);
      });
    }

    // Register listeners
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    // Cleanup
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  // This component renders nothing
  return null;
}