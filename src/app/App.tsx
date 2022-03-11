import { Box, Flex, Link, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import Camouflage from "../tabs/Camouflage";
import Decamouflage from "../tabs/Decamouflage";
import TextTransforms from "../tabs/TextTransforms";

const copyrightH = "40px";
const headerH = "80px";
const mainH = `calc(75vh + (10vh - ${copyrightH}) + ( 15vh - ${headerH}) )`;

export const App = () => {
  const light_200_dark_600 = useColorModeValue("light.200", "dark.600");
  const light_300_dark_400 = useColorModeValue("light.300", "dark.400");
  const [tab, set_tab] = useState("camouflage");
  return (
    <Box minH="100vh" bg={useColorModeValue("light.50", "dark.800")}>
      <Flex
        minH={headerH}
        p={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex direction="column">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex mt="2" className="donate">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.at4re.net/f/thread-1167.html"
            >
              <img
                src="https://www.at4re.net/f/images/Donate.png"
                alt="Donate"
              />
            </a>
          </Flex>
        </Flex>
        <Flex>
          <Heading size="lg">Text Camouflage</Heading>
        </Flex>
        <Flex>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.at4re.net/f/"
          >
            <img
              style={{
                width: "404px",
                height: "80px",
              }}
              src="https://www.at4re.net/f/images/logo.png"
              alt="AT4RE"
            />
          </a>
        </Flex>
      </Flex>
      <Flex
        minH={mainH}
        h="100%"
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue("light.100", "dark.700")}
      >
        <Flex w="720px" minH="720px" bg={light_200_dark_600} direction="column">
          <Flex w="100%" bg={useColorModeValue("light.200", "dark.500")}>
            <Flex
              p="3"
              bg={
                tab === "camouflage" ? light_200_dark_600 : light_300_dark_400
              }
              cursor="pointer"
              onClick={() => {
                set_tab("camouflage");
              }}
            >
              Camouflage
            </Flex>
            <Flex
              p="3"
              bg={
                tab === "decamouflage" ? light_200_dark_600 : light_300_dark_400
              }
              cursor="pointer"
              onClick={() => {
                set_tab("decamouflage");
              }}
            >
              Decamouflage
            </Flex>
            <Flex
              p="3"
              bg={
                tab === "text-transforms"
                  ? light_200_dark_600
                  : light_300_dark_400
              }
              cursor="pointer"
              onClick={() => {
                set_tab("text-transforms");
              }}
            >
              Text transforms
            </Flex>
          </Flex>
          <Flex p="3" w="100%">
            {tab === "camouflage" && <Camouflage />}
            {tab === "decamouflage" && <Decamouflage />}
            {tab === "text-transforms" && <TextTransforms />}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h={copyrightH}
        p={3}
        alignItems="center"
        justifyContent="center"
      >
        <Flex>
          <Link
            color="brand.400"
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/r333t/text-camouflage"
          >
            Source code
          </Link>
          &nbsp; v0.0.2 - All rights reserved to&nbsp;
          <Link
            color="brand.500"
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.at4re.net/f/user-3678.html"
          >
            R333T
          </Link>
          &nbsp; from&nbsp;
          <Link
            color="brand.500"
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.at4re.net/f/index.php"
          >
            AT4RE
          </Link>
          &nbsp;
        </Flex>
      </Flex>
    </Box>
  );
};
