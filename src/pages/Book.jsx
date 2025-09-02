import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const cabinClasses = [
  {
    name: 'Economy',
    description: 'Standard comfort with great value.',
    price: 0,
    priceModifier: 'Included',
    image: 'https://placehold.co/600x400/cccccc/222222?text=Economy',
  },
  {
    name: 'Business',
    description: 'Extra space, priority service, and premium meals.',
    price: 400,
    priceModifier: '+$400',
    image: 'https://placehold.co/600x400/D9232D/FFFFFF?text=Business',
  },
  {
    name: 'First Class',
    description: 'The ultimate luxury in air travel.',
    price: 1200,
    priceModifier: '+$1200',
    image: 'https://placehold.co/600x400/222222/FFFFFF?text=First+Class',
  },
];

const basePrice = 750; // Example base price

const Book = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCabin, setSelectedCabin] = useState(cabinClasses[0]);
  const [isProcessing, setIsProcessing] = useState(false);

  const flightDetails = {
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    departureDate: searchParams.get('departureDate'),
    returnDate: searchParams.get('returnDate'),
    passengers: searchParams.get('passengers'),
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
    setIsProcessing(true);

    const submissionData = {
      flightDetails,
      passengerDetails,
      cabin: selectedCabin.name,
      totalPrice: basePrice + selectedCabin.price,
    };

    console.log("Processing booking:", submissionData);

    setTimeout(() => {
      navigate('/confirmation', { state: { submissionData } });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-dark">Book Your Flight</h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Flight Details Summary */}
        <div className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">Your Selection</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>From:</strong> {flightDetails.from || 'N/A'}</p>
            <p><strong>To:</strong> {flightDetails.to || 'N/A'}</p>
            <p><strong>Departure:</strong> {formatDate(flightDetails.departureDate)}</p>
            <p><strong>Return:</strong> {flightDetails.returnDate ? formatDate(flightDetails.returnDate) : 'One-way'}</p>
            <p><strong>Passengers:</strong> {flightDetails.passengers || 'N/A'}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Passenger Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Passenger Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" placeholder="As it appears on your passport" value={passengerDetails.fullName} onChange={handleChange} required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={passengerDetails.email} onChange={handleChange} required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 234 567 890" value={passengerDetails.phone} onChange={handleChange} required className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
              </div>
            </div>
          </div>

          {/* Cabin Selection Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Select Your Cabin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cabinClasses.map((cabin) => (
                <div
                  key={cabin.name}
                  onClick={() => !isProcessing && setSelectedCabin(cabin)}
                  className={`rounded-lg border-2 p-4 transition-all duration-300 ${
                    selectedCabin.name === cabin.name ? 'border-brand-red shadow-xl' : 'border-gray-200'
                  } ${isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                >
                  <img src={cabin.image} alt={`${cabin.name} cabin`} className="w-full h-40 object-cover rounded-md mb-4"/>
                  <h3 className="font-bold text-xl">{cabin.name}</h3>
                  <p className="text-sm text-gray-600">{cabin.description}</p>
                  <p className="text-lg font-semibold mt-2 text-brand-red">{cabin.priceModifier}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Section (Placeholder) */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <div className="bg-gray-100 p-8 rounded-md text-center">
              <p className="text-gray-600">Payment gateway integration would appear here.</p>
              <p className="text-2xl font-bold mt-4">Total: ${basePrice + selectedCabin.price}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full lg:w-auto bg-brand-red text-white font-bold py-3 px-8 rounded-md transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Confirm Booking'}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
