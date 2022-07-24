import {
  Text,
  Box,
  Stack,
  Image,
  Container,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { ContactForm } from "../Contact/Form";

export const Footer = ({ contactRef }: { contactRef?: any }) => {
  return (
    <Box pt="2em">
      {window.location.pathname !== "/beneficiary" && (
        <Box ref={contactRef && contactRef}>
          <ContactForm />
        </Box>
      )}

      <Container
        mx="auto"
        maxW="container.xl"
        pb="1.5em"
        pt="2.5em"
        boxShadow="0px -12px 25px rgba(241, 223, 223, 0.5)"
      >
        <Stack direction={["column", "row"]} justifyContent="space-between">
          <Box width={["100%", "33%", "30%"]}>
            <Image src="/asset/logo.svg" width="120px" height="100px" />
          </Box>

          <Box width={["100%", "33%", "30%"]}>
            <Heading color="#ED2123" fontSize="1.1em" mb="0.5em">
              Contact Us
            </Heading>

            <Text>
              Email:{" "}
              <a href="mailto:info@hardballfoundation.org">
                info@hardballfoundation.org
              </a>
            </Text>

            <Text>
              Contact: <a href="tel:234912398306">+234912398306</a>
            </Text>
          </Box>

          <Box width={["100%", "33%", "30%"]}>
            <Heading color="#ED2123" fontSize="1.1em" mb="0.5em">
              On social Networks
            </Heading>
            <Flex>
              <a href="#">
                <Image
                  src="/asset/social_icons/instagram.svg"
                  width="22px"
                  height="22px"
                  mr="0.5em"
                />
              </a>
              <a href="#">
                <Image
                  src="/asset/social_icons/linkedin.svg"
                  width="22px"
                  height="22px"
                  mr="0.5em"
                />
              </a>

              <a href="#">
                <Image
                  src="/asset/social_icons/twitter.svg"
                  width="22px"
                  height="22px"
                  mr="0.5em"
                />
              </a>
              <a href="#">
                <Image
                  src="/asset/social_icons/facebook.svg"
                  width="22px"
                  height="22px"
                />
              </a>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
