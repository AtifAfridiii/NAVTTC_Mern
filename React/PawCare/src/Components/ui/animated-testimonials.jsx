"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          aria-label="Previous testimonial"
        >
          <IconArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 px-4">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, idx) => (
              isActive(idx) && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, rotateY: randomRotateY() }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: randomRotateY() }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.designation}</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          aria-label="Next testimonial"
        >
          <IconArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

