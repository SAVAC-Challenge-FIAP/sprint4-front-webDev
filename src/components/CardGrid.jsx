import { Fragment } from 'react'

const CardGrid = ({ items, renderItem, className, ...props }) => (
  <div className={className} {...props}>
    {items.map((item, index) => (
      <Fragment key={item.id ?? item.trackId ?? index}>{renderItem(item, index)}</Fragment>
    ))}
  </div>
)

export default CardGrid
