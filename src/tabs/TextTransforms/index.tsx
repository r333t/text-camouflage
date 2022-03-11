import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

import { BiUndo } from "react-icons/bi";
import {
  upperCase,
  lowerCase,
  camelCase,
  kebabCase,
  snakeCase,
  startCase,
} from "lodash";

const TextTransforms: React.FC = () => {
  const toast = useToast();

  const [text_uppercase, set_text_uppercase] = React.useState({
    old: "",
    new: "",
  });
  const [text_lowercase, set_text_lowercase] = React.useState({
    old: "",
    new: "",
  });

  const [text_camelcase, set_text_camelcase] = React.useState({
    old: "",
    new: "",
  });

  const [text_paramcase, set_text_paramcase] = React.useState({
    old: "",
    new: "",
  });

  const [text_snakecase, set_text_snakecase] = React.useState({
    old: "",
    new: "",
  });
  const [text_startcase, set_text_startcase] = React.useState({
    old: "",
    new: "",
  });

  const [underscore_to_spaces, set_underscore_to_spaces] = React.useState({
    old: "",
    new: "",
  });

  const [spaces_to_underscore, set_spaces_to_underscore] = React.useState({
    old: "",
    new: "",
  });

  const [hyphen_to_spaces, set_hyphen_to_spaces] = React.useState({
    old: "",
    new: "",
  });

  const [spaces_to_hyphen, set_spaces_to_hyphen] = React.useState({
    old: "",
    new: "",
  });

  return (
    <Flex>
      <Box>
        <Heading size="sm">Text transforms</Heading>
        <Divider my="3" />
        <Wrap>
          <Flex>
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_uppercase({
                  old: text_uppercase.new,
                  new: text_uppercase.old,
                });

                await navigator.clipboard.writeText(text_uppercase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_uppercase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_uppercase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = upperCase(_old);
                set_text_uppercase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              UPPERCASE
            </Button>
          </Flex>
          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_lowercase({
                  old: text_lowercase.new,
                  new: text_lowercase.old,
                });

                await navigator.clipboard.writeText(text_lowercase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_lowercase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_lowercase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = lowerCase(_old);
                set_text_lowercase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              lowercase
            </Button>
          </Flex>
          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_camelcase({
                  old: text_camelcase.new,
                  new: text_camelcase.old,
                });

                await navigator.clipboard.writeText(text_camelcase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_camelcase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_camelcase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = camelCase(_old);
                set_text_camelcase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              CamelCase
            </Button>
          </Flex>
          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_paramcase({
                  old: text_paramcase.new,
                  new: text_paramcase.old,
                });

                await navigator.clipboard.writeText(text_paramcase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_paramcase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_paramcase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = kebabCase(_old);
                set_text_paramcase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              param-case
            </Button>
          </Flex>
          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_snakecase({
                  old: text_snakecase.new,
                  new: text_snakecase.old,
                });

                await navigator.clipboard.writeText(text_snakecase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_snakecase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_snakecase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = snakeCase(_old);
                set_text_snakecase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              snake_case
            </Button>
          </Flex>
          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_text_startcase({
                  old: text_startcase.new,
                  new: text_startcase.old,
                });

                await navigator.clipboard.writeText(text_startcase.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {text_startcase.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {text_startcase.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = startCase(_old);
                set_text_startcase({
                  old: _old,
                  new: _new,
                });
                await navigator.clipboard.writeText(_new);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              start Case
            </Button>
          </Flex>

          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_underscore_to_spaces({
                  old: underscore_to_spaces.new,
                  new: underscore_to_spaces.old,
                });

                await navigator.clipboard.writeText(underscore_to_spaces.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {underscore_to_spaces.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {underscore_to_spaces.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = _old.replaceAll("_", " ");

                await navigator.clipboard.writeText(_new);

                set_underscore_to_spaces({
                  old: _old,
                  new: _new,
                });

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              _ =&gt; “ ”
            </Button>
          </Flex>

          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_spaces_to_underscore({
                  old: spaces_to_underscore.new,
                  new: spaces_to_underscore.old,
                });

                await navigator.clipboard.writeText(spaces_to_underscore.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {spaces_to_underscore.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {spaces_to_underscore.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = _old.replaceAll(" ", "_");

                await navigator.clipboard.writeText(_new);

                set_spaces_to_underscore({
                  old: _old,
                  new: _new,
                });

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              “ ” =&gt; _
            </Button>
          </Flex>

          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_hyphen_to_spaces({
                  old: hyphen_to_spaces.new,
                  new: hyphen_to_spaces.old,
                });

                await navigator.clipboard.writeText(hyphen_to_spaces.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {hyphen_to_spaces.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {hyphen_to_spaces.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = _old.replaceAll("-", " ");

                await navigator.clipboard.writeText(_new);

                set_hyphen_to_spaces({
                  old: _old,
                  new: _new,
                });

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              - =&gt; “ ”
            </Button>
          </Flex>

          <Flex ml="3">
            <Button
              bg="gray.900"
              borderRadius="3px 0 0 3px"
              onClick={async () => {
                set_spaces_to_hyphen({
                  old: spaces_to_hyphen.new,
                  new: spaces_to_hyphen.old,
                });

                await navigator.clipboard.writeText(spaces_to_hyphen.old);

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {spaces_to_hyphen.new} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {spaces_to_hyphen.old} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              <Icon h="5" w="5" as={BiUndo} />
            </Button>
            <Button
              borderRadius="0 3px 3px 0"
              onClick={async () => {
                const _old = await navigator.clipboard.readText();
                const _new = _old.replaceAll(" ", "-");

                await navigator.clipboard.writeText(_new);

                set_spaces_to_hyphen({
                  old: _old,
                  new: _new,
                });

                return toast({
                  title: "Text transformed and copied.",
                  description: (
                    <Box pt="4">
                      <Text mb="4">
                        <b>Old : </b> {_old} <br />
                      </Text>
                      <Text mb="4">
                        <b>New : </b> {_new} <br />
                      </Text>
                    </Box>
                  ),
                  status: "success",
                  duration: 1500,
                  isClosable: true,
                });
              }}
            >
              “ ” =&gt; -
            </Button>
          </Flex>
        </Wrap>
      </Box>
    </Flex>
  );
};

export default TextTransforms;
