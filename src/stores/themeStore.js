import create from 'zustand'
import { persist } from 'zustand/middleware'

const themeStore = create(
  persist(
    (set, get) => ({
      currentTheme: null,
      currentColor: null,
      setCurrentTheme: (theme) => set({ currentTheme: theme }),
      setColorTheme: (color) => set({ currentColor: color }),
    }),
    {
      name: 'themeStore',
    }
  )
)

export default themeStore
