import { create } from "zustand";

export const uesDiark = create((set) => ({
    diark: false,
    setDiark: (newvalue) => set(() => ({ diark: newvalue }))
}));