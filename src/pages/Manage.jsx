import { useState } from 'react';

const Manage = () => {
  const [bookingReference, setBookingReference] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log({ bookingReference, lastName });
    alert(`Retrieving booking for ${bookingReference}...`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-6">Manage Your Booking</h1>
        <p className="text-gray-600 mb-8">Enter your booking reference and last name to view and manage your booking details.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Booking Reference</label>
            <input
              type="text"
              placeholder="e.g., WXYZ12"
              value={bookingReference}
              onChange={(e) => setBookingReference(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red"
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-red hover:opacity-90 text-white font-bold py-3 px-4 rounded-md transition-opacity duration-300"
          >
            Retrieve Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Manage;
