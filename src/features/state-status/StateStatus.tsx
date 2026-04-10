import { useStore } from "../../app/store/useStore";

export const StateStatus = () => {
  const state = useStore((state) => state.state);

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-4xl text-[#d09683] font-extrabold leading-tight">
        {state}
      </h1>
      <p className="text-m text-[#73605b] font-extralight">
        Ты удерживаешь путь
      </p>
    </div>
  );
};
