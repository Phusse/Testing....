import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { submissionData } = location.state || {};

  if (!submissionData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Oops!</h1>
        <p className="text-lg text-gray-700">No booking data found. Please start a new booking.</p>
        <Link to="/" className="mt-8 inline-block bg-brand-red text-white font-bold py-3 px-6 rounded-md">Go to Homepage</Link>
      </div>
    );
  }

  const { flightDetails, passengerDetails, cabin, totalPrice } = submissionData;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Booking Successful!</h1>
        <p className="text-lg text-gray-700 mb-8">Thank you for flying with Air Peace. Your booking details are below.</p>

        <div className="text-left border-t pt-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Flight Summary</h2>
          <p><strong>From:</strong> {flightDetails.from}</p>
          <p><strong>To:</strong> {flightDetails.to}</p>
          <p><strong>Departure:</strong> {formatDate(flightDetails.departureDate)}</p>
          <p><strong>Passenger:</strong> {passengerDetails.fullName}</p>
          <p><strong>Cabin:</strong> {cabin}</p>
          <p className="text-xl font-bold mt-4">Total Price: ${totalPrice}</p>
        </div>

        <Link to="/" className="mt-8 inline-block bg-brand-red text-white font-bold py-3 px-6 rounded-md">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default Confirmation;
