import { Header } from '@/components/Header/Header';
import { Box } from '@mantine/core';
import cls from './root.module.css';

export default function HomePage() {
  return (
    <Box className={cls.root}>
      <Header />
    </Box>
  );
}
