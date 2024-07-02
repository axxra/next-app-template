"use client";

import { cryptoList, fiatList, useCryptoStore, useFiatStore, useMenuStore } from "@/store";
import { ActionIcon, Box, Button, Container, Flex, Group, NumberInput, Select, SelectProps, Text, Title, rem } from "@mantine/core";
import { IconArrowsExchange, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { UpdateData } from "../UpdateData/UpdateData";
import { useRouter } from "next/navigation";

export function BuySellFilter({ params }: { params: { pagetype: string, cryptosymbol: string } }) {
    const router = useRouter();
    const pagetype = params.pagetype ? params.pagetype.toLowerCase() === 'buy' ? params.pagetype.toLowerCase() : "sell" : "buy";
    const cryptosymbol = params.cryptosymbol ? params.cryptosymbol.toUpperCase() : 'USDT_ALL';
    const splitparam = cryptosymbol.split('_');
    const cryptoparam = splitparam[0] && cryptoList[splitparam[0]] ? splitparam[0] : 'USDT';
    const fiatparam = splitparam[1] && fiatList[splitparam[1]] ? splitparam[1] : 'ALL';

    const { cryptoSelected, setCryptoSelected } = useCryptoStore();
    const { fiatSelected, setFiatSelected } = useFiatStore();
    const { menu, setMenu } = useMenuStore();
    const [amtCurrency, setAmtCurrency] = useState<string>('fiat');
    const [paymentMethod, setPaymentMethod] = useState<string>('ALL');

    useEffect(() => {
        setCryptoSelected(cryptoparam);
        setFiatSelected(fiatparam);
        setMenu(pagetype);

    }, [])

    const items = Object.values(cryptoList).map((c, i) => (
        <Button key={i} variant={cryptoSelected === c.value ? 'filled' : 'light'}
            component="a"
            href={"/p2p/" + menu + "/" + c.value + "_" + fiatSelected}
            onClick={(event) => {
                event.preventDefault();
                router.push(`/p2p/${menu}/${c.value}_${fiatSelected}`, { scroll: false })
                //setCryptoSelected(c.value)
            }}>{c.value}</Button>
    ))

    const renderFiatOption: SelectProps['renderOption'] = ({ option, checked }) => (
        <Text size="sm" component='a' href={"/p2p/" + menu + "/" + cryptoSelected + "_" + option.value} style={{ width: rem("100%") }} onClick={(e) => { e.preventDefault() }}>
            <Group flex="1" gap="xs">
                {checked && <IconCheck size={18} opacity={0.6} stroke={1.5} />}
                {/* {option.value + "-" + option.label} */}
                {option.label}
            </Group>
        </Text>
    );

    /*     const renderPaymentOption: SelectProps['renderOption'] = ({ option, checked }) => (
            <Text size="sm" >
                <Group flex="1" gap="xs" >
                    {checked && <IconCheck size={18} />}
                    {option.value + "-" + option.label}
                </Group>
            </Text>
        ); */

    return (
        <Container size="lg">
            <Flex pb={"lg"} pt={"lg"} gap='sm'
                justify="flex-start"
                align="center" direction="column">
                <Title>
                    {`${pagetype === 'buy' ? 'Buy' : 'Sell'} ${cryptoList[cryptoparam].label} ${pagetype === 'buy' ? 'using' : 'for'} ${fiatparam === 'ALL' ? `any FIAT currency` : `${fiatList[fiatparam].label}`}`}
                </Title>
                <Box w={1000}>
                    <Text mb="md">
                        LocalCrypto is the best platform for directly {pagetype === 'buy' ? "buying" : "selling"} {cryptoList[cryptoparam].value}-{cryptoList[cryptoparam].label} {pagetype === 'buy' ? "using" : "for"} {fiatparam === "ALL" ? '' : fiatList[fiatparam].value + "-"}{fiatparam === 'ALL' ? `any FIAT currency` : fiatList[fiatparam].label} from person to person (P2P). It is the first platform to implement the Self-KYC verification model, allowing users to verify buyer's identity themselves.
                    </Text>
                </Box>
            </Flex>
            <Group>
                <Button.Group>
                    {items}
                </Button.Group>
            </Group>
            <Group grow pt={"lg"}>
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
                    data={Object.values(fiatList).map((f) => { return { value: f.value, label: f.value + "-" + f.label } })}
                    placeholder="Select Fiat Currency"
                    value={fiatSelected ? fiatList[fiatSelected].value : ''}
                    searchable
                    clearable
                    allowDeselect={false}
                    onChange={(v) => {
                        if (v) {
                            router.push(`/p2p/${menu}/${cryptoSelected}_${v ? v : 'ALL'}`, { scroll: false });
                        }
                    }}
                    /* leftSectionWidth={64}
                    leftSectionPointerEvents="none"
                    leftSection={<ActionIcon w={56} variant="default" size="md" aria-label="SelectFiatCurrency" ><Text size="sm">{fiatSelected ? fiatSelected : "NA"}</Text></ActionIcon>} */
                    renderOption={renderFiatOption}
                />

                <Select
                    data={Object.values(fiatList[fiatSelected].list).map((f) => { return { value: f.value, label: f.value + "-" + f.label } })}
                    placeholder="Select Payment Method"
                    value={Object.values(fiatList[fiatSelected].list)[0] ? fiatList[fiatSelected].list[paymentMethod] ? fiatList[fiatSelected].list[paymentMethod].value : '' : ''}
                    searchable
                    clearable
                    allowDeselect={false}
                    onChange={(v) => {
                        v && setPaymentMethod(v)
                    }}
                /* leftSectionWidth={64}
                leftSectionPointerEvents="none"
                leftSection={<ActionIcon w={56} variant="default" size="md" aria-label="SelectPaymentMethod" ><Text size="sm">{paymentMethod ? paymentMethod : 'NA'}</Text></ActionIcon>} */
                //renderOption={renderPaymentOption}
                />
                <Flex gap="md"
                    justify="flex-end"
                    align="center"
                    direction="row"
                    wrap="nowrap">
                    <UpdateData />
                </Flex>
            </Group>
        </Container>
    );
}
