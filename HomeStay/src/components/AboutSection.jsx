import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 text-peacockBlue"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        className="text-3xl md:text-4xl font-serif mb-8 text-center text-peacockPurple"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Vrindavan & Mathura Homestay
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our homestay celebrates the spiritual heritage of Vrindavan and Mathura,
        embracing the traditions and vibrant culture of this divine land. Nestled
        amidst serene surroundings, guests experience peace infused with rich history,
        art, and devotion.
      </motion.p>
    </section>
  );
}
