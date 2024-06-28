import { Header } from '@/components/Header/Header';
import { Box } from '@mantine/core';
import cls from './root.module.css';
import { BuySellFilter } from '@/components/BuySellFilter/BuySellFilter';

export default function HomePage() {
  return (
    <Box className={cls.root}>
      <Header />
      <Box className={cls.mt16}>
        <BuySellFilter />
      </Box>
    </Box>
  );
}
