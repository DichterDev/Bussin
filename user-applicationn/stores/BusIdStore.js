import {create} from 'zustand'

export const useBusIdStore = create((set) => ({
    BusId: 0,
    setBusId: (state) => set({BusId: state}),
}))