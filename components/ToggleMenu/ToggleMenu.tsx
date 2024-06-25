'use client';

import { useAuthStore, useMenuStore } from '@/store';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconColumnsOff, IconLogin, IconLogout, IconMenu2, IconMoon, IconSun, IconX } from '@tabler/icons-react';

export function ToggleMenu() {
    const { setColorScheme } = useMantineColorScheme();
    const { menuOpen, setMenuOpen } = useMenuStore();
    const { isAuth, setIsAuth } = useAuthStore();

    return (
        <ActionIcon.Group>
            <ActionIcon variant="default" size="lg" aria-label="Menu" onClick={() => { setMenuOpen(!menuOpen) }}>
                {menuOpen ?
                    <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} /> :
                    <IconMenu2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
                }
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="DarkTheme" onClick={() => setColorScheme('dark')} darkHidden>
                <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="LightTheme" onClick={() => setColorScheme('light')} lightHidden>
                <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="Menu" onClick={() => { setIsAuth(!isAuth) }}>
                {isAuth ?
                    <IconLogout style={{ width: '70%', height: '70%' }} stroke={1.5} /> :
                    <IconLogin style={{ width: '70%', height: '70%' }} stroke={1.5} />
                }
            </ActionIcon>
        </ActionIcon.Group>
    );
}
