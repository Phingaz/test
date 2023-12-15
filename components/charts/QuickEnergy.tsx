import { ArrowDown, ArrowUp, X } from "lucide-react";

export default function QuickEnergy() {
  return (
    <div className="w-full h-full aspect-square flex flex-col justify-center items-center relative card py-">
      <span className="w-full flex justify-end mb-2">
        <X size={20} className="text-gray-400 cursor-pointer" />
      </span>
      <div className="flex justify-center items-center w-full mb-5">
        <p className="heading flex gap-3 justify-center items-center">
          Quick Energy Consumption View
        </p>
      </div>

      <div className="w-6/12 max-w-[200px] aspect-square box rounded-full grid place-content-center relative">
        <div className="flex flex-col justify-center items-center relative px-2 py-1">
          <p className="font-bold -mb-1 text-3xl">510</p>
          <span className="text-gray-700 text-sm font-[700]">kWh</span>
          <ArrowUp
            size={18}
            className="absolute -top-1 -right-3 text-gray-600"
          />
        </div>
        <div className="bg-white absolute -bottom-9 left-1/2 transform -translate-x-1/2  w-[60px] h-[60px] flex justify-center items-center flex-col">
          <p className="text-gray-500 font-[500]">Jan</p>
          <p className="text-gray-500 text-xs">2022</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full pr-3">
        <div className="flex flex-col justify-center items-center relative px-2 py-1">
          <p className="font-bold -mb-1">470</p>
          <span className="text-gray-500 text-xs">Dec</span>
          <ArrowDown
            size={18}
            className="absolute -top-1 -right-3 text-gray-600"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative px-2 py-1">
          <p className="font-bold -mb-1">620</p>
          <span className="text-gray-500 text-xs">Feb</span>
          <ArrowUp
            size={18}
            className="absolute -top-1 -right-3 text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
