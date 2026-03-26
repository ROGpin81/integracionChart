"use client";

import React, { useEffect, useState } from "react";
import { fetchAvgValueByCategory } from "@/services/api";
import { Line } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "Valor promedio de productos por categoría",
        data: [] as number[],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        tension: 0.2,
      },
    ],
  });

  useEffect(() => {
    fetchAvgValueByCategory().then((data) => {
      const labels = data.map((item: any) => item.category_code);
      const values = data.map((item: any) =>
        Number(Number(item.valor_promedio).toFixed(2))
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Valor promedio de productos por categoría",
            data: values,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.4)",
            tension: 0.2,
          },
        ],
      });
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Gráfico lineal del valor promedio de productos por categoría",
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            Valor promedio de productos por categoría
          </h1>
          <Link href="/" className="rounded-md bg-slate-800 px-4 py-2 text-white">
            Volver
          </Link>
        </div>

        <Line data={chartData} options={options} />
      </div>
    </main>
  );
}