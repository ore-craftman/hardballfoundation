import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { Layout } from "../../Components/Layouts/Index";
import { team } from "../../utils/team";

const Team = () => {
  const contactRefInstance = useRef(null);

  return (
    <>
      <Layout contactRef={contactRefInstance}>
        <Box
          style={{ backgroundImage: "url(/asset/about/hero.svg)" }}
          minH="60vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py="2.5em"
        >
          <ScrollTrigger
            start="-200px center"
            end="200px center"
            once={true}
            scrub={0.5}
          >
            <Tween
              from={{ y: -20, opacity: 0 }}
              to={{ y: 0, opacity: 1, duration: 2 }}
              stagger={0.5}
              ease="slow(1, 1, false)"
            >
              <Container mx="auto" maxW="container.lg">
                <Heading color="white">
                  <span style={{ color: "#ED2123" }}>Our team</span> is made up
                  of professionals and experts with diverse backgrounds, broad
                  range of experience, and technical expertise. We are united in
                  our goal of enabling sustainable livelihoods for men and women
                  across Africa.
                </Heading>
              </Container>
            </Tween>
          </ScrollTrigger>
        </Box>

        <ScrollTrigger
          start="-200px center"
          end="200px center"
          once={true}
          scrub={0.5}
        >
          <Tween
            from={{ y: -20, opacity: 0 }}
            to={{ y: 0, opacity: 1, duration: 2 }}
            stagger={0.5}
            ease="slow(1, 1, false)"
          >
            <Container mx="auto" maxW="container.xl" my="4em">
              <Heading textAlign="center" mb="1.5em">
                Our Team
              </Heading>
              <Flex flexWrap={["wrap", "nowrap"]} mx="auto" my="1em">
                {team.map((person, i) => {
                  if (i < 3) {
                    return (
                      <Box
                        key={person.name}
                        m={["0em", "1em", "1.5em"]}
                        textAlign="center"
                        width={["100%", "33%"]}
                      >
                        <Image
                          src={person.image}
                          alt={"hardball foundation " + person.name}
                          boxSize="180px"
                          mx="auto"
                        />

                        <Heading
                          as="h4"
                          fontSize="1.1em"
                          color="#ED2123"
                          mt="0.5em"
                        >
                          {person.name}
                        </Heading>
                        <Text>{person.role}</Text>
                      </Box>
                    );
                  } else {
                    return null;
                  }
                })}
              </Flex>

              <Flex flexWrap={["wrap", "nowrap"]} mx="auto" my="1em">
                {team.map((person, i) => {
                  if (i > 2) {
                    return (
                      <Box
                        key={person.name}
                        m={["0em", "1em", "1.5em"]}
                        textAlign="center"
                        width={["100%", "33%"]}
                      >
                        <Image
                          src={person.image}
                          alt={"hardball foundation " + person.name}
                          boxSize="180px"
                          mx="auto"
                        />

                        <Heading
                          as="h4"
                          fontSize="1.1em"
                          color="#ED2123"
                          mt="0.5em"
                        >
                          {person.name}
                        </Heading>
                        <Text>{person.role}</Text>
                      </Box>
                    );
                  } else {
                    return null;
                  }
                })}
              </Flex>
            </Container>
          </Tween>
        </ScrollTrigger>
      </Layout>
    </>
  );
};

export default Team;
