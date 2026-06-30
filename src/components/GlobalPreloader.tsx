"use client";

import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function GlobalPreloader() {
  const { progress, active } = useProgress();
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [show, setShow] = useState(true);

  // Mencegah mismatch hidrasi SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Jika loading progress mencapai 100% dan loader sudah tidak aktif
      if (progress >= 100 && !active) {
        // Berikan sedikit delay agar transisi terasa smooth & premium
        const timeoutFade = setTimeout(() => {
          setFadeOut(true);
          // Hancurkan element dari DOM setelah animasi fade-out selesai
          const timeoutRemove = setTimeout(() => {
            setShow(false);
          }, 1000); // Harus sama dengan durasi transition opacity (duration-1000)
          return () => clearTimeout(timeoutRemove);
        }, 800);

        return () => clearTimeout(timeoutFade);
      }
    }
  }, [progress, active, mounted]);

  if (!mounted || !show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col justify-center items-center z-[9999] transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-md w-full px-6 space-y-6">
        {/* Title / Name */}
        <h1 className="text-white text-3xl md:text-4xl font-black tracking-[0.25em] text-center select-none uppercase animate-pulse">
          RIZKULLOH
          <span className="block mt-1 text-gray-500 font-light tracking-[0.15em] text-xl md:text-2xl">
            ALPRIYANSAH
          </span>
        </h1>

        {/* Status Text */}
        <div className="text-cyan-400 font-medium tracking-[0.2em] text-[10px] uppercase text-center animate-pulse pt-4">
          Loading 3D Environment
        </div>

        {/* Progress Bar Wrapper */}
        <div className="w-64 h-[2px] bg-gray-900 rounded-full overflow-hidden border border-gray-800/30 relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="text-xs text-gray-500 font-mono tracking-widest">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
