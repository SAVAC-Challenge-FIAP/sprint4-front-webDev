const AboutSection = () => {
  return (
      <section id="solucao" class="solucao-section">
          <div class="problema">

              <p class="problema-titulo">PROBLEMA</p>
              <h2 id="problema-titulo2">Uma foto não deveria dar tanto trabalho.</h2>
              <p class="problema-texto">
                  Entre o clique e a publicação, o fluxo tradicional passa por sete etapas espalhadas
                  em vários aplicativos e cada troca é uma nova chance de desistir.
              </p>

              <ol class="fluxo">
                  <li>Câmera</li>
                  <li>Galeria</li>
                  <li>Editor</li>
                  <li>Filtros</li>
                  <li>Música</li>
                  <li>Sincronização</li>
                  <li>Instagram</li>
              </ol>

              <div class="divisor"></div>

              <p class="como-funciona-titulo">COMO FUNCIONA</p>
              <h2>Três passos. Um único fluxo.</h2>

              <ol class="steps-grid">
                  <li>
                      <h3>Capturar</h3>
                      <p>O usuário fotografa normalmente.</p>
                  </li>
                  <li>
                      <h3>Curadoria por IA</h3>
                      <p>A cena é analisada (cor, luz, cenário) e a câmera sugere estilo e música compatíveis.</p>
                  </li>
                  <li>
                      <h3>Compartilhar</h3>
                      <p>Vídeo pronto, direto para a rede social.</p>
                  </li>
              </ol>

              <div class="divisor"></div>

              <p class="ia-titulo">INTELIGÊNCIA ARTIFICIAL</p>
              <h2>Personlização única.</h2>
              <p class="ia-texto">
                  Em vez de vários presets e barras de ajuste, a IA já chega com uma curadoria pronta.
                  O usuário só escolhe o resultado que combina com o momento.
              </p>

              <div class="ia-grid">
                  <div>
                      <h3>🎬 Cinematográfica</h3>
                      <p>Tons contidos e trilha instrumental, para registros que pedem clima de cena.</p>
                  </div>
                  <div>
                      <h3>✨ Minimalista</h3>
                      <p>Cortes limpos e áudio discreto, quando o momento fala por si só.</p>
                  </div>
                  <div>
                      <h3>🌈 Vibrante</h3>
                      <p>Cores saturadas e batida acelerada, para conteúdo feito para viralizar.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default AboutSection
