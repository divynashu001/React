import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-peacockBlue text-peacockGold flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1533089860892-e9ec6fc8e625?auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero section with Vrindavan spiritual background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-peacockBlue/90 via-peacockGreen/70 to-peacockTeal/75 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative max-w-4xl bg-peacockBlue bg-opacity-75 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
          Experience the Spiritual Serenity of Vrindavan & Mathura
        </h1>
        <p className="mb-8 text-lg md:text-xl font-light">
          Stay at our elegant homestay and immerse yourself in the divine culture and traditions.
        </p>
        <a
          href="#booking"
          className="inline-block bg-peacockGreen hover:bg-peacockPurple text-peacockGold font-semibold px-8 py-3 rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-peacockGold/75"
          aria-label="Book your stay"
        >
          Book Your Stay
        </a>
      </motion.div>
      {/* Background Gradient Animation can be implemented here */}
    </section>
  );
}
