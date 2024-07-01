import { Box, Container, Text } from "@mantine/core";
import cls from "./Footer.module.css";

export default function Footer() {
    return (
        <Box component="footer" className={cls.footer}>
            <Container size={"lg"} className={cls.inner}>
                <Text>LocalCrypto Footer</Text>
            </Container>
        </Box>
    );
}
