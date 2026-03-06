"use client";

import React, { useEffect, useState } from "react";
import { fetchCountProducts } from "@/services/api";
import { Bar } from "react-chartjs-2";
import Link from "next/link";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Page() {
  const [chartData, setChartData] = useState({
    labels: ["Productos"],
    datasets: [
      {
        label: "Cantidad total de productos",
        data: [0],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetchCountProducts().then((data) => {
      const total = data[0].total_productos;

      setChartData({
        labels: ["Productos"],
        datasets: [
          {
            label: "Cantidad total de productos",
            data: [Number(total)],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
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
        display: true,
      },
      title: {
        display: true,
        text: "Total de productos",
      },
    },
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Total de productos</h1>
          <Link href="/" className="rounded-md bg-slate-800 px-4 py-2 text-white">
            Volver
          </Link>
        </div>

        <Bar data={chartData} options={options} />
      </div>
    </main>
  );
}