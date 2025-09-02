import { useState } from 'react';

const Manage = () => {
  const [bookingReference, setBookingReference] = useState('');
  const [lastName, setLastName] = useState('');
  const [foundBooking, setFoundBooking] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setFoundBooking(null);

    // Simulate finding a booking
    if (bookingReference.toUpperCase() === 'AIRPEACE123' && lastName) {
      setFoundBooking({
        from: 'Lagos',
        to: 'London',
        departureDate: '2024-12-25',
        passenger: lastName,
        cabin: 'Business',
      });
    } else {
      setError('Booking not found. Please check your details and try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-brand-dark mb-6">Manage Your Booking</h1>
          <p className="text-gray-600 mb-8">Enter your booking reference and last name to view and manage your booking details.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">Booking Reference</label>
              <input
                type="text"
                placeholder="e.g., AIRPEACE123"
                value={bookingReference}
                onChange={(e) => setBookingReference(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red"
                required
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
                required
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

        {error && (
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {foundBooking && (
          <div className="mt-6 bg-white p-8 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Booking Details</h2>
            <p><strong>From:</strong> {foundBooking.from}</p>
            <p><strong>To:</strong> {foundBooking.to}</p>
            <p><strong>Departure:</strong> {foundBooking.departureDate}</p>
            <p><strong>Passenger:</strong> {foundBooking.passenger}</p>
            <p><strong>Cabin:</strong> {foundBooking.cabin}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manage;
