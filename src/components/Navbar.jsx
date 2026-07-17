import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">Nimbus</div>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#cta" className="btn btn-primary nav-cta">Get Started</a>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}