import Image from "next/image"
import { Heart } from "lucide-react"

export default function FaithSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Image */}
      <Image
        src="/images/coffee-field-sunrise.jpg"
        alt="Amanecer rosa sobre campos de cafe colombiano"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-rose-dark/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Heart className="h-4 w-4 fill-rose-gold text-rose-gold" />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-gold">
            {"Gratitud y Fe"}
          </p>
          <Heart className="h-4 w-4 fill-rose-gold text-rose-gold" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-rose-cream md:text-4xl lg:text-5xl">
          {"Bendecidos por la tierra colombiana"}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-rose-cream/80 md:text-lg">
          {"Cada grano que cultivamos es un regalo de Dios y de esta tierra generosa. Trabajamos con gratitud, sabiendo que la bendicion del campo colombiano fluye a traves de cada taza que compartimos con ustedes."}
        </p>

        {/* Decorative Divider */}
        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-rose-gold/40" />
          <Heart className="h-4 w-4 fill-rose-gold text-rose-gold" />
          <div className="h-px w-16 bg-rose-gold/40" />
        </div>

        {/* Bible Verse */}
        <blockquote className="mt-10">
          <p className="font-serif text-xl italic text-rose-cream md:text-2xl lg:text-3xl">
            {'"Bendecire el fruto de tu tierra."'}
          </p>
          <cite className="mt-4 block text-sm font-bold not-italic tracking-wider text-rose-gold">
            {"— Deuteronomio 28:4"}
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
