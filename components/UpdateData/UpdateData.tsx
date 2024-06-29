"use client";

import { useTimerStore } from "@/store";
import { ActionIcon, Center, RingProgress, Text, rem } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useEffect } from "react";

export function UpdateData() {
    const { timer, incTimer, resTimer } = useTimerStore();
    const interval = useInterval(() => {
        if (timer < 10) {
            incTimer()
        } else {
            resTimer();
        }
    }, 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, [timer]);

    return (
        <RingProgress
            size={36}
            thickness={2}
            roundCaps
            sections={[{ value: timer * 10, color: interval.active ? "#64a46c" : "#e22762" }]}
            label={
                <Center>
                    <ActionIcon variant="filled" radius="xl" size="sm" onClick={() => {
                        interval.toggle()
                    }}>
                        {interval.active ?
                            <Text size="sm" >{timer}</Text> :
                            <IconPlayerPlay style={{ width: rem(16), height: rem(16) }} />
                        }
                    </ActionIcon>
                </Center>
            }
        />
    );
}
