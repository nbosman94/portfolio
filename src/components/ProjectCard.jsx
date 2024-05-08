import { Box, Card, CardBody, CardHeader, Divider, Stack, Text, Flex, Link} from '@chakra-ui/react'
import React from 'react'

const ProjectCard = ({projectTitle, projectLanguage, lastUpdated, projectURL}) => {
  return (
    <>
    <Link href={projectURL} _hover={{boxShadow: "1px 2px 5px #4a6fce"}} >
     <Card bgGradient='linear(to-r,#A3BAF3, #7697ED)'>
        <CardHeader>
            <Text fontSize='2xl' color={"white"}>{projectTitle}</Text>

        </CardHeader>

        <CardBody>
            <Stack>
                <Divider/>
                <Box >
                    {/* <Heading size={"xs"}></Heading> */}
                    <Flex gap={4}>
                    <Text color={"#dde4f6"} as={"b"} pt={2} fontSize={"sm"}>• {projectLanguage}</Text>
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
     </Link>

    </>
  )
}

export default ProjectCard
