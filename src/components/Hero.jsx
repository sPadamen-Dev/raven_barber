import heroScene from '../assets/raven/hero-scene.webp'
import { brand } from '../data/siteData'
import { Button } from './Button'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Raven Barber |<br />
          Barbearia Premium
        </h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-description">
          Cortes profissionais, barba impecável e planos mensais que cabem no
          seu estilo.
        </p>
        <p className="hero-location">
          <Icon name="mapPin" size={25} />
          <strong>{brand.address}</strong>
        </p>
        <div className="hero-actions">
          <Button href={brand.whatsappUrl} icon="whatsapp">
            Agendar pelo WhatsApp
          </Button>
          <Button href="#planos" variant="secondary">
            Ver planos
          </Button>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img
          src={heroScene}
          width="598"
          height="380"
          alt=""
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
