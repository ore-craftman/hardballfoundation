import { Box, Heading, Image, Text } from "@chakra-ui/react";

export const IconCard = ({
  title,
  icon,
  desc,
}: {
  title: string;
  icon: string;
  desc: string;
}) => {
  return (
    <Box
      width={["100%"]}
      alignItems="center"
      borderRadius="0.6em"
      boxShadow="xl"
      my={["1em", "0em"]}
      mx={["0em", "0.4em", "1em"]}
      px={["0em", "0.4em", "1em"]}
      py="1em"
      minHeight="300px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Image src={icon} boxSize="80px" mx="auto" />
      <Heading fontSize="1.3em" color="#ED2123" fontWeight="bold" my="0.8em">
        {title}
      </Heading>
      <Text>{desc}</Text>
    </Box>
  );
};
