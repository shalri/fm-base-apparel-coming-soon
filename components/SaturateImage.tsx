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
  const [saturationValue, setSaturationValue] = useState(100);
  const [width, setWidth] = useState<number>(0);

  // Initialize the transform function
  const saturationTransform = useTransform(x, [-width / 2, width / 2], [20, 100]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial width
      setWidth(window.innerWidth);

      const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX - window.innerWidth / 2);
      };

      // Update width on resize
      const handleResize = () => setWidth(window.innerWidth);

      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);

      // Subscribe to changes
      const unsubscribe = saturationTransform.onChange(value => setSaturationValue(value));

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        unsubscribe();
      };
    }
  }, [x, saturationTransform]);
  // This won't work with NextJS (window is undefined)
  // const x = useMotionValue(0);
  // // const saturation = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], [20, 100]);
  // const saturation = useTransform(x, [-window.innerWidth / 2, window.innerWidth / 2], [20, 100]);
  // // const [saturation, setSaturation] = useState(null);
  // const [saturationValue, setSaturationValue] = useState(100);
  //
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const handleMouseMove = (e: MouseEvent) => {
  //       x.set(e.clientX - window.innerWidth / 2);
  //     };
  //
  //     document.addEventListener('mousemove', handleMouseMove);
  //     const unsubscribe = saturation.onChange((value) => setSaturationValue(value));
  //
  //     return () => {
  //       document.removeEventListener('mousemove', handleMouseMove);
  //       unsubscribe();
  //     };
  //   }
  // }, [saturation]);


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
