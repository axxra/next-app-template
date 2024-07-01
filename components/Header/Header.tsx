"use client";

import { Box, Button, Container, Group, Image, useMantineColorScheme } from "@mantine/core";
import cls from "./Header.module.css";
import { IconBasketDown, IconBasketUp, IconHistory, IconUser, IconWallet } from "@tabler/icons-react";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";
import { useAuthStore, useCryptoStore, useFiatStore, useMenuStore } from "@/store";
import { useRouter } from "next/navigation";

const menuList = {
    "buy": { key: "buy", value: "Buy", icon: <IconBasketUp /> },
    "sell": { key: "sell", value: "Sell", icon: <IconBasketDown /> },
    "history": { key: "history", value: "History", icon: <IconHistory /> },
    "wallet": { key: "wallet", value: "Wallet", icon: <IconWallet /> },
    "account": { key: "account", value: "Account", icon: <IconUser /> },
}

export function Header() {
    const router = useRouter();
    const { colorScheme } = useMantineColorScheme();
    const { menu, setMenu } = useMenuStore();
    const { isAuth } = useAuthStore();
    const { cryptoSelected } = useCryptoStore();
    const { fiatSelected } = useFiatStore();

    return (
        <Box component="header" className={cls.header}>
            <Container size="lg" className={cls.inner}>
                <Image h={32} w="auto" fit="contain" src="/logo.svg" alt="logo" darkHidden />
                <Image h={32} w="auto" fit="contain" src="/dark.svg" alt="logo" lightHidden />
                <Group>
                    <Group >
                        {
                            Object.values(menuList).map((r, i) => (
                                <Button key={i} color={r.key === 'sell' ? "myRed" : colorScheme === 'dark' ? 'myDark' : 'myLight'} leftSection={r.icon} variant={menu === r.key ? "filled" : "subtle"} onClick={() => { if (r.key != menu) router.push(r.key === 'buy' || r.key === 'sell' ? `/p2p/${r.key}/${cryptoSelected}_${fiatSelected}` : r.key === 'account' ? isAuth ? `/${r.key}` : `/signup` : `/${r.key}`, { scroll: false }); setMenu(r.key); }}>
                                    {r.key === 'account' ? isAuth ? `Account` : `Sign Up` : r.value}
                                </Button>
                            ))
                        }
                        {/* <Button leftSection={<IconBasketUp />} variant={menu === 'buy' ? "filled" : "subtle"} onClick={() => { router.push(`/p2p/buy/${cryptoSelected}_${fiatSelected}`); setMenu('buy') }}>
                            Buy
                        </Button>
                        <Button color="myRed" leftSection={<IconBasketDown />} variant={menu === 'sell' ? "filled" : "subtle"} onClick={() => { router.push(`/p2p/sell/${cryptoSelected}_${fiatSelected}`); setMenu('sell') }}>
                            Sell
                        </Button>
                        <Button leftSection={<IconHistory />} variant={menu === 'history' ? "filled" : "subtle"} onClick={() => { setMenu('history') }}>
                            History
                        </Button>
                        <Button leftSection={<IconWallet />} variant={menu === 'wallet' ? "filled" : "subtle"} onClick={() => { setMenu('wallet') }}>
                            Wallet
                        </Button>
                        <Button w={120} leftSection={<IconUser />} variant={menu === 'account' ? "filled" : "subtle"} onClick={() => { setMenu('account') }}>
                            {isAuth ? `Account` : `Sign Up`}
                        </Button> */}
                    </Group>
                    <ToggleMenu />
                </Group>
            </Container>
        </Box>
    );
}
