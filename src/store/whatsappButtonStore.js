import { create } from 'zustand'

const useWButtonStore = create((set) => ({
  isVisible: true,
  showWButton: () => set({isVisible: true}),
  hideWButton: () => set({isVisible: false}),
}))

export default useWButtonStore;