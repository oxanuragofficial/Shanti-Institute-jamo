export default function SectionHeading({ eyebrow, title, children, center = false, as: Tag = 'h2', id }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className={eyebrow ? 'mt-2' : ''}>{title}</Tag>
      {children && <p className="mt-3 text-[1.02rem] text-muted">{children}</p>}
    </div>
  )
}
