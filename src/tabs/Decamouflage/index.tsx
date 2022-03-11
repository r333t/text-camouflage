import {
  Box,
  Button,
  Flex,
  Icon,
  Textarea,
  useToast,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BsClipboardCheck, BsPencil } from "react-icons/bs";

import { alphabet, alphCamo } from "../cryptos";

const getAlpha = (char: string) => {
  if (alphabet[alphCamo.indexOf(char.toUpperCase())]) {
    return alphabet[alphCamo.indexOf(char.toUpperCase())];
  } else {
    // console.log(" may not found =>", char);

    return char.toUpperCase();
  }
};

const decamouflage = (text: string) => {
  let local_txt = "" + text;
  let arrW = local_txt.split(" ");
  // console.log("arrW=>", arrW);

  arrW.forEach((word, idx) => {
    // console.log("word=>", word);
    let arrWord = word.split("");
    // console.log("arrWord=>", arrWord);

    arrWord.forEach((alpha, idxx) => {
      // console.log("alpha=>", alpha);
      // console.log("getAlpha(alpha)=>", getAlpha(alpha));
      arrWord[idxx] = getAlpha(alpha);
    });
    arrW[idx] = arrWord.join("");
  });
  return arrW.join(" ");
};

const Decamouflage: React.FC = () => {
  const toast = useToast();

  const [edit_mode, set_edit_mode] = React.useState(false);

  const [camo_text, set_camo_text] = React.useState(
    "@Я@Ꞵ Է€@ꭑ 4 Я€Ѷ€ЯՏ€ €ЍԌᴉЍ€€ЯᴉЍԌ"
  );
  const [text, set_text] = React.useState(decamouflage(camo_text));

  React.useEffect(() => {
    set_text(decamouflage(camo_text));
  }, [camo_text]);

  return (
    <Flex w="100%" direction="column">
      <Flex direction="column" w="100%">
        <form>
          <Flex w="100%" direction="column">
            <fieldset>
              <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                  <legend>Camouflaged text</legend>
                </Flex>
                <Flex>
                  <Button
                    ml="3"
                    onClick={async () => {
                      await navigator.clipboard.writeText(camo_text);

                      return toast({
                        title: "This text was copied.",
                        description: (
                          <Box pt="4">
                            <Text mb="4">
                              {camo_text} <br />
                            </Text>
                          </Box>
                        ),
                        status: "success",
                        duration: 1500,
                        isClosable: true,
                      });
                    }}
                  >
                    <Icon mr="3" h="5" w="5" as={BsClipboardCheck} />
                    Copy
                  </Button>
                </Flex>
              </Flex>
              <Textarea
                w="100%"
                mt="2"
                rows={9}
                id="inputText"
                name="inputText"
                placeholder="Here..."
                value={camo_text}
                onChange={(e) => set_camo_text(e.target.value)}
              ></Textarea>
            </fieldset>
          </Flex>
          <Flex mt="4" w="100%" direction="column">
            <fieldset>
              <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                  <legend>Your text</legend>
                </Flex>
                <Flex>
                  <Button ml="3" onClick={async () => set_edit_mode(true)}>
                    <Icon mr="3" h="5" w="5" as={BsPencil} />
                    Edit
                  </Button>
                  <Button
                    ml="3"
                    onClick={async () => {
                      await navigator.clipboard.writeText(text);

                      return toast({
                        title: "This text was copied.",
                        description: (
                          <Box pt="4">
                            <Text mb="4">
                              {text} <br />
                            </Text>
                          </Box>
                        ),
                        status: "success",
                        duration: 1500,
                        isClosable: true,
                      });
                    }}
                  >
                    <Icon mr="3" h="5" w="5" as={BsClipboardCheck} />
                    Copy
                  </Button>
                </Flex>
              </Flex>
              <Textarea
                readOnly={!edit_mode}
                mt="2"
                rows={9}
                id="camouflagedText"
                name="camouflagedText"
                placeholder="Here..."
                onChange={(e) => edit_mode && set_text(e.target.value)}
                value={decamouflage(text)}
              ></Textarea>
            </fieldset>
          </Flex>
        </form>
        <br />
      </Flex>
    </Flex>
  );
};

export default Decamouflage;
