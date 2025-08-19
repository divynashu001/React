import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    author: 'Raghav',
    content: 'The stay was soul-soothing! The blend of culture and comfort was perfect.',
  },
  {
    author: 'Mira',
    content: 'Beautiful homestay with warm hospitality. Will visit again.',
  },
  {
    author: 'Sneha',
    content: 'Amazing experience surrounded by spirituality and peacefulness.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="max-w-4xl mx-auto px-6 py-20 text-peacockBlue" aria-label="Guest testimonials">
      <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center text-peacockPurple">
        What Our Guests Say
      </h2>
      <div className="relative h-44 md:h-36 bg-white rounded-lg shadow-lg p-8 flex items-center justify-center">
        <AnimatePresence exitBeforeEnter>
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="text-lg italic text-peacockBlue max-w-3xl mx-auto text-center"
          >
            “{testimonials[current].content}”
            <footer className="mt-4 font-semibold text-peacockGreen">— {testimonials[current].author}</footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
}
