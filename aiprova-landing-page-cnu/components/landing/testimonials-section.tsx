import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/lib/landing-data"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-1 text-star-gold">
          {" "}
          {/* Cor alterada para dourado */}
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
          <Star className="w-8 h-8 fill-current" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
          Resultados que falam por si: veja os relatos
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-100" />
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-ai-blue">{testimonial.title}</h3>
                <p className="text-gray-600 mt-4 text-sm">{testimonial.text}</p>
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="ml-4 font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
