import {
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Layout } from "../../Components/Layouts/Index";

const Beneficiary = () => {
  return (
    <Layout>
      <Heading textAlign="center" my="1.5em">
        Your Information
      </Heading>

      <Container maxWidth="container.md" mx="auto">
        <form action="https://formspree.io/f/mgedgpjo" method="POST">
          <Stack
            direction={["column", "row"]}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box width={["100%", "48%"]}>
              <Input
                type="text"
                placeholder="First Name"
                name="First name"
                p="1.5em"
                boxShadow="lg"
                mb="1em"
              />

              <Input
                type="email"
                placeholder="Email Address"
                name="Last name"
                p="1.5em"
                boxShadow="lg"
                my="1em"
              />

              <Input
                type="text"
                placeholder="Residential Address"
                name="Residential address"
                p="1.5em"
                boxShadow="lg"
                my="1em"
              />

              <Input
                type="text"
                placeholder="State"
                name="state"
                p="1.5em"
                boxShadow="lg"
                my="1em"
              />
            </Box>

            <Box width={["100%", "48%"]}>
              <Input
                type="text"
                placeholder="Last Name"
                name="Last name"
                p="1.5em"
                boxShadow="lg"
                mb="1em"
              />

              <Input
                type="tel"
                placeholder="Phone Number"
                name="Phone number"
                p="1.5em"
                boxShadow="lg"
                my="1em"
              />

              <Input
                type="text"
                placeholder="City"
                name="city"
                p="1.5em"
                boxShadow="lg"
                my="1em"
              />
            </Box>
          </Stack>

          <Box>
            <Textarea
              name="Message Body"
              p="1.5em"
              boxShadow="lg"
              my="1em"
              placeholder="How can Hardball Foundation support you?"
              resize="none"
              minH="200px"
            />
          </Box>
        </form>
      </Container>
    </Layout>
  );
};

export default Beneficiary;
