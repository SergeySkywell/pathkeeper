import { create } from "zustand";

type StateType = "lost" | "unstable" | "stable" | "flow" | "deep";

interface State {
  state: StateType;
  stats: {
    attention: number;
    energy: number;
    discipline: number;
    clarity: number;
    depth: number;
  };
  setState: (newState: StateType) => void;
}

export const useStore = create<State>((set) => ({
  state: "flow",
  stats: {
    attention: 10,
    energy: 10,
    discipline: 10,
    clarity: 10,
    depth: 10,
  },
  setState: (newState: StateType) => set({ state: newState }),
}));
