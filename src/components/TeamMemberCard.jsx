import Card from './Card'

const TeamMemberCard = ({ image, name, role, registration }) => (
  <Card className="bg-card px-[15px] py-5 text-center">
    <img
      className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover"
      src={image}
      alt={name}
    />
    <h3 className="mb-2 text-[15px]">{name}</h3>
    <p className="mb-1 text-[13px] text-muted">{role}</p>
    <p className="m-0 text-xs text-subtle">{registration}</p>
  </Card>
)

export default TeamMemberCard
