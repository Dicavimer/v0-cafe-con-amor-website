import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-coffee.jpg"
        alt="Montanas del Eje Cafetero colombiano al amanecer"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-coffee-dark/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-coffee-gold md:text-base">
          {"100% Colombiano"}
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-coffee-cream sm:text-5xl md:text-6xl lg:text-7xl">
          {"El sabor que nace del corazon"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-coffee-cream/85 md:text-lg">
          {"Cafe 100% colombiano cultivado con fe y dedicacion."}
        </p>

        {/* CTA Button */}
        <a
          href="#productos"
          className="mt-10 inline-block rounded-sm bg-coffee-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-coffee-dark transition-all hover:scale-105 hover:bg-coffee-cream"
        >
          {"Comprar Ahora"}
        </a>

        {/* Bible Verse */}
        <blockquote className="mx-auto mt-12 max-w-lg border-t border-coffee-cream/20 pt-8">
          <p className="font-serif text-base italic text-coffee-cream/70 md:text-lg">
            {'"Probad y ved que el Senor es bueno."'}
          </p>
          <cite className="mt-2 block text-sm font-medium not-italic text-coffee-gold/80">
            {"— Salmo 34:8"}
          </cite>
        </blockquote>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-6 rounded-full border-2 border-coffee-cream/40 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-coffee-cream/60" />
        </div>
      </div>
    </section>
  )
}
