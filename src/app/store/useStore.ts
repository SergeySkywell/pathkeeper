import { create } from "zustand";
import type { Stats } from "@/shared/lib/types";

interface PathkeeperStore {
  stats: Stats;
}

export const useStore = create<PathkeeperStore>(() => ({
  stats: {
    attention: 10,
    energy: 10,
    discipline: 10,
    clarity: 10,
    depth: 10,
  },
}));
