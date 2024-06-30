import { BuySellFilter } from "@/components/BuySellFilter/BuySellFilter";
import { cryptoList, fiatList } from "@/store";
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: { pagetype: string, cryptosymbol: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const pagetype = params.pagetype ? params.pagetype.toLowerCase() === 'buy' ? params.pagetype.toLowerCase() : "sell" : "buy";
    const cryptosymbol = params.cryptosymbol ? params.cryptosymbol.toUpperCase() : 'USDT_ALL';
    const splitparam = cryptosymbol.split('_');
    const cryptoparam = splitparam[0] && cryptoList[splitparam[0]] ? splitparam[0] : 'USDT';
    const fiatparam = splitparam[1] && fiatList[splitparam[1]] ? splitparam[1] : 'ALL';

    return {
        title: pagetype === 'buy' ? `Buy ${cryptoparam} with ${fiatparam === 'ALL' ? `any FIAT` : fiatparam} | LocalCrypto P2P` : `Sell ${cryptoparam} for ${fiatparam === 'ALL' ? `any FIAT` : fiatparam} | LocalCrypto P2P`,
        description: pagetype === 'buy' ? `LocalCrypto is the best platform for directly buying ${cryptoList[cryptoparam].value}-${cryptoList[cryptoparam].label} using ${fiatparam === "ALL" ? '' : fiatList[fiatparam].value + "-"}${fiatparam === 'ALL' ? `any FIAT currency` : fiatList[fiatparam].label} from person to person (P2P). It is the first platform to implement the Self-KYC verification model, allowing users to verify buyer's identity themselves.` : `LocalCrypto is the best platform for directly selling ${cryptoList[cryptoparam].value}-${cryptoList[cryptoparam].label} for ${fiatparam === "ALL" ? '' : fiatList[fiatparam].value + "-"}${fiatparam === 'ALL' ? `any FIAT currency` : fiatList[fiatparam].label} from person to person (P2P). It is the first platform to implement the Self-KYC verification model, allowing users to verify buyer's identity themselves.`
    }
}

export async function generateStaticParams() {
    const paramList = ["buy", "sell"].map((t) => {
        Object.values(cryptoList).map((c) => {
            Object.values(fiatList).map((f) => {
                return {
                    pagetype: t,
                    cryptosymbol: `${c.value}_${f.value}`
                }
            })
        })
    })

    return paramList
}

export default function Buy({ params }: { params: { pagetype: string, cryptosymbol: string } }) {

    return (
        <BuySellFilter params={params} />
    )
}