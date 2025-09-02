import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-brand-red transition-colors duration-300">Home</Link></li>
              <li><Link to="/book" className="hover:text-brand-red transition-colors duration-300">Book a Flight</Link></li>
              <li><Link to="/manage" className="hover:text-brand-red transition-colors duration-300">Manage Booking</Link></li>
              <li><Link to="/destinations" className="hover:text-brand-red transition-colors duration-300">Destinations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About Air Peace</h3>
            <ul>
              <li><Link to="/about" className="hover:text-brand-red transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors duration-300">Contact Us</Link></li>
              <li><a href="#" className="hover:text-brand-red transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-brand-red text-white" />
              <button type="submit" className="w-full bg-brand-red hover:opacity-90 text-white font-bold py-2 px-4 rounded mt-2 transition-opacity duration-300">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-red transition-colors duration-300">Facebook</a>
              <a href="#" className="hover:text-brand-red transition-colors duration-300">Twitter</a>
              <a href="#" className="hover:text-brand-red transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 Air Peace. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
