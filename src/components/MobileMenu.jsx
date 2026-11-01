const links = [
  ['#solucao', 'A Solução'],
  ['#publico-alvo', 'Público‑Alvo'],
  ['#galeria', 'Galeria'],
  ['#equipe', 'Nossa Equipe'],
  ['#contato', 'Contato'],
]

const MobileMenu = ({ isOpen, onToggle, onClose }) => (
  <>
    <button
      aria-controls="mobile-nav"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      className="hidden h-10 w-10 items-center justify-center rounded-md border border-border text-copy max-[640px]:flex"
      onClick={onToggle}
      type="button"
    >
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    {isOpen && (
      <nav
        className="absolute left-0 right-0 top-full flex flex-col border-b border-border bg-page px-[5%] py-3 shadow-lg min-[641px]:hidden"
        id="mobile-nav"
      >
        {links.map(([href, label]) => (
          <a
            className="py-3 text-sm text-muted hover:text-accent"
            href={href}
            key={href}
            onClick={onClose}
          >
            {label}
          </a>
        ))}
      </nav>
    )}
  </>
)

export default MobileMenu