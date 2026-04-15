import { StatItem } from "./StatItem";

export const StatsList = () => {
  const stats = [
    { name: "Внимание", value: 10 },
    { name: "Энергия", value: 10 },
    { name: "Дисциплина", value: 10 },
    { name: "Ясность", value: 10 },
    { name: "Глубина", value: 10 },
  ];
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl text-[#bb6e26] font-extrabold leading-tight">
        Характеристики
      </h1>
      <ul>
        {stats.map((stat) => (
          <StatItem key={stat.name} name={stat.name} value={stat.value} />
        ))}
      </ul>
    </div>
  );
};
