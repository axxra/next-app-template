import { Box, Button, Container, Group, Image } from "@mantine/core";
import cls from "./Header.module.css";
import { IconBasketDown, IconBasketUp, IconHistory, IconLogin, IconMenu, IconMenu2, IconUser, IconWallet } from "@tabler/icons-react";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";

export function Header() {

    return (
        <Box component="header" className={cls.header}>
            <Container size="lg" className={cls.inner}>
                <Image h={32} w="auto" fit="contain" src="/logo.svg" alt="logo" darkHidden />
                <Image h={32} w="auto" fit="contain" src="/dark.svg" alt="logo" lightHidden />
                <Group>
                    <Button leftSection={<IconBasketUp />} variant="filled">
                        Buy
                    </Button>
                    <Button color="myRed" leftSection={<IconBasketDown />} variant="subtle">
                        Sell
                    </Button>
                    <Button leftSection={<IconHistory />} variant="subtle">
                        History
                    </Button>
                    <Button leftSection={<IconWallet />} variant="subtle">
                        Wallet
                    </Button>
                    {/* <Button leftSection={<IconUser />} variant="light">
                        Account
                    </Button> */}
                    <Button leftSection={<IconUser />} variant="subtle">
                        Sign Up
                    </Button>
                    <ToggleMenu />
                </Group>
            </Container>
        </Box>
    );
}
