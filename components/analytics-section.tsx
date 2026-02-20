"use client"

import { Heart, TrendingUp, DollarSign, Package, Users } from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// --- Data ---

const monthlySales = [
  { month: "Ene", tradicional: 120, organico: 85, reserva: 45 },
  { month: "Feb", tradicional: 135, organico: 92, reserva: 52 },
  { month: "Mar", tradicional: 148, organico: 105, reserva: 60 },
  { month: "Abr", tradicional: 160, organico: 110, reserva: 55 },
  { month: "May", tradicional: 175, organico: 125, reserva: 70 },
  { month: "Jun", tradicional: 190, organico: 140, reserva: 78 },
  { month: "Jul", tradicional: 205, organico: 155, reserva: 85 },
  { month: "Ago", tradicional: 220, organico: 165, reserva: 92 },
  { month: "Sep", tradicional: 210, organico: 158, reserva: 88 },
  { month: "Oct", tradicional: 235, organico: 178, reserva: 98 },
  { month: "Nov", tradicional: 260, organico: 195, reserva: 110 },
  { month: "Dic", tradicional: 310, organico: 230, reserva: 135 },
]

const revenueData = [
  { month: "Ene", ingresos: 7000 },
  { month: "Feb", ingresos: 8120 },
  { month: "Mar", ingresos: 9200 },
  { month: "Abr", ingresos: 9550 },
  { month: "May", ingresos: 11025 },
  { month: "Jun", ingresos: 12360 },
  { month: "Jul", ingresos: 13575 },
  { month: "Ago", ingresos: 14660 },
  { month: "Sep", ingresos: 13920 },
  { month: "Oct", ingresos: 15680 },
  { month: "Nov", ingresos: 17575 },
  { month: "Dic", ingresos: 21125 },
]

const productDistribution = [
  { name: "Tradicional", value: 2368, price: "$28.000" },
  { name: "Orgánico", value: 1738, price: "$35.000" },
  { name: "Reserva", value: 968, price: "$48.000" },
]

const priceComparison = [
  { name: "Café Tradicional", precio: 28000, mercado: 32000 },
  { name: "Café Orgánico", precio: 35000, mercado: 42000 },
  { name: "Reserva Especial", precio: 48000, mercado: 58000 },
]

// Computed hex colors to pass to Recharts (CSS vars don't work in Recharts)
const ROSE_PINK = "#d4728c"
const ROSE_LIGHT = "#e8b4c4"
const ROSE_GOLD = "#c9a96e"
const MAUVE = "#9e6b8a"
const BLUSH = "#f0d4dc"

const PIE_COLORS = [ROSE_PINK, ROSE_GOLD, MAUVE]

// --- KPI Card ---

function KpiCard({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: React.ElementType
  label: string
  value: string
  change: string
}) {
  return (
    <Card className="border-rose-light bg-card">
      <CardContent className="flex items-center gap-4 pt-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-light/50">
          <Icon className="h-5 w-5 text-rose-pink" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm text-muted-foreground">{label}</p>
          <p className="font-serif text-2xl font-bold text-foreground">{value}</p>
          <p className="text-xs font-medium text-rose-pink">{change}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// --- Main Section ---

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 fill-rose-pink text-rose-pink" />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-pink">
              {"Nuestros Números"}
            </p>
            <Heart className="h-4 w-4 fill-rose-pink text-rose-pink" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {"Análisis de Ventas y Precios"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"Un vistazo al crecimiento de Café con Amor durante el último año. Cada taza cuenta una historia de confianza."}
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            icon={Package}
            label="Unidades Vendidas"
            value="5,074"
            change="+24% vs. año anterior"
          />
          <KpiCard
            icon={DollarSign}
            label="Ingresos Anuales"
            value="$143.8M"
            change="+31% vs. año anterior"
          />
          <KpiCard
            icon={Users}
            label="Clientas Activas"
            value="1,820"
            change="+18% vs. año anterior"
          />
          <KpiCard
            icon={TrendingUp}
            label="Precio Promedio"
            value="$36.300"
            change="Mejor valor del mercado"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Monthly Sales by Product */}
          <Card className="border-rose-light bg-card">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-foreground">
                Ventas Mensuales por Producto
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Unidades vendidas por mes — 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  tradicional: { label: "Tradicional", color: ROSE_PINK },
                  organico: { label: "Orgánico", color: ROSE_GOLD },
                  reserva: { label: "Reserva", color: MAUVE },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlySales} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={BLUSH} />
                    <XAxis dataKey="month" tick={{ fill: MAUVE, fontSize: 12 }} />
                    <YAxis tick={{ fill: MAUVE, fontSize: 12 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="tradicional" fill={ROSE_PINK} radius={[4, 4, 0, 0]} name="Tradicional" />
                    <Bar dataKey="organico" fill={ROSE_GOLD} radius={[4, 4, 0, 0]} name="Orgánico" />
                    <Bar dataKey="reserva" fill={MAUVE} radius={[4, 4, 0, 0]} name="Reserva" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Revenue Trend */}
          <Card className="border-rose-light bg-card">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-foreground">
                Tendencia de Ingresos
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Ingresos mensuales en miles de COP — 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  ingresos: { label: "Ingresos (miles COP)", color: ROSE_PINK },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="roseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={ROSE_PINK} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={ROSE_PINK} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={BLUSH} />
                    <XAxis dataKey="month" tick={{ fill: MAUVE, fontSize: 12 }} />
                    <YAxis tick={{ fill: MAUVE, fontSize: 12 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="ingresos"
                      stroke={ROSE_PINK}
                      strokeWidth={2.5}
                      fill="url(#roseGradient)"
                      name="Ingresos"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Product Distribution Pie */}
          <Card className="border-rose-light bg-card">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-foreground">
                Distribución de Ventas
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Participación por producto — Total: 5,074 unidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <ChartContainer
                  config={{
                    Tradicional: { label: "Tradicional", color: ROSE_PINK },
                    Orgánico: { label: "Orgánico", color: ROSE_GOLD },
                    Reserva: { label: "Reserva", color: MAUVE },
                  }}
                  className="h-[250px] w-[250px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Pie
                        data={productDistribution}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={55}
                        strokeWidth={2}
                        stroke="#fff"
                      >
                        {productDistribution.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
                {/* Legend */}
                <div className="flex flex-col gap-3">
                  {productDistribution.map((item, i) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: PIE_COLORS[i] }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.value.toLocaleString()} uds &middot; {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Comparison */}
          <Card className="border-rose-light bg-card">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-foreground">
                Comparación de Precios
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Nuestro precio vs. promedio del mercado (COP)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  precio: { label: "Café con Amor", color: ROSE_PINK },
                  mercado: { label: "Promedio Mercado", color: ROSE_LIGHT },
                }}
                className="h-[250px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={priceComparison}
                    layout="vertical"
                    margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={BLUSH} horizontal={false} />
                    <XAxis type="number" tick={{ fill: MAUVE, fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tick={{ fill: MAUVE, fontSize: 11 }}
                      width={110}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="precio" fill={ROSE_PINK} radius={[0, 4, 4, 0]} name="Café con Amor" />
                    <Bar dataKey="mercado" fill={ROSE_LIGHT} radius={[0, 4, 4, 0]} name="Promedio Mercado" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Table */}
        <div className="mt-10">
          <Card className="border-rose-light bg-card overflow-hidden">
            <CardHeader>
              <CardTitle className="font-serif text-lg text-foreground">
                Lista de Precios
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Precios vigentes — Bolsa de 340g
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-rose-light bg-blush/50">
                      <th className="px-6 py-3 font-semibold text-foreground">Producto</th>
                      <th className="px-6 py-3 font-semibold text-foreground">Precio Unitario</th>
                      <th className="px-6 py-3 font-semibold text-foreground">Precio x3</th>
                      <th className="px-6 py-3 font-semibold text-foreground">Precio x6</th>
                      <th className="px-6 py-3 font-semibold text-foreground">Ahorro x6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-rose-light/50 transition-colors hover:bg-blush/30">
                      <td className="px-6 py-4 font-medium text-foreground">Café Tradicional</td>
                      <td className="px-6 py-4 text-muted-foreground">$28.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$78.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$148.000</td>
                      <td className="px-6 py-4 font-semibold text-rose-pink">-12%</td>
                    </tr>
                    <tr className="border-b border-rose-light/50 transition-colors hover:bg-blush/30">
                      <td className="px-6 py-4 font-medium text-foreground">Café Orgánico</td>
                      <td className="px-6 py-4 text-muted-foreground">$35.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$98.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$185.000</td>
                      <td className="px-6 py-4 font-semibold text-rose-pink">-12%</td>
                    </tr>
                    <tr className="transition-colors hover:bg-blush/30">
                      <td className="px-6 py-4 font-medium text-foreground">Reserva Especial</td>
                      <td className="px-6 py-4 text-muted-foreground">$48.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$135.000</td>
                      <td className="px-6 py-4 text-muted-foreground">$255.000</td>
                      <td className="px-6 py-4 font-semibold text-rose-pink">-11%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
