import Card from './Card'

const InfoCard = ({ title, description, number, icon: Icon }) => (
  <Card className="bg-card p-[25px]">
    {number && <span className="mb-[10px] block text-sm text-accent">{number}</span>}
    {Icon ? (
      <div className="mb-[15px] flex items-center gap-3">
        <Icon aria-hidden="true" className="shrink-0 text-accent" size={22} strokeWidth={1.75} />
        <h3 className="m-0 text-[17px]">{title}</h3>
      </div>
    ) : (
      <h3 className="mb-[15px] text-[17px]">{title}</h3>
    )}
    <p className="m-0 text-sm text-muted">{description}</p>
  </Card>
)

export default InfoCard
