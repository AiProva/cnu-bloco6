import Image from "next/image"
import { Check } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna da Esquerda (Texto e Imagem para Mobile) */}
        <div className="flex flex-col space-y-4 md:order-1">
          {/* Título com o logo do WhatsApp - Ajustado para quebrar linha se necessário */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex flex-wrap items-center justify-center md:justify-start text-center md:text-left">
            <span className="whitespace-nowrap">Estude</span>
            <span className="text-whatsapp-green ml-2 whitespace-nowrap">Direto no WhatsApp</span>
            <Image
              src="/whatsapp-logo.webp"
              alt="WhatsApp Logo"
              width={32}
              height={32}
              className="ml-3 flex-shrink-0"
            />
          </h2>

          {/* Imagem para Mobile (visível apenas em telas pequenas) */}
          <div className="flex justify-center md:hidden">
            <Image
              src="/aiprova-step-by-step.svg"
              alt="Passo a Passo AiProva"
              width={600}
              height={960}
              className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Resto do texto */}
          <p className="text-gray-600">
            Esqueça aplicativos complicados ou plataformas difíceis de usar. Todo o seu estudo acontece diretamente no{" "}
            <span className="font-bold text-whatsapp-green">WhatsApp</span>, o app que você já usa todos os dias.
          </p>
          <p className="text-gray-600">
            Nossa <span className="font-bold text-deep-blue">inteligência artificial</span> calcula exatamente quando
            você deve revisar cada flashcard e envia diretamente no seu{" "}
            <span className="font-bold text-whatsapp-green">WhatsApp</span>. Sem apps complicados, sem precisar criar
            cronogramas.
          </p>
          <ul className="space-y-3 text-gray-700 pt-2">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-deep-blue">Estude em qualquer lugar:</strong> no{" "}
                <span className="text-whatsapp-green font-semibold">ônibus</span>, no{" "}
                <span className="text-whatsapp-green font-semibold">intervalo do almoço</span> ou em qualquer{" "}
                <span className="text-whatsapp-green font-semibold">tempo livre</span>.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-deep-blue">Sessões rápidas de 5-10 minutos</strong> que se encaixam na sua
                rotina e <span className="text-whatsapp-green font-semibold">aceleram sua aprovação</span>.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong className="text-deep-blue">Revisão automatizada:</strong> responda no WhatsApp e deixe que o
                sistema <span className="text-whatsapp-green font-semibold">ajuste seu plano de estudos</span>.
              </span>
            </li>
          </ul>
        </div>

        {/* Imagem para Desktop (visível apenas em telas maiores) */}
        <div className="flex justify-center hidden md:order-2 md:flex">
          <Image
            src="/aiprova-step-by-step.svg"
            alt="Passo a Passo AiProva"
            width={600}
            height={960}
            className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
