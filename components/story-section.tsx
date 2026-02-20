import Image from "next/image"

export default function StorySection() {
  return (
    <section id="historia" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/coffee-family.jpg"
              alt="Familia cafetera colombiana recolectando cafe"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-coffee-dark/10" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coffee-gold">
              {"Nuestra Historia"}
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {"Tradicion, fe y amor por el cafe"}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {"Nacimos en las montanas del Eje Cafetero, donde cada grano cuenta una historia de generaciones dedicadas al cultivo del mejor cafe del mundo."}
              </p>
              <p>
                {"Nuestra familia lleva decadas seleccionando a mano los mejores granos, respetando la tierra y trabajando con el amor que solo puede nacer de la fe y la gratitud."}
              </p>
              <p>
                {"Cada taza de Cafe con Amor lleva consigo el esfuerzo honesto de manos campesinas y la bendicion de una tierra generosa."}
              </p>
            </div>

            {/* Bible Verse */}
            <blockquote className="mt-8 border-l-4 border-coffee-gold pl-5">
              <p className="font-serif text-lg italic text-foreground">
                {'"Todo lo que hagan, haganlo de corazon."'}
              </p>
              <cite className="mt-2 block text-sm font-medium not-italic text-coffee-gold">
                {"— Colosenses 3:23"}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
