"use client";

import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function FallbackImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority = false,
}: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    // Render a simple colored div with text instead of an image
    return (
      <div 
        className={`bg-[#4caf50] flex items-center justify-center text-white font-bold ${className}`}
        style={{
          width: fill ? '100%' : width ? `${width}px` : '100%',
          height: fill ? '100%' : height ? `${height}px` : '100%',
        }}
      >
        Music Blocks
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
