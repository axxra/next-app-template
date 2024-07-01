import { Container, Stack, Text, Title, Box } from "@mantine/core";

export default function Custom404() {
    return (
        <Container size={"lg"} pt={"xl"} style={{ height: "100%" }}>
            <Stack justify={"center"} align={"center"} style={{ height: "100%" }}>
                <Title >404 | Page Not Found</Title>
                <Text c="dimmed" size="lg" ta="center" >
                    Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
                    been moved to another URL.
                </Text>
            </Stack>
        </Container>
    )
}