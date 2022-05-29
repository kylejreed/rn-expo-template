import create from "zustand"

type AvailableModals = "test"
interface ModalState {
  activeModal?: AvailableModals | null
  open(tag: AvailableModals): void
  close(): void
}

export const useModal = create<ModalState>((set, get) => ({
  open(tag) {
    set({ activeModal: tag })
  },
  close() {
    set({ activeModal: null })
  },
}))
