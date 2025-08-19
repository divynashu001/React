import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({ name: '', email: '', checkIn: '', checkOut: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      setMessage('Please fill in all fields.');
      return;
    }
    setMessage('Thank you for your booking request! We will contact you soon.');
    // Here you would normally send data to server
  };

  return (
    <section id="booking" className="max-w-3xl mx-auto px-6 py-20 text-peacockBlue" aria-labelledby="booking-heading">
      <h2 id="booking-heading" className="text-3xl md:text-4xl font-serif mb-8 text-peacockPurple text-center">
        Book Your Stay
      </h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-peacockBlue rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peacockGreen"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-peacockBlue rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peacockGreen"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkIn" className="block mb-2 font-semibold">
              Check-in Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full border border-peacockBlue rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peacockGreen"
              required
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="block mb-2 font-semibold">
              Check-out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full border border-peacockBlue rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-peacockGreen"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-peacockGreen text-peacockGold font-semibold py-3 rounded-md shadow-md transition-colors hover:bg-peacockPurple focus:outline-none focus:ring-4 focus:ring-peacockGold/70"
          aria-label="Submit booking form"
        >
          Submit Booking
        </button>
        {message && <p className="mt-3 text-center text-peacockPurple font-semibold">{message}</p>}
      </form>
    </section>
  );
}
