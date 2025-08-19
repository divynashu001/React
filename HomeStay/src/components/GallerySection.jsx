import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519046904884-8891a8e6622a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504196272473-8e3a8dc7c41a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1486308510493-cb49b9b9f125?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80',
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="max-w-7xl mx-auto px-6 py-20 text-peacockBlue"
    >
      <h2
        id="gallery-heading"
        className="text-3xl md:text-4xl font-serif mb-10 text-center text-peacockPurple"
      >
        Gallery
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
          hidden: {},
        }}
      >
        {galleryImages.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            loading="lazy"
          />
        ))}
      </motion.div>
    </section>
  );
}
