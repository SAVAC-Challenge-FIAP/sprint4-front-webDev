import { Film, Palette, Sparkles } from 'lucide-react'
import CardGrid from './CardGrid'
import InfoCard from './InfoCard'

const steps = [
  { id: 'capture', number: '01', title: 'Capturar', description: 'O usuário fotografa normalmente.' },
  { id: 'curation', number: '02', title: 'Curadoria por IA', description: 'A cena é analisada (cor, luz, cenário) e a câmera sugere estilo e música compatíveis.' },
  { id: 'share', number: '03', title: 'Compartilhar', description: 'Vídeo pronto, direto para a rede social.' },
]

const styles = [
  { id: 'cinematic', icon: Film, title: 'Cinematográfica', description: 'Tons contidos e trilha instrumental, para registros que pedem clima de cena.' },
  { id: 'minimal', icon: Sparkles, title: 'Minimalista', description: 'Cortes limpos e áudio discreto, quando o momento fala por si só.' },
  { id: 'vibrant', icon: Palette, title: 'Vibrante', description: 'Cores saturadas e batida acelerada, para conteúdo feito para viralizar.' },
]

const AboutSection = () => {
  return (
      <section className="mx-auto w-full max-w-[1180px] px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="solucao">
          <div>

              <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">PROBLEMA</p>
              <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="problema-titulo2">Uma foto não deveria dar tanto trabalho.</h2>
              <p className="mb-[15px] max-w-[650px] text-base text-muted">
                  Entre o clique e a publicação, o fluxo tradicional passa por sete etapas espalhadas
                  em vários aplicativos e cada troca é uma nova chance de desistir.
              </p>

              <ol className="mt-[25px] flex flex-wrap gap-[10px]">
                  {['Câmera', 'Galeria', 'Editor', 'Filtros', 'Música', 'Sincronização', 'Instagram'].map((step, index, steps) => (
                    <li className="rounded-[30px] border border-border bg-card px-[15px] py-2 text-[13px] text-muted" key={step}>
                      {step}{index < steps.length - 1 && <span className="ml-3 text-accent">→</span>}
                    </li>
                  ))}
              </ol>

              <div className="my-[50px] h-px bg-border"></div>

              <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">COMO FUNCIONA</p>
              <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]">Três passos. Um único fluxo.</h2>

              <CardGrid
                  className="mt-[25px] grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
                  items={steps}
                  renderItem={(step) => <InfoCard {...step} />}
              />

              <div className="my-[50px] h-px bg-border"></div>

              <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">INTELIGÊNCIA ARTIFICIAL</p>
              <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]">Personlização única.</h2>
              <p className="mb-[15px] max-w-[650px] text-base text-muted">
                  Em vez de vários presets e barras de ajuste, a IA já chega com uma curadoria pronta.
                  O usuário só escolhe o resultado que combina com o momento.
              </p>

              <CardGrid
                  className="mt-[25px] grid grid-cols-3 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1"
                  items={styles}
                  renderItem={(style) => <InfoCard {...style} />}
              />
          </div>
      </section>
  )
}

export default AboutSection
