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


