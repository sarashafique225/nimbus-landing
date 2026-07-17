import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">Nimbus</div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <p className="footer-copy">© 2026 Nimbus Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}