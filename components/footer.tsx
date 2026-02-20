import { Coffee, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-coffee-dark text-coffee-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Coffee className="h-7 w-7 text-coffee-gold" />
              <span className="font-serif text-xl font-bold tracking-wide">
                {"Cafe con Amor"}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-coffee-cream/60">
              {"Cafe colombiano cultivado con fe y dedicacion. Cada taza lleva el amor de nuestras montanas."}
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee-cream/20 text-coffee-cream/60 transition-colors hover:border-coffee-gold hover:text-coffee-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee-cream/20 text-coffee-cream/60 transition-colors hover:border-coffee-gold hover:text-coffee-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee-cream/20 text-coffee-cream/60 transition-colors hover:border-coffee-gold hover:text-coffee-gold"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-gold">
              {"Navegacion"}
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#historia", label: "Nuestra Historia" },
                { href: "#productos", label: "Productos" },
                { href: "#proceso", label: "Nuestro Proceso" },
                { href: "#testimonios", label: "Testimonios" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-coffee-cream/60 transition-colors hover:text-coffee-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-gold">
              {"Productos"}
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Cafe Tradicional",
                "Cafe Organico",
                "Reserva Especial",
                "Suscripciones",
                "Regalos",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#productos"
                    className="text-sm text-coffee-cream/60 transition-colors hover:text-coffee-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coffee-gold">
              {"Contacto"}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coffee-gold" />
                <span className="text-sm text-coffee-cream/60">
                  {"Eje Cafetero, Quindio, Colombia"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coffee-gold" />
                <span className="text-sm text-coffee-cream/60">
                  {"+57 (6) 742 0000"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coffee-gold" />
                <span className="text-sm text-coffee-cream/60">
                  {"hola@cafeconamor.co"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-coffee-cream/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="font-serif text-base italic text-coffee-cream/50">
              {"Cafe con proposito, cafe con amor."}
            </p>
            <p className="text-xs text-coffee-cream/40">
              {`© ${new Date().getFullYear()} Cafe con Amor. Todos los derechos reservados.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
