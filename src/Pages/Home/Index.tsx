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
        <Box
          backgroundImage="url('/asset/home/hero.svg')"
          backgroundPosition={["left bottom", "center center"]}
          backgroundSize={["100vh", "100%"]}
          backgroundRepeat="no-repeat"
          height={["50vh", "85vh"]}
          display="flex"
          alignItems="center"
        >
          <Container maxW="container.xl" mx="auto" px="1em">
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
                <Heading
                  as="h2"
                  fontSize={["2.4em", "2.5em", "5em"]}
                  fontWeight="bold"
                  // mb="1.5em"
                  // my={["0em", "1em", "0em"]}
                  color="#fff"
                  width={["100%", "80%", "70%"]}
                >
                  Building sustainable Livelihoods for African Youths.
                </Heading>
              </Tween>
            </ScrollTrigger>
          </Container>
        </Box>

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
              <Box textAlign="center">
                <Heading
                  fontWeight="bold"
                  fontSize="2em"
                  ref={aboutRef}
                  mb="1em"
                >
                  Who We Are
                </Heading>
                <Text width={["98%", "90%", "70%"]} mx="auto" fontSize="1.3em">
                  Hardball foundation is a non-profit organisation building
                  sustainable livelihoods to reduce economic inequalities
                  through decent work.
                </Text>

                <Text
                  width={["98%", "90%", "70%"]}
                  mx="auto"
                  fontSize="1.3em"
                  my="1em"
                >
                  Our programs and initiatives align with the United Nations
                  Sustainable Development Goal (SDG) 8, which promotes sustained
                  inclusive and sustainable economic growth, full and productive
                  employment, and decent work for all.
                </Text>
                <Text
                  mx="auto"
                  w={["98%", "90%", "70%"]}
                  // mt="0.8em"
                  fontSize="1.3em"
                >
                  Our strategy for building sustainable livelihoods is captured
                  in a three-pronged approach for impact-driven project
                  implementation
                </Text>

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
                  alignItems="flex-start"
                  color="white"
                >
                  <Box width={["100%", "48%", "40%"]}>
                    <Heading color="#ED2123" fontSize="3em" mb="0.5em">
                      Our Vision
                    </Heading>
                    <Text fontSize="1.4em">
                      {/* Building sustainable livelihoods to reduce economic
                      inequalities. <br /> Our programmes and initiatives are in
                      line with the United Nations Sustainable Development Goal
                      Eight (SDG8) which is to promote sustained, inclusive and
                      sustainable economic growth, full and productive
                      employment and decent work for all. */}
                      We are building sustainable livelihoods to reduce economic
                      inequalities.
                    </Text>
                  </Box>
                  <Box width={["100%", "48%", "30%"]} textAlign="right">
                    <Heading color="#ED2123" fontSize="3em" mb="0.5em">
                      Our Mission
                    </Heading>
                    <Text fontSize="1.4em">
                      {/* To transform the lives and livelihoods of 10,000
                      beneficiaries by 2032, through providing access to
                      training and funding to build a sustainable income. */}
                      To transform the lives of 10,00 beneficiaries by 2023, by
                      providing access to training and funding to build a
                      sustainable income.
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
              <Stack
                direction={["column", "row"]}
                justifyContent="space-between"
                alignItems="center"
                pb="2em"
              >
                <Box width={["100%", "45%"]}>
                  <Heading fontWeight="bold" fontSize="3em" mb="1.5em">
                    Our Work
                  </Heading>
                  <Text fontSize="1.2em" fontWeight="bold">
                    According to the Nigerian National Bureau of Statistics
                    (NNBS), 39.1% of Nigerians lived below the international
                    poverty line valued at $1.90 (about N700) per person daily
                    between the years 2018 - 2019.
                  </Text>

                  <Text my="1em" fontSize="1.2em">
                    Through our strategic approach, we are committed to helping
                    our beneficiaries thrive, and improve the outcomes for lives
                    and livelihoods.
                  </Text>

                  <Text my="1em" fontSize="1.2em">
                    These initiatives enable our beneficiaries to improve their
                    standard of living and those of their dependents, contribute
                    to local and national economic growth and reduce the number
                    of people in extreme poverty.
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
                  <Heading
                    fontWeight="bold"
                    fontSize="3em"
                    mb=".8em"
                    textAlign="right"
                    width={["100%", "90%"]}
                  >
                    Make a Difference
                  </Heading>
                  <Text
                    mb="1.5em"
                    fontSize="1.2em"
                    width={["100%", "90%"]}
                    textAlign="right"
                  >
                    We are determined to move the needle, but we cannot do it on
                    our own. We need your support and partnership as we work to
                    improve the livelihoods of the most vulnerable people.
                    Whichever way you decide to do it, supporting us means
                    choosing to help millions of young Africans build better
                    futures.
                  </Text>

                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    width={["100%", "90%"]}
                  >
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
              py={["1em"]}
            >
              <Heading
                color="white"
                textAlign="center"
                fontSize="3em"
                mb=".8em"
              >
                Become a beneficiary today.
              </Heading>
              <Center>
                <Link to="/beneficiary">
                  <Button color="red">Apply Now</Button>
                </Link>
              </Center>
            </Box>
          </Tween>
        </ScrollTrigger>
      </Layout>
    </>
  );
};

export default Home;
