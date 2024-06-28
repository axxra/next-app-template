import { create } from 'zustand'

type setMenuType = {
    menu: string
    menuOpen: boolean
}

type setMenuAction = {
    setMenu: (menu: setMenuType['menu']) => void
    setMenuOpen: (menuOpen: setMenuType['menuOpen']) => void
}

export const useMenuStore = create<setMenuType & setMenuAction>()((set) => ({
    menu: 'buy',
    setMenu: (menu) => set(() => ({ menu })),
    menuOpen: false,
    setMenuOpen: (menuOpen) => set(() => ({ menuOpen })),
}))

type setAuthType = {
    isAuth: boolean
}

type setAuthAction = {
    setIsAuth: (isAuth: setAuthType['isAuth']) => void
}

export const useAuthStore = create<setAuthType & setAuthAction>()((set) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set(() => ({ isAuth })),
}))

type setCryptoType = {
    cryptoSelected: string
}

type setCrptoAction = {
    setCryptoSelected: (cryptoSelected: setCryptoType['cryptoSelected']) => void
}

export const useCryptoStore = create<setCryptoType & setCrptoAction>()((set) => ({
    cryptoSelected: 'USDT',
    setCryptoSelected: (cryptoSelected) => set(() => ({ cryptoSelected })),
}))

type setFiatType = {
    fiatSelected: string
}

type setFiatAction = {
    setFiatSelected: (fiatSelected: setFiatType['fiatSelected']) => void
}

export const useFiatStore = create<setFiatType & setFiatAction>()((set) => ({
    fiatSelected: 'INR',
    setFiatSelected: (fiatSelected) => set(() => ({ fiatSelected })),
}))


