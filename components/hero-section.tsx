import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-coffee.jpg"
        alt="Cafe estetico con flores y decoracion femenina"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Soft Pink Overlay */}
      <div className="absolute inset-0 bg-rose-dark/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-6 mt-8 text-sm font-medium uppercase tracking-[0.3em] text-rose-gold md:mt-12 md:text-base">
          {"100% Colombiano"}
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-rose-cream sm:text-5xl md:text-6xl lg:text-7xl">
          {"El sabor que nace del corazon"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-rose-cream/85 md:text-lg">
          {"Cafe 100% colombiano cultivado con fe, amor y dedicacion."}
        </p>

        {/* CTA Button */}
        <a
          href="#productos"
          className="mt-10 inline-block rounded-full bg-rose-pink px-10 py-4 text-sm font-bold uppercase tracking-widest text-rose-cream transition-all hover:scale-105 hover:bg-rose-gold hover:text-rose-dark"
        >
          {"Descubre Nuestro Cafe"}
        </a>

        {/* Bible Verse */}
        <blockquote className="mx-auto mt-12 max-w-xl border-t border-rose-cream/20 pt-8 text-center">
          <p className="font-serif text-lg italic leading-relaxed text-rose-cream/80 md:text-xl">
            {'"Encomienda a Jehova tus obras, y tus pensamientos seran afirmados."'}
          </p>
          <cite className="mt-3 block text-sm font-semibold uppercase tracking-widest not-italic text-rose-gold">
            {"— Proverbios 16:3"}
          </cite>
        </blockquote>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-6 rounded-full border-2 border-rose-cream/40 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-rose-cream/60" />
        </div>
      </div>
    </section>
  )
}
