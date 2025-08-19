import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-peacockBlue bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        <div className="text-peacockGold font-bold text-xl cursor-pointer select-none">Vrindavan Homestay</div>
        <div className="hidden md:flex space-x-8 text-peacockGold">
          <a href="#about" className="hover:text-peacockPurple transition">About</a>
          <a href="#rooms" className="hover:text-peacockPurple transition">Rooms</a>
          <a href="#gallery" className="hover:text-peacockPurple transition">Gallery</a>
          <a href="#testimonials" className="hover:text-peacockPurple transition">Testimonials</a>
          <a href="#booking" className="hover:text-peacockPurple transition">Book</a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-peacockGold focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-peacockBlue bg-opacity-90"
        >
          <a href="#about" className="block px-5 py-3 text-peacockGold hover:text-peacockPurple">About</a>
          <a href="#rooms" className="block px-5 py-3 text-peacockGold hover:text-peacockPurple">Rooms</a>
          <a href="#gallery" className="block px-5 py-3 text-peacockGold hover:text-peacockPurple">Gallery</a>
          <a href="#testimonials" className="block px-5 py-3 text-peacockGold hover:text-peacockPurple">Testimonials</a>
          <a href="#booking" className="block px-5 py-3 text-peacockGold hover:text-peacockPurple">Book</a>
        </motion.div>
      )}
    </nav>
  );
}
