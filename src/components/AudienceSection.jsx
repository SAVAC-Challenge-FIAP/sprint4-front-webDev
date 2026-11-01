import { GraduationCap, Palette, Smartphone } from 'lucide-react'
import Card from './Card'
import CardGrid from './CardGrid'
import InfoCard from './InfoCard'

const audiences = [
  { id: 'students', icon: GraduationCap, title: 'Estudantes', description: 'Momentos de faculdade, amigos, viagens e eventos que merecem ser registrados sem esforço' },
  { id: 'generation-z', icon: Smartphone, title: 'Geração Z', description: 'Acostumados com vídeo curto e experiências rápidas, sem terem que fazer muito.' },
  { id: 'creators', icon: Palette, title: 'Criadores casuais', description: 'Querem produzir conteúdo bonito no dia a dia com facilidade.' },
]

const AudienceSection = () => {
  return (
      <section className="w-full border-y border-border bg-section px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="publico-alvo">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[1.2fr_0.8fr] gap-[50px] max-[1024px]:grid-cols-1">
              <div>
                  <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">PÚBLICO‑ALVO</p>
                  <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="publico-titulo2">Estudantes full‑time</h2>
                  <p className="mb-[15px] max-w-[650px] text-base text-muted">
                      Estão sempre entre estudos e vida social, quase sempre conectados. O
                      telefone é a ferramenta que mantém essa rotina conectada, produtiva e presente. A câmera é onde essa rotina vira memória e conteúdo.
                  </p>
                  <ul className="text-muted">
                      <li className="relative mb-3 pl-5 before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accent">Rotina corrida entre aula, trabalho e vida social</li>
                      <li className="relative mb-3 pl-5 before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accent">Comunicam sua identidade através do que postam</li>
                      <li className="relative mb-3 pl-5 before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accent">Não têm tempo (nem paciência) para editar manualmente</li>
                      <li className="relative mb-3 pl-5 before:absolute before:left-0 before:top-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-accent">Consomem e produzem vídeos curtos</li>
                  </ul>
              </div>

              <Card as="aside" className="bg-card p-[30px]">
                  <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">PERSONA</p>
                  <h3 className="mb-[15px] text-[17px]">Estudante Full‑time</h3>
                  <dl className="grid gap-5">
                      <div><dt className="mb-[3px] text-xs text-subtle uppercase">Objetivo</dt><dd className="m-0 text-[15px]">Registrar e compartilhar sem perder tempo</dd></div>
                      <div><dt className="mb-[3px] text-xs text-subtle uppercase">Frustração</dt><dd className="m-0 text-[15px]">Editar em apps separados até perder a vontade de postar</dd></div>
                      <div><dt className="mb-[3px] text-xs text-subtle uppercase">O que valoriza</dt><dd className="m-0 text-[15px]">Rapidez, estética consistente e presença nas redes</dd></div>
                  </dl>
              </Card>
          </div>

          <div className="mx-auto mt-[50px] max-w-[1180px]">
              <CardGrid
                  className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
                  items={audiences}
                  renderItem={(audience) => <InfoCard {...audience} />}
              />
          </div>
      </section>
  )
}

export default AudienceSection
