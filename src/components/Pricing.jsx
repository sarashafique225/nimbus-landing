import { Check } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    features: ['Up to 3 team members', 'Basic task boards', 'Community support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/user/month',
    features: ['Unlimited team members', 'Advanced automations', 'Priority support', 'Custom dashboards'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SSO & advanced security', 'Dedicated account manager', 'Custom integrations'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <h2 className="section-title">Simple pricing, no surprises</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`pricing-card ${plan.highlight ? 'highlight' : ''}`} key={plan.name}>
              {plan.highlight && <div className="badge">Most popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} color="var(--color-primary)" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'} plan-btn`}>
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}