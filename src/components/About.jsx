import shopImage from '../assets/raven/about-shop.webp'
import { aboutHighlights, brand } from '../data/siteData'
import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <SectionTitle id="about-title">Sobre a Raven Barber</SectionTitle>
      <div className="about-grid">
        <img
          className="about-photo"
          src={shopImage}
          width="337"
          height="192"
          alt="Ambiente interno premium da Raven Barber"
          loading="lazy"
          decoding="async"
        />

        <div className="about-copy">
          <p>
            Na Raven Barber, cada detalhe é pensado para entregar mais que um
            corte: entregamos confiança. Nossa missão é realçar sua imagem com
            técnica, estilo e atendimento personalizado em um ambiente moderno e
            acolhedor.
          </p>
          <p>
            Somos apaixonados pelo que fazemos e acreditamos que um bom visual
            transforma o dia e a vida.
          </p>
          <div className="about-highlights">
            {aboutHighlights.map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} size={28} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="contact-card" aria-label="Informacoes de contato">
          <div>
            <Icon name="clock" size={42} />
            <p>
              <span>Horário de funcionamento</span>
              <strong>{brand.hours}</strong>
            </p>
          </div>
          <div>
            <Icon name="phone" size={38} />
            <p>
              <span>Telefone / WhatsApp</span>
              <strong>{brand.phone}</strong>
            </p>
          </div>
          <div>
            <Icon name="mapPin" size={41} />
            <p>
              <span>Endereço</span>
              <strong>{brand.address}</strong>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
