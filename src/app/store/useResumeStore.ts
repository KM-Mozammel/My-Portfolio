import { create } from 'zustand'

type resumeState = {
    show: boolean,
    setShow: (value: boolean) => void
}

export const useResumeStore = create<resumeState>((set) => ({
    show: false,
    setShow: (value) => set({ show: value }),
}))