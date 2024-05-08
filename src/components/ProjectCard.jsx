import { Box, Card, CardBody, CardHeader, Divider, Heading, Stack, StackDivider, Text, Flex} from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ({projectTitle, projectLanguage, lastUpdated}) => {
  return (
    <>
    
     <Card bg={"transparent"}>
        <CardHeader>
            <Heading size={"md"} color={"white"}>{projectTitle}</Heading>

        </CardHeader>

        <CardBody>
            <Stack>
                <Divider/>
                <Box >
                    {/* <Heading size={"xs"}></Heading> */}
                    <Flex gap={4}>
                    <Text color={"#dde4f6"} as={"b"} pt={2} fontSize={"sm"}>{projectLanguage}</Text>
                    <Text color={"#dde4f6"} mt={2} fontSize={"sm"}>{lastUpdated}</Text>
                    </Flex>
                </Box>

                {/* <Box>
                    <Heading size={"xs"}>Heading 2</Heading>
                    <Text pt={2} fontSize={"sm"}>random text</Text>
                </Box>

                <Box>
                    <Heading size={"xs"}>Heading 3</Heading>
                    <Text pt={2} fontSize={"sm"}>random text</Text>
                </Box> */}

            </Stack>
        </CardBody>
     </Card>

    </>
  )
}

export default ProjectCard
