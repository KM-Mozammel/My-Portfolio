"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.token) {
        document.cookie = `token=${data.token}; path=/`;

        router.push("/admin");
        return;
      }

      setError(
        data.message ||
        "Invalid email or password."
      );
    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    background: "var(--section-bg)",
    border: "1px solid var(--border-color)",
    color: "var(--text-color)",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background:
          "var(--background-color)",
      }}
    >
      <div className="w-full max-w-md">
        {/* LOGO / TITLE */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-bold mb-3"
            style={{
              background:
                "var(--hero-gradient)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent",
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color:
                "var(--text-muted)",
            }}
          >
            Sign in to manage your
            portfolio dashboard.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div
          className="rounded-2xl p-8"
          style={{
            background:
              "var(--card-bg)",
            border:
              "1px solid var(--border-color)",
            boxShadow:
              "var(--shadow-glow)",
          }}
        >
          <div className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="admin@example.com"
                className="w-full p-3 rounded-xl outline-none"
                style={inputStyle}
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Enter password"
                className="w-full p-3 rounded-xl outline-none"
                style={inputStyle}
                onKeyDown={(e) => {
                  if (
                    e.key ===
                    "Enter"
                  ) {
                    handleLogin();
                  }
                }}
              />
            </div>

            {/* ERROR */}
            {error && (
              <div
                className="p-3 rounded-xl text-sm"
                style={{
                  background:
                    "rgba(239,68,68,0.15)",
                  color: "#ef4444",
                  border:
                    "1px solid rgba(239,68,68,0.3)",
                }}
              >
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              style={{
                background:
                  "var(--hero-gradient)",
                color: "#fff",
                boxShadow:
                  "var(--shadow-glow)",
              }}
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="text-center mt-6 text-sm"
          style={{
            color:
              "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} Mozammel
          Portfolio
        </div>
      </div>
    </div>
  );
}