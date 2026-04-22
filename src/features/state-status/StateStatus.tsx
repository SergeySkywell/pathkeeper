import { useStore } from "@/app/store/useStore";
import { calculateState } from "@/shared/lib/calculateState";
import type { StateType } from "@/shared/lib/types";

const labels: Record<StateType, string> = {
  lost: "Ты потерян",
  unstable: "Ты неустойчив",
  stable: "Ты стабилен",
  flow: "Ты в потоке",
  deep: "Ты глубокий",
};

const descriptions: Record<StateType, string> = {
  lost: "Ты потерял направление",
  unstable: "Ты теряешь устойчивость",
  stable: "Ты удерживаешь баланс",
  flow: "Ты движешься точно и уверенно",
  deep: "Ты погружаешься в глубину",
};

export const StateStatus = () => {
  const state = useStore((s) => calculateState(s.stats));

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl text-[#bb6e26] font-extrabold leading-tight">
        {labels[state]}
      </h1>
      <p className="text-m text-[#73605b] font-extralight">
        {descriptions[state]}
      </p>
    </div>
  );
};
