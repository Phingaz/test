"use client";
import BarReport from "@/components/BarReport";
import ConsumptionReport from "@/components/ConsumptionReport";
import Nav from "@/components/Nav";
import { PieComponent } from "@/components/PieReport";
import QuickEnergy from "@/components/QuickEnergy";
import SideBar from "@/components/SideBar";
import { BarReportData, ConsumptionData, PieData } from "./data";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full rounded-lg flex lg:h-[calc(100svh-80px)]">
        <SideBar />
        <div className="lg:flex-[9] w-full lg:w-auto bg-gray-100 flex flex-col lg:grid grid-flow-row grid-rows-2 gap-5 p-5 ">
          <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5">
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
