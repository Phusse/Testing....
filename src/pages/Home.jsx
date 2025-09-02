import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({
      from,
      to,
      departureDate: departureDate.toISOString(),
      returnDate: returnDate ? returnDate.toISOString() : '',
      passengers,
    }).toString();

    navigate(`/book?${searchParams}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/222222/FFFFFF?text=Welcome')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-5xl font-extrabold mb-4">Fly with Air Peace</h1>
          <p className="text-xl">Your journey to comfort and safety begins here.</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl -mt-32 relative">
            <h2 className="text-3xl font-bold mb-6 text-center text-brand-dark">Book a Flight</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-10 gap-4 items-end">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input type="text" placeholder="City or airport" value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input type="text" placeholder="City or airport" value={to} onChange={(e) => setTo(e.target.value)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Departure</label>
                <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent" />
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Return</label>
                <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} placeholderText="One-way" className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent" />
              </div>
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Passengers</label>
                <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red focus:border-transparent" />
              </div>
              <button type="submit" className="w-full lg:col-span-1 bg-brand-red hover:opacity-90 text-white font-bold py-3 px-4 rounded-md transition-opacity duration-300">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Deals and Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Deals and Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deal Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Lagos" alt="Deal to Lagos" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fly to Lagos</h3>
                <p className="text-gray-700">From $150</p>
              </div>
            </div>
            {/* Deal Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x250/000000/FFFFFF?text=Abuja" alt="Deal to Abuja" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fly to Abuja</h3>
                <p className="text-gray-700">From $120</p>
              </div>
            </div>
            {/* Deal Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x250/FF0000/FFFFFF?text=London" alt="Deal to London" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fly to London</h3>
                <p className="text-gray-700">From $750</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Air Peace Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Air Peace</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Air Peace is a leading Nigerian airline, committed to providing safe, comfortable, and affordable air travel to our customers. We pride ourselves on our exceptional customer service and our commitment to connecting people and places.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
