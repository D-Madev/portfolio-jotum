import { create } from 'zustand'

const useNavbarStore = create((set) => ({
  isVisible: true,
  showNavbar: () => set({isVisible: true}),
  hideNavbar: () => set({isVisible: false}),
}))

export default useNavbarStore;