import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { Link } from "react-router-dom";
import { IconCard } from "../../Components/Cards/IconCard";
import { Layout } from "../../Components/Layouts/Index";
import { ways } from "../../utils/ways";

const Home = () => {
  const contactRefInstance = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <Layout contactRef={contactRefInstance}>
        <Container maxW="container.xl" mx="auto" py="2em">
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
              <Stack
                direction={["column", "row"]}
                justifyContent="space-between"
                alignItems="center"
                pb="2em"
              >
                <Box width={["100%", "50%"]}>
                  <Heading
                    as="h2"
                    fontSize={["2.5em", "3em", "4em"]}
                    fontWeight="bold"
                    mb="1.5em"
                  >
                    Building sustainable livelihoods for{" "}
                    <span style={{ color: "#ED2123" }}>African Youths</span>
                  </Heading>

                  <Box
                    width="5em"
                    height="5em"
                    display="flex"
                    borderRadius="2.5em"
                    justifyContent="center"
                    alignItems="center"
                    bgGradient="linear(152.48deg, rgba(237, 33, 35, 0.97) 8.91%, #B30A0C 108.38%)"
                    color="white"
                    fontSize="13px"
                    fontWeight="medium"
                    cursor="pointer"
                    // @ts-ignore
                    onClick={() => aboutRef.current.scrollIntoView()}
                  >
                    <Text>
                      Sroll <br /> Down
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Image
                    src="/asset/home/hero.svg"
                    alt="hardball foundation"
                    objectFit="contain"
                    mt={["-1em", "-3em", "-4em"]}
                  />
                </Box>
              </Stack>
            </Tween>
          </ScrollTrigger>

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
              <Box textAlign="center">
                <Heading fontWeight="bold" fontSize="2em" ref={aboutRef}>
                  Who We Are
                </Heading>
                <Text width={["98%", "90%", "55%"]} mx="auto">
                  Hardball foundation is a non-profit organisation building
                  sustainable livelihoods to reduce economic inequalities
                  through decent work.
                </Text>

                <Heading fontSize="1.2em" fontWeight="medium" mt="3em">
                  We achieve this in 3 ways:
                </Heading>

                <Flex
                  my="3em"
                  justifyContent="space-evenly"
                  flexWrap={["wrap"]}
                >
                  {ways.map((way) => {
                    return (
                      <Box key={way.title} width={["100%", "32%", "28%"]}>
                        <IconCard
                          title={way.title}
                          icon={way.icon}
                          desc={way.desc}
                        />
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Tween>
          </ScrollTrigger>
        </Container>

        <Box
          style={{ backgroundImage: "url(/asset/home/vision_banner.svg)" }}
          minH="60vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="container.xl" mx="auto">
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
                <Stack
                  direction={["column", "row"]}
                  justifyContent="space-between"
                  alignItems="center"
                  color="white"
                >
                  <Box width={["100%", "48%", "40%"]}>
                    <Heading color="#ED2123">Our Vision</Heading>
                    <Text>
                      Building sustainable livelihoods to reduce economic
                      inequalities. Our programmes and initiatives are in line
                      with the United Nations Sustainable Development Goal (SDG)
                      8 which is to promote sustained inclusive and sustainable
                      economic growth, full and productive employment and decent
                      work for all.
                    </Text>
                  </Box>
                  <Box width={["100%", "48%", "30%"]} textAlign="right">
                    <Heading color="#ED2123">Our Mission</Heading>
                    <Text>
                      To transform the lives of 10,000 beneficiaries, providing
                      access to training and funding to build a sustainable
                      income by 2032.
                    </Text>
                  </Box>
                </Stack>
              </Tween>
            </ScrollTrigger>
          </Container>
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
            <Container maxW="container.xl" mx="auto" py="4em">
              <Heading
                fontWeight="bold"
                fontSize="2em"
                mb="1.5em"
                textAlign="center"
              >
                Our Work
              </Heading>
              <Stack
                direction={["column", "row"]}
                justifyContent="space-between"
                alignItems="center"
                pb="2em"
              >
                <Box width={["100%", "45%"]}>
                  <Text>
                    An official survey by the Nigerian National Bureau of
                    Statistics (NNBS) done between the years 2018 - 2019, showed
                    that 39.1% of Nigerians lived below the international
                    poverty line valued at $1.90 (about N700) per person per
                    day. We are committed to building sustainable livelihoods
                    for our beneficiaries through our initiatives. These
                    initiatives enable our beneficiaries to improve their
                    standard of living and that of their dependents, contribute
                    to local and national economic growth and reduce the number
                    of people living in extreme poverty.
                  </Text>
                </Box>
                <Box width={["100%", "45%"]}>
                  <Image
                    src="/asset/home/our_work.svg"
                    alt="hardball foundation"
                    objectFit="contain"
                  />
                </Box>
              </Stack>
            </Container>
          </Tween>
        </ScrollTrigger>

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
            <Container maxW="container.xl" mx="auto" py="4em">
              <Heading
                fontWeight="bold"
                fontSize="2em"
                mb="1.5em"
                textAlign="center"
              >
                Make a Difference
              </Heading>
              <Stack
                direction={["column", "row"]}
                justifyContent="space-between"
                alignItems="center"
                pb="2em"
              >
                <Box width={["100%", "40%"]}>
                  <Image
                    src="/asset/home/difference.svg"
                    alt="hardball foundation"
                    objectFit="contain"
                    // width={["100%", "400px", "300px"]}
                    // height={["100%", "400px", "300px"]}
                  />
                </Box>
                <Box width={["100%", "45%"]}>
                  <Text mb="1.5em" width={["100%", "90%", "75%"]}>
                    10% of the world&apos;s population, who struggle to fulfill
                    their basic needs. Your financial gift enables HardBall to
                    help millions of people in the developing Young Africas
                    build better futures.
                  </Text>

                  <Button
                    colorScheme="red"
                    bgColor="#ED2123"
                    my={["0.4em", "0em"]}
                  >
                    <a
                      href="https://paystack.com/pay/hardballfoundation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate Now
                    </a>
                  </Button>
                </Box>
              </Stack>
            </Container>
          </Tween>
        </ScrollTrigger>

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
            <Box
              style={{ backgroundImage: "url(/asset/home/cta_banner.svg)" }}
              minH="48vh"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Heading color="white" textAlign="center" mb="2">
                Become A Beneficiary Now
              </Heading>
              <Center>
                <Button color="red">Apply Now</Button>
              </Center>
            </Box>
          </Tween>
        </ScrollTrigger>
      </Layout>
    </>
  );
};

export default Home;
