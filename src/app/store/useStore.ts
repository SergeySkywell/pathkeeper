import { create } from "zustand";
import type { Stats } from "@/shared/lib/types";

interface PathkeeperStore {
  stats: Stats;
  updateStat: (name: keyof Stats, delta: number) => void;
}

export const useStore = create<PathkeeperStore>((set) => ({
  stats: {
    attention: 10,
    energy: 10,
    discipline: 10,
    clarity: 10,
    depth: 10,
  },
  updateStat: (name, delta) => {
    set((state) => ({
      stats: {
        ...state.stats,
        [name]: state.stats[name] + delta,
      },
    }));
  },
}));
