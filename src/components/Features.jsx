import { Zap, Users, ShieldCheck } from 'lucide-react';
import './Features.css';

const features = [
  { icon: Zap, title: 'Fast by default', text: 'Every action feels instant, even with thousands of tasks.' },
  { icon: Users, title: 'Built for teams', text: 'Shared views, live updates, and comments where the work happens.' },
  { icon: ShieldCheck, title: 'Secure & reliable', text: '99.9% uptime with enterprise-grade data protection.' },
];

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2 className="section-title">Everything your team needs</h2>
        <div className="features-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <div className="feature-card" key={title}>
              <Icon size={28} color="var(--color-primary)" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}