import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <Introduction/>

      {/* Equipe */}
      <div className=" h-screen-navigation flex flex-col justify-between items-center bg-cyan-600 text-white pb-8">
        <div className="w-11/12">
          <div className="flex flex-col pt-12 pl-20 mb-8">
            <h1 className="text-6xl">EQUIPE</h1>
          </div>
          <div className="flex justify-between items-top pl-20 pr-36 w-full">
            <div className="border flex items-center justify-center w-4xl h-72">
              IMAGEM DA EQUIPE
            </div>

            <div className="flex flex-col items-center justify-center gap-4 h-72">
              <div className="border rounded-3xl flex items-center justify-center w-sm h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-lg">
                  PROF. ORIENTADOR E PESQUISADOR DO IMPA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-scroll w-11/12 justify-start">
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
            <div className="border rounded-3xl flex items-center justify-center h-64">
              IMAGEM DO PROFESSOR
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl">PROFESSOR</p>
              <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brasil vs Axioma */}
      <div className=" h-screen-navigation flex justify-between text-cyan-600 bg-gradient-to-r from-cyan-600 via-cyan-300 to-white">
        <div className="flex flex-col w-1/2 justify-evenly items-center pt-10 text-white">
          <h1 className="text-6xl">A REALIDADE NO BRASIL</h1>
          <div className="flex flex-col gap-10 w-72">
            <p>
              Alunos com facilidade em matemática geralmente encontram barreiras
              no desenvolvimento dessa habilidade, e acabam perdendo interesse
              na matéria.
            </p>
            <p>
              Há poucas instituições que cuidam dessa necessidade, e a maior
              delas é a OBMEP, com o PIC Jr, Programa de Iniciação Científica
              Júnior.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/2 justify-evenly items-center pt-10">
          <h1 className="text-6xl">O PROJETO AXIOMA</h1>
          <div className="flex flex-col gap-10 w-72">
            <p>
              Visamos fomentar o interesse na matemática, ajudando jovens
              talentosos na disciplina, selecionados entre alunos do 9o. ano do
              EF à 3a. série do EM.
            </p>
            <p>
              Nossa equipe oferecerá, a estes alunos, aulas avançadas gratuitas,
              preparando e apresentando-os a conteúdos de matemática geralmente
              introduzidos apenas na universidade.
            </p>
          </div>
        </div>
      </div>

      {/* As aulas */}
      <div className=" h-screen-navigation flex justify-between text-cyan-600 bg-gradient-to-l from-cyan-600 via-cyan-300 to-white">
        <div className="flex flex-col w-1/2 justify-evenly items-center pt-10">
          <h1 className="text-6xl">AULAS</h1>
          <div className="flex flex-col gap-10 w-72">
            <p>
              As aulas serão ministradas por nós, alunos da equipe Axioma, e
              pelo coordenador do projeto, Prof. PROFESSOR Gripp B..
            </p>
            <p>
              Este ano, oferecemos aulas avulsas. A partir do ano que vem,
              oferecemos cursos completos.
            </p>
            <p>
              O desenvolvimento do curso dependerá do tempo que os alunos
              necessitarem para internalizar, apreender os conteúdos dados.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/2 justify-evenly items-center pt-10 text-white">
          <p>HORÁRIO: SÁBADOS, DAS 8H-12H</p>
          <p>LOCAL: AV. PROFESSOR PEREIRA REIS, 76 - IMPA TECH</p>
          <p>DURAÇÃO: ATÉ O FIM DO ENSINO MÉDIO</p>
        </div>
      </div>

      {/* Cursos */}
      <div className=" h-screen-navigation flex flex-col justify-between items-center bg-cyan-600 text-white pb-8">
        <div className="flex flex-col items-start w-11/12 mt-8">
          <h1 className="text-2xl">AULAS AVULSAS</h1>
          <p className="text-base">
            Serão ministradas este ano, para despertar o interesse dos alunos e
            para prepará-los para os cursos de 2026, nivelando a turma em
            conhecimento.
          </p>
          <div className="flex gap-2 overflow-x-scroll justify-start max-w-full">
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-11/12">
          <h1 className="text-2xl">CURSOS</h1>
          <p className="text-base">
            Destinados a construir conhecimento desafiador, sólido e
            possivelmente útil para os alunos.
          </p>
          <div className="flex gap-2 overflow-x-scroll justify-start max-w-full">
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-72 min-w-60 max-w-72">
              <div className="border rounded-3xl flex items-center justify-center h-64">
                IMAGEM DO PROFESSOR
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-2xl">PROFESSOR</p>
                <p className="text-sm">PROF. ORIENTADOR E PESQUISADOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
