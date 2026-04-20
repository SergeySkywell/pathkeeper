export interface Stats {
  attention: number;
  energy: number;
  discipline: number;
  clarity: number;
  depth: number;
}

export type StateType = "lost" | "unstable" | "stable" | "flow" | "deep";