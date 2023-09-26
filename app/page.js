import MainAppShell from "./components/MainAppShell";
import { Box, Button, Container, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import TarangHeading from "../public/tarangHeading.svg";
import { IconArrowRight } from "@tabler/icons-react";
import HeroMain from "./components/HeroMain";

export default function Home() {
  // const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <MainAppShell>
      <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
        <video loop muted autoPlay style={styles.video}>
          <source
            src="https://res.cloudinary.com/prajjwalcdn/video/upload/v1695590772/video_seh4ks.mp4"
            type="video/mp4"
          />
        </video>
        <Box style={styles.videoOverlay}>
          <HeroMain />
        </Box>
      </Container>
      <Box style={styles.sponsorUs}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="2rem"
          wrap="wrap"
        >
          <Text size="3rem" c="#F2F2F2">
            Our sponsors
          </Text>
          <Flex align="flex-start" gap="1.5rem">
            {Array(6)
              .fill()
              .map((_, index) => (
                <Box key={index} w="10.5rem" h="6.5rem" bg="#3D3D3D"></Box>
              ))}
          </Flex>
        </Flex>
      </Box>
    </MainAppShell>
  );
}

const styles = {
  container: {
    position: "relative",
    overflow: "hidden", // Ensure video doesn't overflow the container
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // zIndex: -1,
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  },
  sponsorUs: {
    backgroundColor: "#150D0C",
    padding: "6rem 6rem 6rem 12rem",
  },
};
