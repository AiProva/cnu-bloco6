import Image from "next/image"
import { CONCURSO_NOME, FLASHCARD_COUNT_TITLE, HERO_SUBTITLE } from "@/lib/landing-data"

export function HeroSection() {
  return (
    <section className="text-center pt-12 md:pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/cnu-logo.svg"
          alt="Logo CNU"
          width={180}
          height={90}
          className="mx-auto mb-8"
          priority // `priority` é crucial para a imagem principal (LCP)
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Estude com <span className="text-ai-blue">{FLASHCARD_COUNT_TITLE}</span> flashcards prontos{" "}
          <span className="whitespace-nowrap">
            focados no <span className="text-ai-blue">{CONCURSO_NOME}</span>
          </span>{" "}
          e acelere a sua aprovação
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">{HERO_SUBTITLE}</p>
      </div>
    </section>
  )
}
