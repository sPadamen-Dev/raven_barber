import { services } from '../data/siteData'
import { SectionTitle } from './SectionTitle'

export function Services() {
  return (
    <section className="services-section" id="servicos" aria-labelledby="services-title">
      <SectionTitle id="services-title">Nossos Serviços</SectionTitle>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img
              src={service.icon}
              width="76"
              height="76"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
