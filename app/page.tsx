"use client";
import BarReport from "@/components/charts/BarReport";
import ConsumptionReport from "@/components/charts/ConsumptionReport";
import Nav from "@/components/nav/Nav";
import { PieComponent } from "@/components/charts/PieReport";
import QuickEnergy from "@/components/charts/QuickEnergy";
import SideBar from "@/components/nav/SideBar";
import { BarReportData, ConsumptionData, PieData } from "./data";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full rounded-lg flex lg:h-[calc(100svh-80px)]">
        <SideBar />
        <div className="lg:flex-[9] w-full lg:w-auto bg-gray-100 flex flex-col lg:grid grid-flow-row grid-rows-2 gap-5 p-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row w-full justify-center items-center gap-5">
            <QuickEnergy />
            <ConsumptionReport data={ConsumptionData} />
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5">
            <BarReport data={BarReportData} />
            <PieComponent data={PieData} />
          </div>
        </div>
      </div>
    </div>
  );
}
