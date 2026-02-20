"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "Nuestra Historia" },
  { href: "#productos", label: "Productos" },
  { href: "#analytics", label: "Ventas" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rose-cream/90 backdrop-blur-md border-b border-rose-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <Heart className="h-6 w-6 fill-rose-pink text-rose-pink" />
            <span className="font-serif text-xl font-bold tracking-wide text-rose-dark lg:text-2xl">
              {"Cafe con Amor"}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-mauve transition-colors hover:text-rose-pink"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              className="relative text-mauve transition-colors hover:text-rose-pink"
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mauve transition-colors hover:text-rose-pink lg:hidden"
              aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-rose-light bg-rose-cream/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-rose-light/50 py-3 text-sm font-medium tracking-wide text-mauve transition-colors hover:text-rose-pink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
