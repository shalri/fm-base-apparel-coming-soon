"use client";

import { cn } from "@/lib/utils";
import { m, useMotionValue, useTransform } from "framer-motion";
import { type } from "os";
import { useEffect, useState } from "react";

interface SaturateImageProps {
  alt: string;
  className?: string;
}

export default function SaturateImage({
  alt,
  className,
}: SaturateImageProps) {
  const x = useMotionValue(0);
  const saturation = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], [20, 100]);
  // const [saturation, setSaturation] = useState(null);
  const [saturationValue, setSaturationValue] = useState(100);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX - window.innerWidth / 2);
      };

      document.addEventListener('mousemove', handleMouseMove);
      const unsubscribe = saturation.onChange((value) => setSaturationValue(value));

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        unsubscribe();
      };
    } else {
      return
    }
  }, [x, saturation]);


  return (
    <m.div
      onMouseMove={(e) => {
        x.set(e.clientX - window.innerWidth / 2);
      }}
      className={cn(className)}
      style={{ filter: `saturate(${saturationValue}%)` }}
      role="img"
      aria-label={alt}
    />

  )
}
