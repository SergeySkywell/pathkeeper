interface StatItemProps {
  name: string;
  value: number;
}

export const StatItem = ({ name, value }: StatItemProps) => {
  return (
    <li className="text-m text-[#73605b] font-extralight">
      <span className="font-bold">{name}</span> {value}
    </li>
  );
};
