import { Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <Container
      maxW="container.xl"
      mx="auto"
      minH="99vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="/asset/email_confimation.svg" width="245px" height="250px" />
      <Heading my="1em">Successful!</Heading>
      <Text
        width={["100%", "80%", "65%"]}
        my="1em"
        mx="auto"
        textAlign="center"
      >
        Thank you for applying to be a beneficiary in our organization! An email
        would be sent to you soon.
      </Text>
      <Button colorScheme="red" borderRadius="0.6em">
        <Link to="/">Go back to home</Link>
      </Button>
    </Container>
  );
};

export default Confirmation;
