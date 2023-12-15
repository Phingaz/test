import { Calendar, X } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ConsumptionReport({ data }: { data: {}[] }) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center relative card py-">
      <span className="w-full flex justify-end mb-2">
        <X size={20} className="text-gray-400 cursor-pointer" />
      </span>
      <div className="flex justify-center items-center w-full mb-5">
        <p className="heading flex gap-3 justify-center items-center">
          Your Consumption History <Calendar size={20} />
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tick={false} tickLine={false} />
          <Tooltip />
          <Line dataKey="uv" stroke="#6CB16C" dot={{ r: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
