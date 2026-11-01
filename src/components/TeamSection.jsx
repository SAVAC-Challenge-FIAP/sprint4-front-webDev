import savioImage from '../assets/savio.png'
import anaImage from '../assets/ana.jpeg'
import victorImage from '../assets/victor.jpg'
import arthurImage from '../assets/arthur.jpg'
import carolImage from '../assets/carol.jpg'

const TeamSection = () => {
  return (
    <section className="w-full border-y border-border bg-section px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="equipe">
      <div className="mx-auto max-w-[1180px]">
        <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">NOSSA EQUIPE</p>
        <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="equipe-titulo2">Quem construiu o Synesthesia</h2>
      </div>
      
      <div className="mx-auto mt-[35px] grid max-w-[1180px] grid-cols-5 gap-5 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-1">
        <div className="rounded-[18px] border border-border bg-card px-[15px] py-5 text-center">
          <img className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover" src={savioImage} alt="Sávio Afonso"/>
          <h3 className="mb-2 text-[15px]">Sávio Afonso</h3>
          <p className="mb-1 text-[13px] text-muted">Desenvolvimento Back-end</p>
          <p className="m-0 text-xs text-subtle">RM 570789</p>
        </div>
        <div className="rounded-[18px] border border-border bg-card px-[15px] py-5 text-center">
          <img className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover" src={anaImage} alt="Ana Beatriz"/>
          <h3 className="mb-2 text-[15px]">Ana Beatriz</h3>
          <p className="mb-1 text-[13px] text-muted">Scrum Master</p>
          <p className="m-0 text-xs text-subtle">RM 572278</p>
        </div>
        <div className="rounded-[18px] border border-border bg-card px-[15px] py-5 text-center">
          <img className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover" src={victorImage} alt="Victor Pontes"/>
          <h3 className="mb-2 text-[15px]">Victor Pontes</h3>
          <p className="mb-1 text-[13px] text-muted">Desenvolvimento Front-end</p>
          <p className="m-0 text-xs text-subtle">RM 572781</p>
        </div>
        <div className="rounded-[18px] border border-border bg-card px-[15px] py-5 text-center">
          <img className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover" src={arthurImage} alt="Arthur Carvalho"/>
          <h3 className="mb-2 text-[15px]">Arthur Carvalho</h3>
          <p className="mb-1 text-[13px] text-muted">Pesquisa e Documentação</p>
          <p className="m-0 text-xs text-subtle">RM 570387</p>
        </div>
        <div className="rounded-[18px] border border-border bg-card px-[15px] py-5 text-center">
          <img className="mx-auto mb-5 h-[120px] w-[120px] rounded-full border-2 border-accent object-cover" src={carolImage} alt="Carolina Hada"/>
          <h3 className="mb-2 text-[15px]">Carolina Hada</h3>
          <p className="mb-1 text-[13px] text-muted">UX/UI Design</p>
          <p className="m-0 text-xs text-subtle">RM 571664</p>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
