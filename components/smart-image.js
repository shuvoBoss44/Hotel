"use client";
/* eslint-disable @next/next/no-img-element */

const DEFAULT_FALLBACK = "/images/fallback/resort.svg";
const DEFAULT_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
const UNSPLASH_WIDTHS = [480, 768, 1024, 1280, 1600, 1920];

function isUnsplashUrl(url) {
  return typeof url === "string" && /^https?:\/\/images\.unsplash\.com/.test(url);
}

function buildUnsplashUrl(url, width, quality) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("auto", "format");
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("q", String(quality));
    return parsed.toString();
  } catch {
    return url;
  }
}

export default function SmartImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt = "",
  priority = false,
  quality = 62,
  sizes = DEFAULT_SIZES,
  loading,
  fetchPriority,
  decoding = "async",
  ...props
}) {
  const imageSrc = src || fallbackSrc;
  const shouldOptimizeUnsplash = isUnsplashUrl(imageSrc);
  const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
  const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "auto");

  const optimizedSrc = shouldOptimizeUnsplash
    ? buildUnsplashUrl(imageSrc, priority ? 1920 : 1280, quality)
    : imageSrc;

  const srcSet = shouldOptimizeUnsplash
    ? UNSPLASH_WIDTHS.map((width) => `${buildUnsplashUrl(imageSrc, width, quality)} ${width}w`).join(", ")
    : undefined;

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={shouldOptimizeUnsplash ? sizes : undefined}
      alt={alt}
      loading={resolvedLoading}
      fetchPriority={resolvedFetchPriority}
      decoding={decoding}
      onError={(event) => {
        const image = event.currentTarget;
        image.onerror = null;
        image.srcset = "";
        image.sizes = "";
        image.src = fallbackSrc;
      }}
      {...props}
    />
  );
}
