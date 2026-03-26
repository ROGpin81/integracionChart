"use client";

import React, { useEffect, useState } from "react";
import { fetchCountProductsByBrand } from "@/services/api";
import { Pie } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "Cantidad de productos por marca",
        data: [] as number[],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(99, 255, 132, 0.6)",
          "rgba(201, 203, 207, 0.6)",
          "rgba(255, 140, 0, 0.6)",
          "rgba(0, 191, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchCountProductsByBrand().then((data) => {
      const labels = data.map((item: any) => item.brand_code);
      const values = data.map((item: any) =>
        Number(item.cantidad_productos)
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Cantidad de productos por marca",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(99, 255, 132, 0.6)",
              "rgba(201, 203, 207, 0.6)",
              "rgba(255, 140, 0, 0.6)",
              "rgba(0, 191, 255, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      });
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Gráfico de pastel de la cantidad de productos por marca",
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            Cantidad de productos por marca
          </h1>
          <Link href="/" className="rounded-md bg-slate-800 px-4 py-2 text-white">
            Volver
          </Link>
        </div>

        <div className="mx-auto max-w-2xl">
          <Pie data={chartData} options={options} />
        </div>
      </div>
    </main>
  );
}