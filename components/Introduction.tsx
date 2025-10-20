export default function Introduction() {
  return (
    <section className="h-screen-navigation flex flex-col justify-between items-center text-cyan-600">
      <div className="w-full py-6 flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-6xl text-center wrap-anywhere">PROJETO AXIOMA</h1>
        </div>
        <div className="border w-11/12 flex items-center justify-center min-h-48 md:min-h-1/2">
          IMAGEM DO PROJETO
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 w-11/12 pb-6">
        <div className="border w-11/12 flex items-center justify-center h-24">
          Logo IMPATECH
        </div>
        <div className="border w-11/12 flex items-center justify-center h-24">
          Logo IMPA
        </div>
      </div>
    </section>
  );
}
