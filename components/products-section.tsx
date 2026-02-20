"use client"

import Image from "next/image"
import { ShoppingBag, Heart } from "lucide-react"

const products = [
  {
    name: "Cafe Tradicional",
    description: "El clasico sabor colombiano. Notas a caramelo, chocolate y un cuerpo equilibrado que honra nuestras raices.",
    price: "$28.000",
    image: "/images/cafe-tradicional.jpg",
    badge: "Mas Vendido",
  },
  {
    name: "Cafe Organico",
    description: "Cultivado sin quimicos, en armonia con la naturaleza. Suave, limpio y con un perfil frutal unico.",
    price: "$35.000",
    image: "/images/cafe-organico.jpg",
    badge: "Organico",
  },
  {
    name: "Reserva Especial",
    description: "Nuestra seleccion premium de micro-lotes. Complejidad aromatica excepcional, para verdaderas conocedoras.",
    price: "$48.000",
    image: "/images/cafe-reserva.jpg",
    badge: "Edicion Limitada",
  },
]

export default function ProductsSection() {
  return (
    <section id="productos" className="bg-blush py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 fill-rose-pink text-rose-pink" />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-pink">
              {"Nuestros Productos"}
            </p>
            <Heart className="h-4 w-4 fill-rose-pink text-rose-pink" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {"Cafe para cada momento"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Tres expresiones de la misma pasion. Descubre el que habla a tu corazon."}
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-card border border-rose-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-pink/10"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-rose-pink/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-cream">
                  {product.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-rose-pink">
                    {product.price}
                  </span>
                  <button className="flex items-center gap-2 rounded-full bg-rose-pink px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-rose-cream transition-all hover:bg-rose-gold hover:text-rose-dark hover:scale-105">
                    <ShoppingBag className="h-4 w-4" />
                    {"Anadir"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
