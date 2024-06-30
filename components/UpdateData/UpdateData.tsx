"use client";

import { ActionIcon, Center, RingProgress, Text, rem, useMantineColorScheme } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function UpdateData() {
    const { colorScheme } = useMantineColorScheme();
    const [timer, setTimer] = useState<number>(10);
    const interval = useInterval(() => {
        if (document.hasFocus()) {
            if (timer < 10) {
                setTimer((s) => s + 1);
            } else {
                //update new data
                setTimer(0);
            }
        }
    }, 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, [timer]);

    return (
        <ActionIcon.Group>
            <ActionIcon variant="default" radius="xl" size="lg" onClick={() => {
                interval.toggle()
            }}>
                <RingProgress
                    size={32}
                    thickness={2}
                    roundCaps
                    sections={[{ value: timer * 10, color: interval.active ? colorScheme === 'dark' ? 'myDark' : 'myLight' : 'myRed' }]}
                    label={
                        <Center>
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
