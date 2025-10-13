import Link from "next/link";   

export default function Navigation() {
  return (
    <nav className="bg-cyan-900 w-full h-navigation flex justify-between items-center p-8 fixed text-white">
      <Link href="/">AXIOMA</Link>
      <div className="flex gap-4 justify-between">
        <a href="https://impatech.edu.br/institucional/conheca-o-impa-tech/">
          Sobre o IMPA Tech
        </a>
        <Link href="/sobre">Sobre o Axioma</Link>
        <Link href="/regulamento">Regulamento</Link>
        <Link href="/contato">Contato</Link>
        <Link href="inscricao">Inscreva-se</Link>
      </div>
    </nav>
  );
}
