import Image from "next/image"
import { Hand, Sun, Flame, Shield, Heart } from "lucide-react"

const steps = [
  {
    icon: Hand,
    title: "Recolección Manual",
    description: "Cada cereza de café es seleccionada a mano en su punto óptimo de madurez, garantizando la mejor calidad.",
  },
  {
    icon: Sun,
    title: "Secado Natural",
    description: "Nuestros granos se secan al sol en camas africanas, desarrollando sabores complejos y auténticos.",
  },
  {
    icon: Flame,
    title: "Tostión Artesanal",
    description: "Cada lote se tuesta con precisión en pequeñas cantidades, resaltando las notas únicas de origen.",
  },
  {
    icon: Shield,
    title: "Control de Calidad",
    description: "Catadores expertos prueban cada lote para asegurar que solo lo mejor llega a tu taza.",
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-4 w-4 fill-rose-pink text-rose-pink" />
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-pink">
                {"Nuestro Proceso"}
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {"Del campo a tu taza"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {"Un proceso cuidadoso que respeta la tradición y garantiza la excelencia en cada grano."}
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose-light text-rose-pink">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-gold">
                        {`0${index + 1}`}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl lg:aspect-[4/5]">
            <Image
              src="/images/coffee-process.jpg"
              alt="Manos elegantes con granos de café"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-rose-pink/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
