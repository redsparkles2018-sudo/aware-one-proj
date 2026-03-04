"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ThemedIconProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function ThemedIcon({
  lightSrc,
  darkSrc,
  alt,
  width = 40,
  height = 40,
  style,
  className,
}: ThemedIconProps) {
  const [isDark, setIsDark] = useState(true); // default dark

  useEffect(() => {
    const check = () => {
      setIsDark(
        document.documentElement.getAttribute("data-theme") !== "light"
      );
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isDark ? darkSrc : lightSrc}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
    />
  );
}
