import { useState } from 'react'
import logo from '../assets/raven/brand-logo.png'
import { brand, navLinks } from '../data/siteData'
import { Button } from './Button'
import { Icon } from './Icon'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${isOpen ? 'is-open' : ''}`}>
      <span className="mobile-menu-visual" aria-hidden="true" />
      <a className="brand-link" href="#home" aria-label="Raven Barber home">
        <img src={logo} width="242" height="120" alt="Raven Barber" />
      </a>

      <nav className="desktop-nav" aria-label="Navegacao principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <Button
        className="header-action"
        href={brand.whatsappUrl}
        icon="calendar"
        variant="outline"
      >
        Agendar horário
      </Button>

      <button
        className="menu-button"
        type="button"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Abrir menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon name="menu" size={28} />
      </button>

      <div className="mobile-panel" id="mobile-menu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <Button href={brand.whatsappUrl} icon="whatsapp">
          Agendar
        </Button>
      </div>
    </header>
  )
}
