"use client";
export default function Loading() {
  return (
    <div className="flex min-h-full min-w-full items-center justify-center">
      <div className="inline-block h-16 w-16 animate-spin rounded-full border-[5px] border-solid border-gray-400 border-t-white ease-in-out "></div>
    </div>
  );
}
