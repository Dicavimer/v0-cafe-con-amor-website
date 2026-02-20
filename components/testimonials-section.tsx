"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Fernanda Lopez",
    location: "Bogota, Colombia",
    text: "Desde que descubri Cafe con Amor, no puedo tomar otro cafe. El sabor es increible y saber que apoya familias cafeteras me llena el corazon.",
    rating: 5,
  },
  {
    name: "Carlos Alberto Mejia",
    location: "Medellin, Colombia",
    text: "La Reserva Especial es simplemente excepcional. Cada taza es una experiencia unica. Se nota el amor y la dedicacion en cada sorbo.",
    rating: 5,
  },
  {
    name: "Ana Patricia Rios",
    location: "Cali, Colombia",
    text: "El cafe organico es mi favorito. Puro, limpio y con un sabor que me transporta a las montanas del Quindio. Bendiciones para esta familia.",
    rating: 5,
  },
  {
    name: "Roberto Sanchez",
    location: "Pereira, Colombia",
    text: "Probe muchas marcas, pero ninguna como Cafe con Amor. La calidad es constante y el servicio es como una visita a la finca de un amigo.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  const next = () => {
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="bg-coffee-dark py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coffee-gold">
            {"Testimonios"}
          </p>
          <h2 className="font-serif text-3xl font-bold text-coffee-cream md:text-4xl lg:text-5xl">
            {"Lo que dicen nuestros clientes"}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mt-16">
          <div className="rounded-sm bg-coffee-cream/5 p-8 text-center backdrop-blur-sm md:p-12">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-coffee-gold text-coffee-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-6">
              <p className="font-serif text-lg leading-relaxed text-coffee-cream/90 md:text-xl">
                {`"${testimonial.text}"`}
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-8">
              <p className="font-serif text-base font-bold text-coffee-cream">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-coffee-cream/60">
                {testimonial.location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-coffee-cream/20 text-coffee-cream/60 transition-colors hover:border-coffee-gold hover:text-coffee-gold"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-8 bg-coffee-gold"
                      : "w-2 bg-coffee-cream/30 hover:bg-coffee-cream/50"
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-coffee-cream/20 text-coffee-cream/60 transition-colors hover:border-coffee-gold hover:text-coffee-gold"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
