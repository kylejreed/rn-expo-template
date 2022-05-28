import create from "zustand"

interface StoreState {
  hello: string
}

export const useStore = create<StoreState>((set, get) => ({
  hello: "world",
}))
