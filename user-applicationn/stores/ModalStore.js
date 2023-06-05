import {create} from 'zustand'

export const useModalStore = create((set) => ({
    ModalVisible: false,
    setModalVisible: (state) => set({ModalVisible: state}),
}))