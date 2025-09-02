import { useState } from 'react';

const Book = () => {
  const [passengerDetails, setPassengerDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log(passengerDetails);
    alert('Booking confirmed (prototype)!');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-dark">Book Your Flight</h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Flight Details Summary */}
        <div className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">Your Selection</h2>
          <p><strong>From:</strong> Lagos (LOS)</p>
          <p><strong>To:</strong> London (LHR)</p>
          <p><strong>Date:</strong> 2024-12-25</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Passenger Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Passenger Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" placeholder="As it appears on your passport" value={passengerDetails.fullName} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={passengerDetails.email} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 234 567 890" value={passengerDetails.phone} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
            </div>
          </div>

          {/* Payment Section (Placeholder) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <div className="bg-gray-100 p-8 rounded-md text-center">
              <p className="text-gray-600">Payment gateway integration would appear here.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
              <button type="submit" className="w-full lg:w-auto bg-brand-red hover:opacity-90 text-white font-bold py-3 px-8 rounded-md transition-opacity duration-300">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
