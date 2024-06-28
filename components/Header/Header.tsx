"use client";

import { Box, Button, Container, Group, Image } from "@mantine/core";
import cls from "./Header.module.css";
import { IconBasketDown, IconBasketUp, IconHistory, IconLogin, IconMenu, IconMenu2, IconUser, IconWallet } from "@tabler/icons-react";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";
import { useAuthStore, useMenuStore } from "@/store";

export function Header() {
    const { menu, setMenu } = useMenuStore();
    const { isAuth } = useAuthStore();

    return (
        <Box component="header" className={cls.header}>
            <Container size="lg" className={cls.inner}>
                <Image h={32} w="auto" fit="contain" src="/logo.svg" alt="logo" darkHidden />
                <Image h={32} w="auto" fit="contain" src="/dark.svg" alt="logo" lightHidden />
                <Group>
                    <Group /* visibleFrom="lg" */>
                        <Button leftSection={<IconBasketUp />} variant={menu === 'buy' ? "filled" : "subtle"} onClick={() => { setMenu('buy') }}>
                            Buy
                        </Button>
                        <Button color="myRed" leftSection={<IconBasketDown />} variant={menu === 'sell' ? "filled" : "subtle"} onClick={() => { setMenu('sell') }}>
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
                        </Button>
                    </Group>
                    <ToggleMenu />
                </Group>
            </Container>
        </Box>
    );
}
