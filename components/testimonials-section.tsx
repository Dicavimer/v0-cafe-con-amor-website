"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react"

const testimonials = [
  {
    name: "Maria Fernanda Lopez",
    location: "Bogotá, Colombia",
    text: "Desde que descubrí Café con Amor, no puedo tomar otro café. El sabor es increíble y saber que apoya familias cafeteras me llena el corazón.",
    rating: 5,
  },
  {
    name: "Valentina Mejía",
    location: "Medellín, Colombia",
    text: "La Reserva Especial es simplemente excepcional. Cada taza es una experiencia única. Se nota el amor y la dedicación en cada sorbo.",
    rating: 5,
  },
  {
    name: "Ana Patricia Ríos",
    location: "Cali, Colombia",
    text: "El café orgánico es mi favorito. Puro, limpio y con un sabor que me transporta a las montañas del Quindío. Bendiciones para esta familia.",
    rating: 5,
  },
  {
    name: "Camila Sánchez",
    location: "Pereira, Colombia",
    text: "Probé muchas marcas, pero ninguna como Café con Amor. La calidad es constante y el empaque es precioso. Un regalo perfecto.",
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
    <section id="testimonios" className="bg-rose-dark py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 fill-rose-gold text-rose-gold" />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-gold">
              {"Testimonios"}
            </p>
            <Heart className="h-4 w-4 fill-rose-gold text-rose-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-rose-cream md:text-4xl lg:text-5xl">
            {"Lo que dicen nuestras clientas"}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="mt-16">
          <div className="rounded-2xl bg-rose-cream/8 p-8 text-center backdrop-blur-sm md:p-12 border border-rose-cream/10">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-rose-gold text-rose-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-6">
              <p className="font-serif text-lg leading-relaxed text-rose-cream/90 md:text-xl">
                {`"${testimonial.text}"`}
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-8">
              <p className="font-serif text-base font-bold text-rose-cream">
                {testimonial.name}
              </p>
              <p className="mt-1 text-sm text-rose-cream/60">
                {testimonial.location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-cream/20 text-rose-cream/60 transition-colors hover:border-rose-gold hover:text-rose-gold"
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
                      ? "w-8 bg-rose-pink"
                      : "w-2 bg-rose-cream/30 hover:bg-rose-cream/50"
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-cream/20 text-rose-cream/60 transition-colors hover:border-rose-gold hover:text-rose-gold"
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
