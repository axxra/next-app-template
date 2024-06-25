'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconLogin, IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';

export function ToggleMenu() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return (
        <ActionIcon.Group>
            <ActionIcon variant="default" size="lg" aria-label="Menu" >
                <IconMenu2 style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="DarkTheme" onClick={() => setColorScheme('dark')} darkHidden>
                <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="LightTheme" onClick={() => setColorScheme('light')} lightHidden>
                <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" size="lg" aria-label="Menu" >
                <IconLogin style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
        </ActionIcon.Group>
    );
}
