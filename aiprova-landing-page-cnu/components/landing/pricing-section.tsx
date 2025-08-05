import { Gift, CheckCircle2, Clock, ShoppingBag, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { planFeatures } from "@/lib/landing-data"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Sua jornada para a aprovação começa aqui
        </h2>
        <p className="mt-4 text-gray-500 text-center">Invista no método comprovado e acelere seus resultados.</p>
        <div className="mt-12 max-w-md lg:max-w-lg">
          <div className="relative p-5 bg-gradient-to-tr from-ai-blue via-sky-500 to-lime-400 rounded-3xl text-white shadow-2xl shadow-sky-500/40 overflow-hidden">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-center space-x-3">
                <Gift className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">CNU - Bloco 6</h3>
                  <p className="text-sm opacity-80">+ PLANO ANUAL AIPROVA</p>
                </div>
              </div>
              <div className="bg-yellow-400 text-deep-blue px-3 py-1 rounded-full text-xs font-bold shadow-lg flex-shrink-0">
                Melhor Valor
              </div>
            </div>

            <div className="my-4">
              <div className="flex items-baseline space-x-3">
                <span className="bg-red-600 text-white px-2 py-0.5 rounded-md text-sm font-semibold">50% OFF</span>
                <span className="text-lg line-through opacity-70">R$ 240,72</span>
              </div>
              <div className="flex items-end my-1">
                <span className="text-5xl font-extrabold tracking-tighter drop-shadow-md">R$ 10,03</span>
                <span className="text-lg font-medium ml-2 mb-1">em 12x</span>
              </div>
              <p className="opacity-80 text-sm">ou R$97 à vista</p>
            </div>

            <div className="bg-blue-950/30 backdrop-blur-sm p-4 rounded-lg space-y-2 border border-white/20">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-lime-300 mr-2 flex-shrink-0" />
                  <span className="font-medium text-xs">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-pink-200/80 text-red-800 font-semibold px-4 py-2 rounded-lg flex items-center justify-center space-x-2 text-sm">
              <Clock className="w-5 h-5" />
              <span>50% OFF Acaba a qualquer momento!</span>
            </div>

            <a href="https://pay.kiwify.com.br/dMFc6KA" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="w-full mt-4 h-12 bg-white text-ai-blue font-bold text-base rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
              >
                <ShoppingBag className="w-5 h-5 mr-3" />
                Comprar agora
              </Button>
            </a>
            <div className="mt-3 flex justify-center items-center space-x-2 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-lime-300" />
              <span>Garantia de 7 dias, compra segura, acesso imediato.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
