import { MoreHorizontal, PlusIcon, X } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const COLORS = ["#6CB16C", "#D7F4C0"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={"middle"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight={"bold"}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export function PieComponent({ data }: { data: {}[] }) {
  const clean = data.filter((el: any) => el.Tickets !== 0);

  return (
    <div className="h-full w-full lg:w-auto flex-[3] min-h-[300px] lg:min-h-[auto] flex flex-col justify-center items-center relative card">
      <span className="w-full flex justify-end mb-2">
        <X size={20} className="text-gray-400 cursor-pointer" />
      </span>
      <div className="flex justify-center items-center w-full gap-10">
        <p className="heading text-xs md:text-sm lg:text-base">
          Consumption Threshold
        </p>
        <MoreHorizontal
          size={28}
          className="rounded-[3px] cursor-pointer border border-gray-500 text-gray-600"
        />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={clean}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value="75%"
              position="center"
              className="font-[500]"
              fontSize="18px"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-end items-center w-full cursor-pointer border-gray-700 rounded-full">
        <button className="text-sm font-[500] flex gap-1 border-gray-800 border rounded-full px-2 py-1">
          <PlusIcon size={18} />
          Report
        </button>
      </div>
    </div>
  );
}
