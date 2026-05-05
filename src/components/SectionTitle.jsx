export function SectionTitle({ children, id }) {
  return (
    <div className="section-heading" id={id}>
      <span aria-hidden="true" />
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  )
}
