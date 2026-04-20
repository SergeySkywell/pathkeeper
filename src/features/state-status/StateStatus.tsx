import { useStore } from "@/app/store/useStore";

export const StateStatus = () => {
  const { state, setState } = useStore();

  const labels = {
    lost: "Ты потерян",
    unstable: "Ты неустойчив",
    stable: "Ты стабилен",
    flow: "Ты в потоке",
    deep: "Ты глубокий",
  };

  const descriptions = {
    lost: "Ты потерял направление",
    unstable: "Ты теряешь устойчивость",
    stable: "Ты удерживаешь баланс",
    flow: "Ты движешься точно и уверенно",
    deep: "Ты погружаешься в глубину",
  };

  const order = ["lost", "unstable", "stable", "flow", "deep"] as const;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl text-[#bb6e26] font-extrabold leading-tight">
        {labels[state]}
      </h1>
      <p className="text-m text-[#73605b] font-extralight">
        {descriptions[state]}
      </p>
      <button
        className="px-6 py-2.5 font-medium text-[#fff0bc] bg-[#49290f] hover:bg-[#bb6e26] rounded-full transition duration-150 ease-in-out shadow-md hover:shadow-lg"
        onClick={() =>
          setState(order[(order.indexOf(state) + 1) % order.length])
        }
      >
        Сменить состояние
      </button>
    </div>
  );
};
