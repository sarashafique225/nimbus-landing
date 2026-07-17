import './Testimonials.css';

const testimonials = [
  { name: 'Ayesha Raza', role: 'Product Lead, Voltra', text: 'Nimbus cut our weekly status-meeting time in half. Everyone just checks the board now.' },
  { name: 'Ahmed', role: 'Founder, Fetchly', text: 'The cleanest project tool we\'ve tried. Our team actually enjoys using it daily.' },
  { name: 'Maria', role: 'Ops Manager, Brightside', text: 'Switching from spreadsheets to Nimbus took one afternoon and saved us hours every week.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by fast-moving teams</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="quote">"{t.text}"</p>
              <div className="author">
                <div className="avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}