import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Box } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/components/Header/Header';
import cls from './root.module.css';

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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Box className={cls.root}>
            <Header />
            {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
