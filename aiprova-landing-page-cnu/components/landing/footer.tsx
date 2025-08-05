import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/aiprova-logo-footer.svg" // Usando o novo logo da AiProva
                alt="Logo AiProva"
                width={120}
                height={60}
                className="h-auto" // Removido filter invert, pois o logo já é branco
              />
            </a>
            <p className="mt-4 text-sm max-w-xs">
              &copy; {new Date().getFullYear()} AiProva. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="font-bold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://aiprova.com.br/termos-de-uso" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="https://aiprova.com.br/politicas-de-privacidade"
                    className="hover:text-white transition-colors"
                  >
                    Políticas de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Redes Sociais</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/ai.prova/"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/108583290/"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
