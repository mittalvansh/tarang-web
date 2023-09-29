"use client";

import { Box, Flex, Group, Stack, Text, Button } from "@mantine/core";
import { IconPlayerPlay, IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function SubMainSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="#D0EB4C"
      px={isMobileView ? "1rem" : "6.25rem"}
      py={isMobileView ? "4rem" : "6rem"}
    >
      <Flex
        direction={isMobileView ? "column" : "row"}
        align="center"
        gap={"3rem"}
      >
        <Text hiddenFrom="sm" size={"2.5rem"} ta={"right"} c="#252525">
          Glimmer in the wake of escapism
        </Text>
        <Box
          style={styles.container}
          w={isMobileView ? "20.5rem" : "32rem"}
          h={isMobileView ? "20.5rem" : "32rem"}
        >
          <video loop muted autoPlay style={styles.video}>
            <source
              src="https://res.cloudinary.com/prajjwalcdn/video/upload/v1695590772/video_seh4ks.mp4"
              type="video/mp4"
            />
          </video>
          <Group
            align="center"
            justify="center"
            w={isMobileView ? "3.125rem" : "5.75rem"}
            h={isMobileView ? "3.125rem" : "5.75rem"}
            style={styles.playBtn}
          >
            <IconPlayerPlay size={isMobileView ? 20 : 40} fill="#000" />
          </Group>
        </Box>
        <Box>
          <Stack align="flex-start" justify="center" gap={"2.25rem"}>
            <Text visibleFrom="sm" size={"4rem"} c="#252525">
              Glimmer in the wake of escapism
            </Text>
            <Text
              size={isMobileView ? "1rem" : "1.25rem"}
              ta={isMobileView ? "left" : "justify"}
              c="#252525"
            >
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
              ei, at nihil tantas platonem eos. Mazim nemore singulis an ius,
              nullam ornatus nam ei.
            </Text>
            <Button
              color="black"
              size={isMobileView ? "md" : "lg"}
              mt={isMobileView ? "1rem" : "1.5rem"}
              rightSection={<IconArrowRight />}
              style={isMobileView ? { display: "block", margin: "0 auto" } : {}}
            >
              Read More
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

const styles = {
  container: {
    position: "relative",
    flexShrink: 0,
    borderRadius: "50%",
    border: "2px solid #000",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  playBtn: {
    position: "absolute",
    top: "85%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.75rem",
    border: "2px solid #000",
    background: "#D4DB82",
    cursor: "pointer",
  },
};
