import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log(formData);
    alert('Thank you for your message!');
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-brand-dark">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-red"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-red hover:opacity-90 text-white font-bold py-3 px-4 rounded-md transition-opacity duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-brand-dark">Customer Service</h3>
            <p className="text-gray-700">Email: callcenter@flyairpeace.com</p>
            <p className="text-gray-700">Phone: +234-700-359-24773223</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-dark">Head Office</h3>
            <p className="text-gray-700">25, Sobo Arobiodu Street, Ikeja GRA, Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
