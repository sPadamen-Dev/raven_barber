import clipperImage from '../assets/raven/clipper.webp'
import { brand } from '../data/siteData'
import { Button } from './Button'
import { Icon } from './Icon'

export function ContactBanner() {
  return (
    <section className="contact-banner" id="agendar" aria-labelledby="contact-title">
      <img
        className="contact-banner-image"
        src={clipperImage}
        width="330"
        height="124"
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div className="contact-copy">
        <h2 id="contact-title">Agende seu horário na Raven Barber</h2>
        <p>Seu estilo, nosso compromisso. Garanta seu horário agora mesmo!</p>
      </div>
      <div className="contact-actions">
        <Button href={brand.whatsappUrl} icon="whatsapp">
          Agendar pelo WhatsApp
        </Button>
        <div className="contact-phone">
          <Icon name="phone" size={28} />
          <p>
            <strong>{brand.phone}</strong>
            <span>{brand.hours}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
