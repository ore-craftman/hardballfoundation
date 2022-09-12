import {
  Box,
  Container,
  Stack,
  Image,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export const ContactForm = () => {
  return (
    <Box position="relative" minHeight="55vh" my="2em">
      <Container maxW="container.xl" mx="auto">
        <Stack
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          pb="2em"
        >
          <Box width={["100%", "48%", "35%"]}>
            <Heading>Contact Us</Heading>
            {/* <Text>
              Want to find out more about us? Just leave us a message here.
            </Text> */}
            <form action="https://formspree.io/f/mayvrlog" method="POST">
              <Input
                placeholder="Email Address"
                bgColor="#FDDEDE"
                py="1.5em"
                my="1.2em"
                name="email"
                type="email"
              />

              <Textarea
                placeholder="Message"
                bgColor="#FDDEDE"
                py="1.5em"
                minHeight="250px"
                resize="none"
                name="message"
              />

              <Button
                type="submit"
                colorScheme="red"
                bgColor="#ED2123"
                my="1.2em"
              >
                Send Now
              </Button>
            </form>
          </Box>
        </Stack>
      </Container>
      <Image
        src="/asset/contact/contact_banner.svg"
        alt="hardball foundation"
        objectFit="contain"
        position="absolute"
        right="0"
        top="0"
        display={["none", "block"]}
        height={["100%", "200px", "500px"]}
      />
    </Box>
  );
};
