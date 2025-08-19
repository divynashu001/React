import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    name: 'Lotus Suite',
    price: '₹4,500 / night',
    amenities: ['Free WiFi', 'Air Conditioning', 'Private Balcony', 'Breakfast Included'],
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1c6352d29?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Peacock Deluxe',
    price: '₹3,800 / night',
    amenities: ['Free WiFi', 'Garden View', 'King Size Bed', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Divine Cottage',
    price: '₹3,200 / night',
    amenities: ['Cozy & Spacious', 'Courtyard Access', 'Tea/Coffee Maker', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1505692952043-1cbbb9b7d8d2?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      className="max-w-7xl mx-auto px-6 py-20 text-peacockBlue"
      aria-labelledby="rooms-heading"
    >
      <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center text-peacockPurple" id="rooms-heading">
        Our Rooms
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {rooms.map(({ id, name, price, amenities, image }) => (
          <motion.article
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            role="group"
            aria-labelledby={`room-title-${id}`}
          >
            <img src={image} alt={`${name} room`} className="w-full h-48 object-cover" />
            <div className="p-5 text-peacockBlue">
              <h3 id={`room-title-${id}`} className="text-xl font-semibold mb-2">{name}</h3>
              <p className="font-medium text-peacockGreen mb-3">{price}</p>
              <ul className="text-sm space-y-1 mb-4">
                {amenities.map((a, i) => (
                  <li key={i}>&#8226; {a}</li>
                ))}
              </ul>
              <button
                className="w-full bg-peacockGreen text-peacockGold py-2 rounded-md font-semibold shadow-md transition-colors hover:bg-peacockPurple focus:outline-none focus:ring-4 focus:ring-peacockGold/70"
                aria-label={`Book ${name}`}
                onClick={() => {
                  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Now
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
