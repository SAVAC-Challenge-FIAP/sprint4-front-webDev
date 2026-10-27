const AudienceSection = () => {
  return (
      <section id="publico-alvo" class="publico-section">
          <div class="publico-grid">
              <div class="publico-info">
                  <p class="publico-titulo">PÚBLICO‑ALVO</p>
                  <h2 id="publico-titulo2">Estudantes full‑time</h2>
                  <p class="publico-texto">
                      Estão sempre entre estudos e vida social, quase sempre conectados. O
                      telefone é a ferramenta que mantém essa rotina conectada, produtiva e presente. A câmera é onde essa rotina vira memória e conteúdo.
                  </p>
                  <ul class="publico-lista">
                      <li>Rotina corrida entre aula, trabalho e vida social</li>
                      <li>Comunicam sua identidade através do que postam</li>
                      <li>Não têm tempo (nem paciência) para editar manualmente</li>
                      <li>Consomem e produzem vídeos curtos</li>
                  </ul>
              </div>

              <aside class="persona-aside">
                  <p class="persona-titulo">PERSONA</p>
                  <h3>Estudante Full‑time</h3>
                  <dl class="persona-texto">
                      <div><dt>Objetivo</dt><dd>Registrar e compartilhar sem perder tempo</dd></div>
                      <div><dt>Frustração</dt><dd>Editar em apps separados até perder a vontade de postar</dd></div>
                      <div><dt>O que valoriza</dt><dd>Rapidez, estética consistente e presença nas redes</dd></div>
                  </dl>
              </aside>
          </div>

          <div class="section-inner">
              <div class="grid-cards who-grid">
                  <div>
                      <h3>🎓 Estudantes</h3>
                      <p>Momentos de faculdade, amigos, viagens e eventos que merecem ser registrados sem esforço</p>
                  </div>
                  <div>
                      <h3>📱 Geração Z</h3>
                      <p>Acostumados com vídeo curto e experiências rápidas, sem terem que fazer muito.</p>
                  </div>
                  <div>
                      <h3>🎨 Criadores casuais</h3>
                      <p>Querem produzir conteúdo bonito no dia a dia com facilidade.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default AudienceSection
