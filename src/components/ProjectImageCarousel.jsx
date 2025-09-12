// src/components/ProjectImageCarousel.jsx
import { useEffect, useState, useRef } from 'react';

export default function ProjectImageCarousel({ images, interval = 1500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full pt-[60%] bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded-xl">
        <span className="text-gray-500 dark:text-gray-400">No image available</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden"
      style={{
        // Maintain consistent visual height while preserving aspect ratio
        aspectRatio: '16/9', // Default fallback
        maxHeight: '320px', // Max height for consistency
      }}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Project image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500`} // 👈 object-contain (not cover)
          style={{
            opacity: idx === currentIndex ? 1 : 0,
            transitionTimingFunction: 'ease-in-out',
          }}
          loading="lazy"
        />
      ))}

      {/* Gradient Overlay to Blend Edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}