import Image from "next/image" // Importar Image para usar o SVG
import { Info } from "lucide-react" // Manter Info se ainda for usado
import { FLASHCARD_COUNT } from "@/lib/landing-data"
import { MateriasAccordion } from "./materias-accordion"

export function DetailsSection() {
  return (
    <section id="details" className="py-24 md:py-32 px-4">
      {" "}
      {/* Aumentado o padding vertical novamente */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Coluna da Esquerda */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-ai-blue p-3 rounded-lg">
              {/* Substituindo Sparkles pelo novo SVG */}
              <Image
                src="/checkaiprova.svg"
                alt="Check AiProva"
                width={24} // Ajuste o tamanho conforme necessário
                height={24} // Ajuste o tamanho conforme necessário
                className="w-6 h-6 text-white" // Mantendo as classes de tamanho para consistência
              />
            </div>
            <h2 className="text-2xl font-bold text-ai-blue">O Poderosíssimo AiProva</h2>
          </div>
          <h3 className="text-2xl font-semibold text-deep-blue">
            Flashcards para o Bloco Temático 6: Desenvolvimento Socieconômico
          </h3>
          <h1 className="text-5xl font-extrabold text-ai-blue">+ de {FLASHCARD_COUNT} cards para seus estudos!</h1>
          <p className="text-lg text-gray-600">para você arrebentar no CNU!</p>
          <div className="bg-blue-50 border-l-4 border-ai-blue p-4 rounded-r-lg">
            <div className="flex">
              <Info className="w-5 h-5 text-ai-blue mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                O método de repetição espaçada é cientificamente comprovado como o mais eficaz para transferir
                informações da memória de curto prazo para a memória de longo prazo. Estudos mostram que aumenta a
                retenção em até 95% comparado aos métodos tradicionais.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da Direita com o componente interativo */}
        <div className="bg-gray-50 p-4 rounded-2xl shadow-md">
          <MateriasAccordion />
        </div>
      </div>
    </section>
  )
}
