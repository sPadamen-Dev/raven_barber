import { Icon } from './Icon'

export function Button({
  children,
  className = '',
  href,
  icon,
  variant = 'primary',
}) {
  return (
    <a className={`btn btn--${variant} ${className}`} href={href}>
      {icon ? <Icon name={icon} size={21} /> : null}
      <span>{children}</span>
    </a>
  )
}
