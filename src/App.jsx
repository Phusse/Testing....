import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Book from './pages/Book';

import Manage from './pages/Manage';

import Destinations from './pages/Destinations';

import About from './pages/About';

import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="manage" element={<Manage />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
