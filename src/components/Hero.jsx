import heroImage from '../assets/0.png'

const Hero = () => {
  return (
      <section className="mx-auto w-full max-w-[1180px] px-[3%] py-[8vh]">
          <div className="grid grid-cols-2 items-center gap-[5%] max-[640px]:flex">
              <div className="w-full">
                  <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">ENG. SOFTWARE CHALLENGE</p>
                  <h1 className="text-[clamp(35px,5vw,52px)]" id="hero-title">Uma foto vira post.<br/>Sem tocar em outro app.</h1>
                  <p className="mb-[15px] max-w-[600px] text-[17px] text-muted">
                      Synesthesia é o recurso nativo da câmera JOVI que interpreta a cena que você
                      acabou de capturar e devolve um vídeo pronto para postar, com estética e trilha
                      escolhidas por inteligência artificial, em um único fluxo.
                  </p>
              </div>
              <div className="flex items-center justify-center max-[640px]:hidden">
                  <img className="w-[70%] max-w-[350px] rounded-[20px]" src={heroImage} alt="Protótipo do Synesthesia"/>
              </div>
          </div>
      </section>
  )
}

export default Hero
