import logo from '../assets/raven/brand-logo.webp'
import { brand, navLinks } from '../data/siteData'
import { Icon } from './Icon'

export function Footer() {
  const footerLinks = navLinks.filter((link) => link.href !== '#home')

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <a className="footer-logo" href="#home" aria-label="Voltar ao inicio">
          <img src={logo} width="242" height="120" alt="Raven Barber" loading="lazy" />
        </a>
        <div>
          <h2>Raven Barber</h2>
          <p>Barbearia premium dedicada ao estilo, qualidade e autoestima masculina.</p>
        </div>
        <nav aria-label="Navegacao do rodape">
          <h2>Navegação</h2>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h2>Contato</h2>
          <p>
            <Icon name="phone" size={16} />
            {brand.phone}
          </p>
          <p>
            <Icon name="mapPin" size={16} />
            {brand.address}
          </p>
          <p>
            <Icon name="clock" size={16} />
            {brand.hours}
          </p>
        </div>
        <div>
          <h2>Siga-nos</h2>
          <div className="social-links">
            <a href={brand.instagramUrl} aria-label="Instagram Raven Barber">
              <Icon name="instagram" size={26} />
            </a>
            <a href={brand.facebookUrl} aria-label="Facebook Raven Barber">
              <Icon name="facebook" size={26} />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2024 Raven Barber. Todos os direitos reservados.</p>
    </footer>
  )
}
