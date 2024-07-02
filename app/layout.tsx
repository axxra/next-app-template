import "./global.css"
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Box, Flex, Container, Stack } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import cls from "./root.module.css";

export const metadata = {
  title: 'LocalCrypto P2P Buy & Sell',
  description: 'LocalCrpto is the place to trade your crypto and fiat directly from person to person. LocalCrpto also can be used a wallet platform to store popular cryptocurrencies like Bitcoin, Litecoin, Dogecoin, Ethereum, Tether, Binance Smart Chain, Tron etc.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* <meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=1' name='viewport' /> */}
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={"dark"} >
          <Box className={cls.root}>
            <Header />
            <Box style={{ minHeight: "calc(100vh - 128px)" }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
