const Card = ({ as: Element = 'article', className = '', children, ...props }) => (
  <Element
    className={`rounded-[18px] border border-border ${className}`}
    {...props}
  >
    {children}
  </Element>
)

export default Card
