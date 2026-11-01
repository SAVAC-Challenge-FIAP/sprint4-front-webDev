import favicon from '../assets/favicon.png'

const Footer = () => {
  return (
    <footer className="border-t border-border px-5 py-10 text-center text-subtle">
      <img className="mx-auto w-[30px]" src={favicon} alt=""/>
      <span className="my-[5px] block text-base font-bold tracking-[1px]">SYNESTHESIA</span>
      <p className="mb-[15px]">FIAP Eng. Software Challenge 2026</p>
    </footer>
  )
}

export default Footer
