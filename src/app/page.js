"use client";
import Image from "next/image";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  // Dummy data for charts
  const lineData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Price Trends",
        data: [0, 0, 1200000, 1300000, 1250000, 1400000, 1500000, 1550000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const barData = {
    labels: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho"],
    datasets: [
      {
        label: "Number of Listings",
        data: [300, 500, 150, 120, 200],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Real Estate Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Price Trends Over Time</h2>
          <Line data={lineData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Listings by Province</h2>
          <Bar data={barData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Market Insights</h2>
        <p className="text-gray-700">
          Đưa ra nhận xét về các số liệu trên, dự kiến dùng AI để làm phần này
        </p>
      </div>
    </div>
  );
}
