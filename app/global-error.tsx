"use client";
import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2 className="text-2xl">Something went wrong!</h2>
        <button className="btn-fill" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
