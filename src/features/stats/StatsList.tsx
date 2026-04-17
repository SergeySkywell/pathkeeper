import { StatItem } from "./StatItem";
import { useStore } from "../../app/store/useStore";

type StatEntry = {
  name: string;
  value: number;
};

export const StatsList = () => {
  const stats = useStore((state) => state.stats);

  const statsArray = Object.entries(stats).map(
    ([name, value]): StatEntry => ({
      name,
      value,
    }),
  );

  const statsLabels: Record<string, string> = {
    attention: "Внимание",
    energy: "Энергия",
    discipline: "Дисциплина",
    clarity: "Ясность",
    depth: "Глубина",
  };

  /* РЕНДЕР */

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl text-[#bb6e26] font-extrabold leading-tight">
        Характеристики
      </h1>
      <ul>
        {statsArray.map((stat) => (
          <StatItem
            key={stat.name}
            name={statsLabels[stat.name] || stat.name}
            value={stat.value}
          />
        ))}
      </ul>
    </div>
  );
};
