"use client";

import { useCryptoStore, useFiatStore } from "@/store";
import { ActionIcon, Box, Button, Container, Flex, Group, Input, NumberInput, Select, Text } from "@mantine/core";
import cls from '../../app/root.module.css';
import { IconArrowsExchange, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { useState } from "react";

export function BuySellFilter() {
    const { cryptoSelected, setCryptoSelected } = useCryptoStore();
    const { fiatSelected, setFiatSelected } = useFiatStore();
    const [amtCurrency, setAmtCurrency] = useState<string>('fiat');
    const [paymentMethod, setPaymentMethod] = useState<string>('ALL');
    const [isUpdate, setIsUpdate] = useState<boolean>(true);

    const cryptos = [
        'USDT',
        'BTC',
        'ETH',
        'BSC',
        'SOL',
        'AVAX',
        'TRX',
        'MATIC',
        'DOGE'
    ]

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

    const fiatList: fiatType = {
        'ALL': {
            label: "All-Fiats", key: 'ALL', value: 'ALL', list: {
                'ALL': { label: "ALL-Payment Method", key: 'ALL', value: 'ALL' },
            }
        },
        'INR': {
            label: "INR-Indian Rupee", key: 'INR', value: 'INR', list: {
                'ALL': { label: "ALL-Payment Method", key: 'ALL', value: 'ALL' },
                'UPI': { label: "UPI-Unified Payments Interface", key: 'UPI', value: 'UPI' },
                'IMPS': { label: "IMPS-Immediate Payment Service", key: 'IMPS', value: 'IMPS' },
                'NEFT': { label: "NEFT-National Electronic Funds Transfer", key: 'NEFT', value: 'NEFT' },
                'RTGS': { label: "RTGS-Real-time gross settlement", key: 'RTGS', value: 'RTGS' },
            }
        },
        'USD': {
            label: "USD-US Dollar", key: 'USD', value: 'USD', list: {
                'ALL': { label: "ALL-Payment Method", key: 'ALL', value: 'ALL' },
            }
        },
        'RUB': {
            label: "RUB-Russian Rubble", key: 'RUB', value: 'RUB', list: {
                'ALL': { label: "ALL-Payment Method", key: 'ALL', value: 'ALL' },
            }
        },
    }

    const items = cryptos.map((c, i) => (
        <Button key={i} variant={cryptoSelected === c ? 'filled' : 'light'} onClick={() => { setCryptoSelected(c) }}>{c}</Button>
    ))

    return (
        <Container size="lg" >
            <Group>
                <Button.Group>
                    {items}
                </Button.Group>
            </Group>
            <Group grow mt={16}>
                <NumberInput hideControls allowDecimal={false} placeholder="Enter Amount to filter" rightSection={
                    <ActionIcon variant="filled" size="md" aria-label="ChangeAmountCurrency" onClick={() => { setAmtCurrency(amtCurrency === 'base' ? 'fiat' : 'base') }}>
                        <IconArrowsExchange />
                    </ActionIcon>
                } rightSectionPointerEvents="all"
                    rightSectionWidth={36}
                    leftSectionWidth={64}
                    leftSectionPointerEvents="none"
                    leftSection={<ActionIcon w={56} variant="default" size="md" aria-label="AmountCurrencySymbol"><Text size="sm">{amtCurrency === 'base' ? cryptoSelected : fiatSelected === 'ALL' ? 'USD' : fiatSelected}</Text></ActionIcon>} />

                <Select
                    data={Object.values(fiatList)}
                    placeholder="Select Fiat Currency"
                    value={fiatSelected ? fiatList[fiatSelected].value : ''}
                    searchable
                    allowDeselect={false}
                    onChange={(v) => {
                        const value = v ? v : 'INR';
                        setFiatSelected(value);
                        if (value != fiatSelected) setPaymentMethod(Object.values(fiatList[value].list)[0] ? Object.values(fiatList[value].list)[0].value : '')
                    }}
                    leftSectionWidth={64}
                    leftSectionPointerEvents="none"
                    leftSection={<ActionIcon w={56} variant="default" size="md" aria-label="SelectFiatCurrency" ><Text size="sm">{fiatSelected ? fiatSelected : "NA"}</Text></ActionIcon>}
                />

                <Select
                    data={Object.values(fiatList[fiatSelected].list)}
                    placeholder="Select Payment Method"
                    value={Object.values(fiatList[fiatSelected].list)[0] ? fiatList[fiatSelected].list[paymentMethod] ? fiatList[fiatSelected].list[paymentMethod].value : '' : ''}
                    searchable
                    allowDeselect={false}
                    onChange={(value) => { setPaymentMethod(value ? value : '') }}
                    leftSectionWidth={64}
                    leftSectionPointerEvents="none"
                    leftSection={<ActionIcon w={56} variant="default" size="md" aria-label="SelectPaymentMethod" ><Text size="sm">{paymentMethod ? paymentMethod : 'NA'}</Text></ActionIcon>}
                />
                <Flex gap="md"
                    justify="flex-end"
                    align="center"
                    direction="row"
                    wrap="nowrap">
                    <Text>{isUpdate ? `Refresh in 10s` : `Update Paused`}</Text>
                    {
                        isUpdate ?
                            <ActionIcon variant="filled" size="lg" aria-label="PauseRefresh" onClick={() => { setIsUpdate(false) }}><IconPlayerPause /></ActionIcon> :
                            <ActionIcon variant="filled" size="lg" aria-label="PauseRefresh" onClick={() => { setIsUpdate(true) }}><IconPlayerPlay /></ActionIcon>
                    }
                </Flex>
            </Group>
        </Container>
    );
}
