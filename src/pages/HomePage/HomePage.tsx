import { StateStatus } from "@/features/state-status/StateStatus";

export const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-[#0b090f] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl text-[#fff0bc] font-extrabold leading-tight">
          pathkeeper
        </h1>
        <StateStatus />
        <p className="text-m text-[#fff0bc] font-extralight">
          Твой путь начинается здесь
        </p>
      </div>
    </div>
  );
};
