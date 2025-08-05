import { ShieldCheck } from "lucide-react"

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Garantia de 7 dias</h2>
          <div className="flex justify-center items-center gap-3 mt-4">
            <ShieldCheck className="w-8 h-8 text-ai-blue" />
            <h3 className="text-xl md:text-2xl font-bold">Garantia Total - Sem Riscos Para Você</h3>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Sabemos que você já tentou outros métodos e pode estar cético. Por isso, oferecemos uma garantia simples e
            direta: Experimente o AiProva por 7 dias completos. Se por qualquer motivo você sentir que não é para você,
            basta nos enviar um email e devolvemos 100% do seu dinheiro sem fazer nenhuma pergunta. Não queremos que
            você fique com o AiProva se não estiver completamente satisfeito.
          </p>
          <p className="mt-3 font-semibold text-deep-blue">
            Sua aprovação é nossa prioridade. Sem riscos, sem pegadinhas.
          </p>
        </div>
      </div>
    </section>
  )
}
