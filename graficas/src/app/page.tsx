import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-slate-800">
          Dashboard de Gráficas del Examen II
        </h1>

        <p className="mb-8 text-slate-600">
          Selecciona una visualización para consultar los datos de la tabla products.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/valor-promedioCategoria"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              Valor promedio de prodcutos por categoría
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Grafica Lineal
            </p>
          </Link>

          <Link
            href="/cantidad-productos-marca"
            className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold text-slate-800">
              Cantidad de productos por marca
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Grafica Pie
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}