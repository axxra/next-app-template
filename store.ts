import { create } from 'zustand'


type cryptoType = {
    [key: string]: {
        label: string
        key: string
        value: string
    };
};

export const cryptoList: cryptoType = {
    'USDT': { key: 'USDT', value: 'USDT', label: 'Tether' },
    'BTC': { key: 'BTC', value: 'BTC', label: 'Bitcoin' },
    'ETH': { key: 'ETH', value: 'ETH', label: 'Ethereum' },
    'BSC': { key: 'BSC', value: 'BSC', label: 'Binance' },
    'SOL': { key: 'SOL', value: 'SOL', label: 'Solana' },
    'AVAX': { key: 'AVAX', value: 'AVAX', label: 'Avalanche' },
    'TRX': { key: 'TRX', value: 'TRX', label: 'Tron' },
    'MATIC': { key: 'MATIC', value: 'MATIC', label: 'Polygon' },
    'DOGE': { key: 'DOGE', value: 'DOGE', label: 'Dogecoin' }
}

type fiatType = {
    [key: string]: {
        label: string
        key: string
        value: string
        list: {
            [key: string]: {
                label: string
                key: string
                value: string
            };
        }
    };
};

export const fiatList: fiatType = {
    'ALL': {
        label: "FIAT Currency", key: 'ALL', value: 'ALL', list: {
            'ALL': { label: "Payment Method", key: 'ALL', value: 'ALL' },
        }
    },
    'INR': {
        label: "Indian Rupee", key: 'INR', value: 'INR', list: {
            'ALL': { label: "Payment Method", key: 'ALL', value: 'ALL' },
            'UPI': { label: "Unified Payments Interface", key: 'UPI', value: 'UPI' },
            'IMPS': { label: "Immediate Payment Service", key: 'IMPS', value: 'IMPS' },
            'NEFT': { label: "National Electronic Funds Transfer", key: 'NEFT', value: 'NEFT' },
            'RTGS': { label: "Real-time gross settlement", key: 'RTGS', value: 'RTGS' },
        }
    },
    'USD': {
        label: "US Dollar", key: 'USD', value: 'USD', list: {
            'ALL': { label: "Payment Method", key: 'ALL', value: 'ALL' },
        }
    },
    'RUB': {
        label: "Russian Rubble", key: 'RUB', value: 'RUB', list: {
            'ALL': { label: "Payment Method", key: 'ALL', value: 'ALL' },
        }
    },
}

type setMenuType = {
    menu: string
    menuOpen: boolean
}

type setMenuAction = {
    setMenu: (menu: setMenuType['menu']) => void
    setMenuOpen: (menuOpen: setMenuType['menuOpen']) => void
}

export const useMenuStore = create<setMenuType & setMenuAction>()((set) => ({
    menu: '',
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
    fiatSelected: 'ALL',
    setFiatSelected: (fiatSelected) => set(() => ({ fiatSelected })),
}))


type timerType = {
    timer: number
}

type timerAction = {
    incTimer: () => void
    resTimer: () => void
}

export const useTimerStore = create<timerType & timerAction>()((set) => ({
    timer: 0,
    incTimer: () => set((state) => ({ timer: state.timer + 1 })),
    resTimer: () => set({ timer: 0 }),
}))

