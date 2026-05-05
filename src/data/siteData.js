import beardIcon from '../assets/raven/icon-beard.png'
import comboIcon from '../assets/raven/icon-combo.png'
import cutIcon from '../assets/raven/icon-cut.png'
import eyebrowIcon from '../assets/raven/icon-eyebrow.png'
import hydrationIcon from '../assets/raven/icon-hydration.png'

const whatsappMessage =
  'Olá, gostaria de agendar um horário na Raven Barber.'

export const brand = {
  name: 'Raven Barber',
  tagline: 'Barbearia Premium',
  address: 'Estrada dos Orquidófilos nº 890',
  phone: '11 91174-8013',
  hours: 'Terça à Sábado: 9H30 - 20H',
  whatsappUrl: `https://wa.me/5511911748013?text=${encodeURIComponent(
    whatsappMessage,
  )}`,
  instagramUrl: 'https://www.instagram.com/',
  facebookUrl: 'https://www.facebook.com/',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Agendar', href: '#agendar' },
]

export const services = [
  {
    title: 'Corte Masculino',
    description:
      'Cortes modernos e clássicos com acabamento impecável e estilo personalizado.',
    icon: cutIcon,
  },
  {
    title: 'Barba',
    description: 'Modelagem completa, alinhamento e cuidados para uma barba perfeita.',
    icon: beardIcon,
  },
  {
    title: 'Sobrancelha',
    description: 'Design de sobrancelha para realçar seu olhar e expressão.',
    icon: eyebrowIcon,
  },
  {
    title: 'Hidratação',
    description:
      'Hidratação capilar que fortalece, nutre e devolve o brilho aos fios.',
    icon: hydrationIcon,
  },
  {
    title: 'Combo Premium',
    description: 'Corte + Barba + Sobrancelha para um visual completo e alinhado.',
    icon: comboIcon,
  },
]

export const plans = [
  {
    name: 'Básico',
    price: 'R$80,00',
    features: ['Cortes ilimitados', '(de terça a quarta)'],
  },
  {
    name: 'Completo',
    price: 'R$180,00',
    featured: true,
    ribbon: 'Mais completo',
    features: [
      'Cortes ilimitados (de terça à sábado)',
      'Com sobrancelha, barba e hidratação',
      'Direito a compartilhar um corte por mês com outro cliente',
    ],
  },
  {
    name: 'Médio',
    price: 'R$120,00',
    features: [
      'Cortes ilimitados (de terça a sexta)',
      'Descontos em serviços extras',
    ],
  },
]

export const planWhatsappUrl = (planName) =>
  `https://wa.me/5511911748013?text=${encodeURIComponent(
    `Gostaria mais informação sobre este plano ${planName}`,
  )}`

export const aboutHighlights = [
  { icon: 'award', title: 'Profissionais qualificados' },
  { icon: 'stars', title: 'Atendimento personalizado' },
  { icon: 'shield', title: 'Ambiente moderno e exclusivo' },
  { icon: 'thumbsUp', title: 'Foco na autoestima masculina' },
]
