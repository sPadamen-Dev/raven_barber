const icons = {
  award: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="m8.8 11.2-1.3 7.3 4.5-2.7 4.5 2.7-1.3-7.3" />
    </>
  ),
  calendar: (
    <>
      <path d="M8 3v4M16 3v4M4 9h16" />
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 13h3M13 13h3M8 17h3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l4 2" />
    </>
  ),
  facebook: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 8.2H13c-.8 0-1.2.5-1.2 1.3v1.6h2.8l-.4 2.7h-2.4V21" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M17.2 6.8h.1" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  phone: (
    <path d="M7.6 4.5 5.8 6.3c-.6.6-.8 1.5-.4 2.3 1.8 4.1 5 7.3 9.1 9.1.8.4 1.7.2 2.3-.4l1.8-1.8c.5-.5.5-1.3.1-1.9l-2-2.3c-.4-.5-1.1-.7-1.7-.4l-2.1.9a11.4 11.4 0 0 1-4.7-4.7l.9-2.1c.3-.6.1-1.3-.4-1.7l-2.3-2c-.6-.4-1.4-.4-1.9.1Z" />
  ),
  shield: (
    <path d="M12 3 20 6v6c0 5-3.4 8.1-8 9-4.6-.9-8-4-8-9V6l8-3Z" />
  ),
  stars: (
    <>
      <path d="m12 3 1.8 4 4.2.4-3.2 2.8.9 4.1-3.7-2.1-3.7 2.1.9-4.1L6 7.4l4.2-.4L12 3Z" />
      <path d="m5 15 .8 1.8 1.9.2-1.5 1.2.4 1.8L5 19.1 3.4 20l.4-1.8L2.3 17l1.9-.2L5 15Z" />
      <path d="m19 15 .8 1.8 1.9.2-1.5 1.2.4 1.8-1.6-.9-1.6.9.4-1.8-1.5-1.2 1.9-.2.8-1.8Z" />
    </>
  ),
  thumbsUp: (
    <path d="M7 10v11H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3Zm0 0 4.2-7c.4-.6 1.2-.9 1.9-.6.9.3 1.4 1.2 1.2 2.1L13.4 9H19a3 3 0 0 1 3 3.3l-.6 6A3 3 0 0 1 18.4 21H7" />
  ),
  whatsapp: (
    <>
      <path d="M4.3 20.2 5.6 16A8.2 8.2 0 1 1 9 19.1l-4.7 1.1Z" />
      <path d="M9.1 8.6c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.4.5c-.1.2-.2.3-.1.5.4.8 1.1 1.5 2 2 .2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.6 0 .6-.3 1.4-.8 1.7-.7.5-1.7.4-2.6.1a8 8 0 0 1-4.7-4.4c-.4-.9-.5-1.9-.1-2.6Z" />
    </>
  ),
}

export function Icon({ name, size = 22, strokeWidth = 2, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {icons[name]}
    </svg>
  )
}
