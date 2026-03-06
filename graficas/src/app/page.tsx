import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-slate-800">
          Dashboard de Integración de Gráficas
        </h1>

        <p className="mb-8 text-slate-600">
          Selecciona una visualización para consumir las APIs del backend.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/total-productos"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              Total de productos
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Consulta la API /api/count-products
            </p>
          </Link>

          <Link
            href="/total-tipoProductos"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              Total por tipo de producto
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Consulta la API /api/sum-value-by-productType
            </p>
          </Link>

          <Link
            href="/valor-promedioCategoria"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              Valor promedio por categoría
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Consulta la API /api/avg-value-by-category
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}