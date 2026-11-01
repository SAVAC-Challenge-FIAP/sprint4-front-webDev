const ContactSection = () => {
  return (
    <section className="mx-auto grid w-full max-w-[1180px] grid-cols-[0.9fr_1.1fr] gap-[50px] px-[3%] py-20 max-[1024px]:grid-cols-1 max-[640px]:px-[5%] max-[640px]:py-[55px]" id="contato">
      <div>
        <p className="mb-[15px] text-xs tracking-[2px] text-accent uppercase">CONTATO</p>
        <h2 className="mb-[15px] max-w-[500px] text-[clamp(26px,3vw,37px)]" id="contato-titulo2">Fale com a equipe</h2>
        <p className="mb-[15px] max-w-[650px] text-base text-muted">
          Dúvidas, sugestões ou interesse em saber mais sobre o Synesthesia? Preencha o
          formulário ou fale diretamente com a gente.
        </p>
        <address className="not-italic text-muted">
          <p className="mb-[15px]"><strong>E-mail:</strong> <a className="text-accent" href="mailto:savac.fiap@gmail.com">savac.fiap@gmail.com</a></p>
          <p className="mb-[15px]"><strong>FIAP Challenge 2026</strong></p>
        </address>

        <ul className="flex gap-5">
          <li><i className="fi fi-brands-github text-accent"></i> <a className="text-sm text-accent" href="https://github.com/SAVAC-Challenge-FIAP">GitHub</a></li>
          <li><i className="fi fi-brands-instagram text-accent"></i> <a className="text-sm text-accent" href="https://www.instagram.com/synesthesia.savac/?utm_source=ig_web_button_share_sheet">Instagram</a></li>
        </ul>
      </div>

      <form className="grid gap-[18px] rounded-[18px] border border-border bg-card p-[30px] max-[640px]:p-5">
        <div className="grid gap-[6px]">
          <label className="text-[13px] text-muted" htmlFor="nome">Nome</label>
          <input className="w-full rounded-[10px] border border-border bg-page p-3 font-sans text-[15px] text-copy focus:border-accent focus:outline-none" type="text" id="nome" name="nome" required />
        </div>
        <div className="grid gap-[6px]">
          <label className="text-[13px] text-muted" htmlFor="email">E-mail</label>
          <input className="w-full rounded-[10px] border border-border bg-page p-3 font-sans text-[15px] text-copy focus:border-accent focus:outline-none" type="email" id="email" name="email" required />
        </div>
        <div className="grid gap-[6px]">
          <label className="text-[13px] text-muted" htmlFor="mensagem">Mensagem</label>
          <textarea className="w-full rounded-[10px] border border-border bg-page p-3 font-sans text-[15px] text-copy focus:border-accent focus:outline-none" id="mensagem" name="mensagem" rows="4" placeholder="isso não funciona, tá? meramente ilustrativo" required></textarea>
        </div>
        <button className="w-fit cursor-pointer rounded-[30px] border-0 bg-accent-dark px-[25px] py-[14px] font-bold text-copy hover:bg-accent-dark-hover" type="submit">Enviar mensagem</button>
      </form>
    </section>
  )
}

export default ContactSection
