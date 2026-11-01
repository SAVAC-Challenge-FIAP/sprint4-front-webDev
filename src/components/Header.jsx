import { useState } from 'react'
import favicon from '../assets/favicon.png'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] flex min-h-[50px] items-center justify-between gap-5 border-b border-border bg-page/90 px-[3%] py-[10px] backdrop-blur-[10px] max-[640px]:relative">
      <a className="flex items-center gap-[10px]" href="#topo">
        <img className="h-8 w-8" src={favicon} alt="" />
        <span className="text-base font-bold tracking-[1px]">SYNESTHESIA</span>
      </a>

      <nav className="flex flex-wrap gap-5 max-[640px]:hidden" id="navMenu">
        <a className="text-sm text-muted hover:text-accent" href="#solucao">A Solução</a>
        <a className="text-sm text-muted hover:text-accent" href="#publico-alvo">Público‑Alvo</a>
        <a className="text-sm text-muted hover:text-accent" href="#analise">Descobrir músicas</a>
        <a className="text-sm text-muted hover:text-accent" href="#galeria">Galeria</a>
        <a className="text-sm text-muted hover:text-accent" href="#equipe">Nossa Equipe</a>
        <a className="text-sm text-muted hover:text-accent" href="#contato">Contato</a>
      </nav>
      <MobileMenu
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((open) => !open)}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  )
}

export default Header
