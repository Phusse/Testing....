const destinations = [
  { name: 'Lagos, Nigeria', image: 'https://placehold.co/600x400/D9232D/FFFFFF?text=Lagos' },
  { name: 'Abuja, Nigeria', image: 'https://placehold.co/600x400/222222/FFFFFF?text=Abuja' },
  { name: 'London, UK', image: 'https://placehold.co/600x400/D9232D/FFFFFF?text=London' },
  { name: 'Dubai, UAE', image: 'https://placehold.co/600x400/222222/FFFFFF?text=Dubai' },
  { name: 'New York, USA', image: 'https://placehold.co/600x400/D9232D/FFFFFF?text=New+York' },
  { name: 'Accra, Ghana', image: 'https://placehold.co/600x400/222222/FFFFFF?text=Accra' },
];

const Destinations = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-brand-dark">Our Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="relative">
              <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
