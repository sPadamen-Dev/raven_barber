import { plans, planWhatsappUrl } from '../data/siteData'
import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'

export function Plans() {
  return (
    <section className="plans-section" id="planos" aria-labelledby="plans-title">
      <SectionTitle id="plans-title">Planos Mensais</SectionTitle>
      <div className="plans-track" aria-label="Planos mensais, deslize para o lado">
        {plans.map((plan) => (
          <article
            className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}
            key={plan.name}
          >
            {plan.ribbon ? <span className="plan-ribbon">{plan.ribbon}</span> : null}
            <h3 className="plan-name">{plan.name}</h3>
            <strong className="plan-price">{plan.price}</strong>
            <span className="card-divider" aria-hidden="true" />
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  {plan.featured || feature.includes('Descontos') ? (
                    <Icon name="check" size={18} />
                  ) : null}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a className="plan-cta" href={planWhatsappUrl(plan.name)}>
              Contrata plano
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
