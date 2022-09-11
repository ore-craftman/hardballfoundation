import {
  Flex,
  Image,
  Stack,
  Box,
  Button,
  Container,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";

export const Header = ({
  contactScrollHandler,
}: {
  contactScrollHandler: any;
}) => {
  const [displayNav, setDisplayNav] = useState(false);

  window.onload = () => {
    if (displayNav) {
      setDisplayNav(false);
    }
    return;
  };

  return (
    <Container maxW="container.xl" mx="auto" position="relative">
      <Flex
        justifyContent="space-between"
        alignSelf="center"
        direction={["row"]}
      >
        <Image src="/asset/logo.svg" width="100px" height="90px" />

        <Stack
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          width={["100%", "80%", "75%"]}
          display={[displayNav ? "flex" : "none", "flex"]}
          position={["absolute", "static"]}
          top={["5em", "0em"]}
          left={["0em"]}
          bgColor={["#ffffff83", "transparent"]}
          backdropFilter="blur(10px)"
          py={["2em", "0em"]}
          style={{ zIndex: 10 }}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width={["100%", "50%", "45%"]}
            direction={["column", "row"]}
          >
            {navItems.map((item) => {
              return (
                <Box
                  py={["0.3em", "0em"]}
                  my={["0.4em", "0em"]}
                  _hover={{ color: "#ED2123" }}
                  color={
                    window.location.pathname === item.link
                      ? "#ED2123"
                      : "blackAlpha.900"
                  }
                  key={item.link}
                >
                  {item.title === "Contact Us" ? (
                    <Text cursor="pointer" onClick={contactScrollHandler}>
                      {item.title}
                    </Text>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}
                </Box>
              );
            })}
          </Flex>

          <a
            href="https://paystack.com/pay/hardballfoundation"
            target="_blank"
            rel="noreffer"
          >
            <Button
              colorScheme="red"
              variant="outline"
              color="#fff"
              borderColor="#ED2123"
              bgColor="#ED2123"
              my={["0.4em", "0em"]}
            >
              Donate
            </Button>
          </a>
        </Stack>

        <IconButton
          aria-label="display-nav"
          icon={displayNav ? <FaRegWindowClose /> : <FaBars />}
          alignSelf="center"
          display={["flex", "none"]}
          onClick={() => setDisplayNav(!displayNav)}
          style={{ zIndex: 10 }}
        />
      </Flex>
    </Container>
  );
};
