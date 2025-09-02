import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-red">
          <Link to="/">Air Peace</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-brand-red transition-colors duration-300">Home</Link></li>
            <li><Link to="/book" className="text-gray-700 hover:text-brand-red transition-colors duration-300">Book a Flight</Link></li>
            <li><Link to="/manage" className="text-gray-700 hover:text-brand-red transition-colors duration-300">Manage Booking</Link></li>
            <li><Link to="/destinations" className="text-gray-700 hover:text-brand-red transition-colors duration-300">Destinations</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-brand-red transition-colors duration-300">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link to="/" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/book" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Book a Flight</Link></li>
            <li><Link to="/manage" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Manage Booking</Link></li>
            <li><Link to="/destinations" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Destinations</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-brand-red transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
