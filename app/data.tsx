import { LineChart } from "lucide-react";

export const sidebarMenu = [
  {
    id: 1,
    iconActive: <LineChart size={17} />,
    name: "Energy Forecast",
    path: "#",
  },
  {
    id: 2,
    iconActive: <LineChart size={17} />,
    name: "Carbon Emission",
    path: "#carbon-emission",
  },
  {
    id: 3,
    iconActive: <LineChart size={17} />,
    name: "Consumption vs Generation",
    path: "#consumption-vs-generation",
  },
];

export const ConsumptionData = [
  {
    name: "June",
    uv: 200,
  },
  {
    name: "July",
    uv: 300,
  },
  {
    name: "Aug",
    uv: 700,
  },
  {
    name: "Sep",
    uv: 600,
  },
  {
    name: "Oct",
    uv: 500,
  },
  {
    name: "Nov",
    uv: 600,
  },
];

export const BarReportData = [
  {
    name: "9 am",
    uv: 800,
    amt: 420,
  },
  {
    name: "10 am",
    uv: 800,
    amt: 220,
  },
  {
    name: "11 am",
    uv: 900,
    amt: 580,
  },
  {
    name: "12 pm",
    uv: 660,
    amt: 350,
  },
  {
    name: "1 pm",
    uv: 520,
    amt: 410,
  },
  {
    name: "2 pm",
    uv: 780,
    amt: 620,
  },
  {
    name: "3 pm",
    uv: 770,
    amt: 610,
  },
  {
    name: "4 pm",
    uv: 790,
    amt: 790,
  },
  {
    name: "6 pm",
    uv: 900,
    amt: 580,
  },
  {
    name: "7 pm",
    uv: 800,
    amt: 800,
  },
  {
    name: "8 pm",
    uv: 810,
    amt: 600,
  },
];

export const PieData = [
  {
    name: "A",
    value: 75,
  },
  {
    name: "B",
    value: 25,
  },
];
