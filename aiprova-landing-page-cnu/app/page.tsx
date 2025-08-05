import dynamic from "next/dynamic"
import { HeroSection } from "@/components/landing/hero-section"
import { DetailsSection } from "@/components/landing/details-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { MethodSection } from "@/components/landing/method-section"
import { Header } from "@/components/layout/header" // Importar o novo componente Header

// Carregamento dinâmico para componentes "abaixo da dobra".
// O `loading` prop com um placeholder de altura mínima é a chave para eliminar o CLS.
const DynamicTestimonialsSection = dynamic(() => import("@/components/landing/testimonials-section"), {
  loading: () => <div className="h-[640px] w-full" />,
})
const DynamicPricingSection = dynamic(() => import("@/components/landing/pricing-section"), {
  loading: () => <div className="h-[880px] w-full" />,
})
const DynamicGuaranteeSection = dynamic(() => import("@/components/landing/guarantee-section"), {
  loading: () => <div className="h-[450px] w-full" />,
})
const DynamicFooter = dynamic(() => import("@/components/landing/footer"), {
  loading: () => <div className="h-[250px] w-full" />,
})

export default function AiProvaLandingPage() {
  return (
    <div className="bg-white text-deep-blue font-sans">
      <Header /> {/* Adicionando a barra de topo aqui */}
      <main>
        {/* Componentes renderizados no servidor, acima da dobra */}
        <HeroSection />
        <DetailsSection />
        <HowItWorksSection />
        <MethodSection />

        {/* Componentes carregados sob demanda com placeholders para evitar CLS */}
        <DynamicTestimonialsSection />
        <DynamicPricingSection />
        <DynamicGuaranteeSection />
      </main>
      <DynamicFooter />
    </div>
  )
}
