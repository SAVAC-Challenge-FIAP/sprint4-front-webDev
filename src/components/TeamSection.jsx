import savioImage from '../assets/savio.png'
import anaImage from '../assets/ana.jpg'
import victorImage from '../assets/victor.jpg'
import arthurImage from '../assets/arthur.jpg'
import carolImage from '../assets/carol.jpg'
import CardGrid from './CardGrid'
import TeamMemberCard from './TeamMemberCard'

const team = [
  { id: 'savio', image: savioImage, name: 'Sávio Afonso', role: 'Desenvolvimento Back-end', registration: 'RM 570789' },
  { id: 'ana', image: anaImage, name: 'Ana Beatriz', role: 'Scrum Master', registration: 'RM 572278' },
  { id: 'victor', image: victorImage, name: 'Victor Pontes', role: 'Desenvolvimento Front-end', registration: 'RM 572781' },
  { id: 'arthur', image: arthurImage, name: 'Arthur Carvalho', role: 'Pesquisa e Documentação', registration: 'RM 570387' },
  { id: 'carol', image: carolImage, name: 'Carolina Hada', role: 'UX/UI Design', registration: 'RM 571664' },
]

const TeamSection = () => {
  return (
    <section className="w-full border-y border-border bg-section px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="equipe">
      <div className="mx-auto max-w-[1180px]">
        <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">NOSSA EQUIPE</p>
        <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="equipe-titulo2">Quem construiu o Synesthesia</h2>
      </div>
      
      <CardGrid
        className="mx-auto mt-[35px] grid max-w-[1180px] grid-cols-5 gap-5 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-1"
        items={team}
        renderItem={(member) => <TeamMemberCard {...member} />}
      />
    </section>
  )
}

export default TeamSection
