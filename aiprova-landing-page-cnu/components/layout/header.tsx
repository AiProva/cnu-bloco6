import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-ai-blue py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <Image
          src="/aiprova-logo-header.svg"
          alt="Logo AiProva"
          width={150} // Ajuste o tamanho conforme necessário para o cabeçalho
          height={30} // Ajuste o tamanho conforme necessário
          className="h-auto"
        />
      </div>
    </header>
  )
}
