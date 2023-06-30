"use client";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="container flex h-full flex-col items-center justify-center gap-8 pt-20">
      <h2 className="text-2xl">Something went wrong!</h2>
      <button className="btn-fill" type="button" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
