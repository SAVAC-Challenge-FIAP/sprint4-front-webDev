import screen1 from '../assets/1.png'
import screen2 from '../assets/2.png'
import screen3 from '../assets/3.png'
import screen4 from '../assets/4.png'

const GallerySection = () => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-[3%] py-20 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="galeria">
      <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">GALERIA</p>
      <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="galeria-titulo2">O fluxo, tela a tela</h2>
      <p className="mb-[15px] max-w-[650px] text-base text-muted">Protótipo das quatro telas centrais da solução.</p>

      <div className="mt-[35px] grid min-h-[220px] grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
        <img className="h-[500px] w-full rounded-[18px] border border-border object-cover max-[1024px]:object-contain" src={screen1} alt="Tela do Synesthesia"/>
        <img className="h-[500px] w-full rounded-[18px] border border-border object-cover max-[1024px]:object-contain" src={screen2} alt="Tela do Synesthesia"/>
        <img className="h-[500px] w-full rounded-[18px] border border-border object-cover max-[1024px]:object-contain" src={screen3} alt="Tela do Synesthesia"/>
        <img className="h-[500px] w-full rounded-[18px] border border-border object-cover max-[1024px]:object-contain" src={screen4} alt="Tela do Synesthesia"/>
      </div>
    </section>
  )
}

export default GallerySection
