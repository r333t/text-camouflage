import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import ComplexitySlider from "../../components/Slider";
import { alphabet, alphCamo } from "../cryptos";

import { BsClipboardCheck, BsPencil } from "react-icons/bs";

const getCamo = (char: string) => {
  if (alphCamo[alphabet.indexOf(char.toUpperCase())]) {
    return alphCamo[alphabet.indexOf(char.toUpperCase())];
  } else {
    return char.toUpperCase();
  }
};

const camouflage = (txt: string, complexity: number) => {
  let retText: any = [];
  const arrTxt = txt.split(" ");
  //  console.log("arrTxt=>", arrTxt);
  // console.log("complexity=>", complexity);

  if (complexity === 0) {
    return txt;
  }

  if (complexity === 100) {
    let local_txt = "" + txt;
    let arrW = local_txt.split(" ");

    arrW.forEach((word, idx) => {
      let arrWord = word.split("");
      arrWord.forEach((alpha, idxx) => {
        arrWord[idxx] = getCamo(alpha);
      });
      arrW[idx] = arrWord.join("");
    });
    return arrW.join(" ");
  }

  arrTxt.forEach((word) => {
    // console.log("word=> ", word);
    let campoText = "" + word;
    const textLength = word.length;
    // console.log("textLength=>", textLength);

    const nbr_alpha_to_camfg = Math.ceil((textLength * complexity) / 100);
    // console.log("nbr_alpha_to_camfg=>", nbr_alpha_to_camfg);

    for (let index = 0; index < nbr_alpha_to_camfg; index++) {
      const pos = Math.round(Math.random() * (Math.round(textLength) - 0) + 0);
      // console.log("pos=>", pos);
      // console.log("campoText=>", campoText);

      const _campoText = Array.from(campoText); // convert into array
      // console.log("_campoText=>", _campoText);
      // console.log("campoText[pos]=>", campoText[pos]);
      if (campoText[pos] && getCamo(campoText[pos])) {
        _campoText[pos] = getCamo(campoText[pos]);
      }
      // console.log("_campoText=>", _campoText);
      campoText = _campoText.join(""); // convert back into string
      // console.log("--campoText=>", campoText);
    }

    retText.push(campoText);
  });

  return retText.join(" ");
};
const Camouflage: React.FC = () => {
  const toast = useToast();

  // Arab Team 4 Reverse Engineering
  const [text, set_text] = React.useState("Arab Team 4 Reverse Engineering");
  const [complexity, set_complexity] = React.useState(25);
  const [edit_mode, set_edit_mode] = React.useState(false);

  const [camo_text, set_camo_text] = React.useState(
    camouflage(text, complexity)
  );

  React.useEffect(() => {
    set_camo_text(camouflage(text, complexity));
  }, [text, complexity]);

  return (
    <Flex direction="column" w="100%">
      <form>
        <Flex w="100%" direction="column">
          <fieldset>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex>
                <legend>Enter your text</legend>
              </Flex>
              <Flex>
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
              w="100%"
              mt="2"
              rows={9}
              id="inputText"
              name="inputText"
              placeholder="Here..."
              value={text}
              onChange={(e) => set_text(e.target.value)}
            ></Textarea>
          </fieldset>
        </Flex>
        <Flex mt="4" w="100%" direction="column">
          <fieldset>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex>
                <legend>Enter your text</legend>
              </Flex>
              <Flex>
                <Button ml="3" onClick={async () => set_edit_mode(true)}>
                  <Icon mr="3" h="5" w="5" as={BsPencil} />
                  Edit
                </Button>
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
              readOnly={!edit_mode}
              mt="2"
              rows={9}
              id="camouflagedText"
              name="camouflagedText"
              placeholder="Here..."
              onChange={(e) => edit_mode && set_camo_text(e.target.value)}
              value={camo_text}
            ></Textarea>
          </fieldset>
        </Flex>
        <Flex mt="4" w="100%" direction="column">
          <fieldset>
            <legend>Complexity algorithm</legend>
            <ComplexitySlider
              complexity={complexity}
              set_complexity={set_complexity}
            />
          </fieldset>
        </Flex>
      </form>
      <br />
    </Flex>
  );
};

export default Camouflage;
