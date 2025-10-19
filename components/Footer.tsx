export default function Footer() {
  return (
    <footer className="flex justify-center bg-cyan-800 text-white py-4">
      <div className="w-11/12 flex flex-col items-center gap-2">
        <h1 id="contato" className="text-lg md:text-xl font-semibold">Contato:</h1>
        <a
          href="mailto:projeto.axioma@impatech.edu.br"
          className="text-sm md:text-base hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          projeto.axioma@impatech.edu.br
        </a>
      </div>
    </footer>
  );
}
