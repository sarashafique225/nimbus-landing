import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Run your team's work in one calm, focused place.</h1>
          <p>Nimbus brings tasks, docs, and conversations together so your team spends less time switching tools and more time shipping.</p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">Start free trial</a>
            <a href="#features" className="btn btn-secondary">See how it works</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-bar" />
            <div className="hero-card-row" />
            <div className="hero-card-row short" />
          </div>
        </div>
      </div>
    </section>
  );
}