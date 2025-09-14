import { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

export default function HackathonImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  // Show 1 image on mobile, 2 on larger screens
  const visibleCount = window.innerWidth < 640 ? 1 : 2;
  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  const goToNext = () => {
    if (currentIndex + visibleCount < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex + visibleCount < images.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="relative w-full mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {visibleImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 min-w-0 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm aspect-video"
          >
            <ResponsiveImage
              src={src}
              alt={`Hackathon image ${currentIndex + idx + 1}`}
              containerClassName="w-full h-full"
              className="object-contain"
            />
          </motion.div>
        ))}

        {/* Fill empty slot if only 1 image in view on larger screens */}
        {visibleImages.length === 1 && visibleCount === 2 && (
          <div className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
            <span className="text-slate-400 text-xs sm:text-sm">No additional image</span>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > visibleCount && (
        <div className="flex justify-between mt-3 sm:mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md transition-all ${
              canGoPrev
                ? 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            aria-label="Previous images"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            disabled={!canGoNext}
            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md transition-all ${
              canGoNext
                ? 'bg-white text-slate-700 hover:bg-slate-50 hover:shadow-lg'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            aria-label="Next images"
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      )}

      {/* Page Indicator */}
      {images.length > visibleCount && (
        <div className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500">
          Showing {currentIndex + 1}–{Math.min(currentIndex + visibleCount, images.length)} of {images.length}
        </div>
      )}
    </div>
  );
}