import type { Stats, StateType } from "@/shared/lib/types";

export const calculateState = (stats: Stats): StateType => {
  const statsValues = Object.values(stats);
  const total = statsValues.reduce((sum, value) => sum + value, 0);
  const average = total / statsValues.length;

  if (average < 20) return "lost";
  if (average < 40) return "unstable";
  if (average < 60) return "stable";
  if (average < 80) return "flow";
  return "deep";
};
