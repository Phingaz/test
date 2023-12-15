import { X } from "lucide-react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Line,
  Scatter,
  ComposedChart,
  Label,
} from "recharts";

export default function BarReport({ data }: { data: {}[] }) {
  return (
    <div className="h-full w-full lg:w-auto lg:flex-[7] flex flex-col justify-center items-center relative card min-h-[500px] lg:min-h-[auto]">
      <span className="w-full flex justify-end mb-2">
        <X size={20} className="text-gray-400 cursor-pointer" />
      </span>
      <div className="flex justify-start items-center w-full ">
        <p className="heading">Real-Time Monitoring</p>
      </div>
      <div className="flex justify-between items-center w-full mb-5">
        <p className="text-xs text-gray-400">29 January 2022, 08:00 PM</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#A6A6A6" vertical={false} />
          <XAxis dataKey="name" scale="auto" tickLine={false} tickMargin={10} />
          <YAxis
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            tickLine={false}
            tickMargin={5}
          >
            <Label
              style={{
                textAnchor: "middle",
                fontSize: "100%",
                fontStyle: "italic",
              }}
              position="insideLeft"
              angle={270}
              value={"KW"}
            />
          </YAxis>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{
              paddingTop: "20px",
            }}
          />
          <Bar name="Daily Avg" dataKey="uv" barSize={25} fill="#A7D0A7" />
          <Line
            dot={{ strokeWidth: 0, r: 0 }}
            type="monotone"
            dataKey="amt"
            name="Electricity Consumption"
            stroke="#00543F
          "
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
