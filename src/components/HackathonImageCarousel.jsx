// src/components/HackathonImageCarousel.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

export default function HackathonImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  // Show 2 images at a time
  const visibleImages = images.slice(currentIndex, currentIndex + 2);

  const goToNext = () => {
    if (currentIndex + 2 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex + 2 < images.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="relative w-full mb-6">
      <div className="flex gap-3">
        {visibleImages.map((src, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm aspect-video"
          >
            <ResponsiveImage
              src={src}
              alt={`Hackathon image ${currentIndex + idx + 1}`}
              containerClassName="w-full h-full"
              className="object-contain" // 👈 Show full image, no cropping
            />
          </div>
        ))}

        {/* Fill empty slot if only 1 image in view */}
        {visibleImages.length === 1 && (
          <div className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
            <span className="text-slate-400 text-sm">No additional image</span>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 2 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all ${
              canGoPrev
                ? 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            aria-label="Previous images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all ${
              canGoNext
                ? 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            aria-label="Next images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Page Indicator */}
      {images.length > 2 && (
        <div className="text-center mt-3 text-sm text-slate-500">
          Showing {currentIndex + 1}–{Math.min(currentIndex + 2, images.length)} of {images.length}
        </div>
      )}
    </div>
  );
}