"use client";
/* eslint-disable @next/next/no-img-element */

const DEFAULT_FALLBACK = "/images/fallback/resort.svg";

export default function SmartImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt = "", ...props }) {
  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      onError={(event) => {
        const image = event.currentTarget;
        image.onerror = null;
        image.src = fallbackSrc;
      }}
      {...props}
    />
  );
}
