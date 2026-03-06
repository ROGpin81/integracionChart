"use client";

import React, { useEffect, useState } from "react";
import { fetchSumValueByProductType } from "@/services/api";
import { Doughnut } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "Valor total por tipo de producto",
        data: [] as number[],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchSumValueByProductType().then((data) => {
      const labels = data.map((item: any) => item.productType);
      const values = data.map((item: any) => Number(item.valor_total));

      setChartData({
        labels,
        datasets: [
          {
            label: "Valor total por tipo de producto",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
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
        text: "Suma de value por productType",
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            Total por tipo de producto
          </h1>
          <Link href="/" className="rounded-md bg-slate-800 px-4 py-2 text-white">
            Volver
          </Link>
        </div>

        <div className="mx-auto max-w-xl">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </main>
  );
}