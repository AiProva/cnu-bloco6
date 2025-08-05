import { Check, GitCompareArrows } from "lucide-react"
import Image from "next/image"

export function MethodSection() {
  return (
    <section id="method" className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">O Segredo dos Aprovados em Concursos Públicos</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          A diferença não está apenas nas horas de estudo, mas na inteligência do método. Compare o jeito tradicional
          com o jeito AiProva.
        </p>
        <div className="mt-16 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            <div className="bg-gray-100 border border-gray-200 p-8 rounded-xl shadow-md text-left h-full flex flex-col transition-all duration-300 hover:shadow-none">
              <h3 className="text-xl font-bold text-gray-500 mb-4">O Jeito Tradicional</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Criar resumos de qualidade do zero é um processo lento e cansativo. Você gastaria semanas digitando
                leis, resumindo conteúdo e formulando perguntas... tempo que poderia ser usado para estudar.
              </p>
              <div className="mt-auto bg-red-100/50 p-4 rounded-md">
                <p className="font-semibold text-red-700">
                  <span className="font-bold">Resultado:</span> Semanas de atraso na preparação e risco de esquecer o
                  conteúdo por falta de revisão programada.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-ai-blue to-sky-blue p-8 rounded-xl text-white shadow-[0_8px_30px_rgb(0,151,237,0.5)] text-left h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgb(0,151,237,0.6)]">
              <div className="absolute top-0 right-0 -mt-4 -mr-2">
                <div className="bg-whatsapp-green text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center shadow-lg">
                  <Image
                    src="/whatsapp-logo.webp"
                    alt="WhatsApp Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 mr-1.5"
                  />
                  No WhatsApp
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">O Jeito AiProva</h3>
              <p className="opacity-90 mb-6 flex-grow">
                Com a repetição espaçada e nossos flashcards prontos, você foca no que importa: aprender e memorizar.
              </p>
              <ul className="space-y-3 mt-auto text-base">
                <li className="flex items-center">
                  <Check className="w-6 h-6 bg-white/30 text-white rounded-full p-1 mr-3 flex-shrink-0" />
                  <span>Memorize leis e fórmulas de forma permanente.</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 bg-white/30 text-white rounded-full p-1 mr-3 flex-shrink-0" />
                  <span>Acelere a revisão de todo o edital.</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-6 h-6 bg-white/30 text-white rounded-full p-1 mr-3 flex-shrink-0" />
                  <span>Receba tudo pronto e comece a estudar hoje.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <div className="bg-white rounded-full p-3 shadow-2xl border-4 border-white ring-4 ring-ai-blue">
              <GitCompareArrows className="w-10 h-10 text-ai-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
