const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section for About Page */}
      <section
        className="relative bg-cover bg-center h-80 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/D9232D/FFFFFF?text=About+Us')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-5xl font-extrabold">About Air Peace</h1>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2013, Air Peace has grown to become West and Central Africa's largest airline. Our mission is to provide safe, reliable, and affordable air travel, connecting communities and fostering economic growth. We are driven by a passion for excellence and a commitment to our passengers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">To expand locations both domestically and internationally to provide a service that is customer-centric and to create a brand that is respected globally.</p>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Safety First</li>
              <li>Customer Satisfaction</li>
              <li>Integrity and Transparency</li>
              <li>Teamwork and Collaboration</li>
            </ul>
          </div>
          <div>
            <img src="https://placehold.co/600x400/222222/FFFFFF?text=Our+Team" alt="Our Team" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Fleet Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Our Fleet</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            We operate a modern and diverse fleet of aircraft to ensure the highest standards of safety and comfort for our passengers.
          </p>
          <div className="flex justify-center space-x-8">
            <p className="text-xl font-bold">Boeing 777</p>
            <p className="text-xl font-bold">Embraer 195-E2</p>
            <p className="text-xl font-bold">Boeing 737</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
