import { create } from "zustand";

type StateType = "lost" | "unstable" | "stable" | "flow" | "deep";

interface State {
  state: StateType;
  setState: (newState: StateType) => void;
}

export const useStore = create<State>((set) => ({
  state: "flow",
  setState: (newState: StateType) => set({ state: newState }),
}));
