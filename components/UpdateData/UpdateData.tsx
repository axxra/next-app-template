"use client";

import { useTimerStore } from "@/store";
import { ActionIcon, Center, RingProgress, Text, rem, useMantineColorScheme } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { useEffect } from "react";

export function UpdateData() {
    const { colorScheme } = useMantineColorScheme();
    const { timer, incTimer, resTimer } = useTimerStore();
    const interval = useInterval(() => {
        if (document.hasFocus()) {
            if (timer < 10) {
                incTimer()
            } else {
                resTimer();
            }
        }
    }, 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, [timer]);

    return (
        <ActionIcon.Group>
            <ActionIcon variant="default" radius="xl" size="lg" onClick={() => { }}>
                <RingProgress
                    size={32}
                    thickness={2}
                    roundCaps
                    sections={[{ value: timer * 10, color: interval.active ? colorScheme === 'dark' ? 'myDark' : 'myLight' : 'myRed' }]}
                    label={
                        <Center>
                            {/* {interval.active ?
                            <Text size="sm" >{timer}</Text> :
                            <IconPlayerPlay style={{ width: rem(16), height: rem(16) }} />
                        } */}
                            <Text size="sm" >{timer}</Text>
                        </Center>
                    }
                />
            </ActionIcon>
            <ActionIcon variant="default" radius="xl" size="lg" onClick={() => {
                interval.toggle()
            }}>
                {interval.active ?
                    <IconPlayerPause /> :
                    <IconPlayerPlay />
                }
            </ActionIcon>
        </ActionIcon.Group>
    );
}
