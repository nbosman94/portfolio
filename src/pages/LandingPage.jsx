import React from 'react'
import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";


const LandingPage = () => {
  return (
    <Flex flexDir={"column"}>
       
        {/* Top navbar section */}
      <Flex w={"100%"} h={"100px"} border={"4px solid "} alignItems={"center"} justifyContent={"center"}>
          <Flex w={"25%"} h={"100%"}  p={0} borderRight={"4px solid"} flexDir={"row"} >
              <Flex alignItems={"center"} justifyContent={"center"} flexDir={"row"} gap={{base:2, md:8}} w={"100%"} color={"white"}>
                 <a href='https://www.linkedin.com/in/natasha-bosman-4530b0172/'>
                <FaLinkedin size={40} />
                </a>

                <a href='https://github.com/nbosman94'>
                <FaGithubSquare size={40}/>
                </a>
              </Flex>
          </Flex>
          <Flex w={"50%"} h={"100%"} p={0} >
                <Flex alignItems={"center"} justifyContent={"center"} flexDir={"row"} gap={6} w={"100%"} color={"white"}>
                <GiBearFace size={25} />
                <Text as='b' fontSize='xl'> natasha bosman</Text>
                </Flex>
          </Flex>
          <Flex w={"25%"} h={"100%"}  p={0} borderLeft={"4px solid"} >
                <Flex alignItems={"center"} justifyContent={"center"} flexDir={"row"} gap={6} w={"100%"} cursor={"pointer"} color={"white"}>
                <Text as='b' fontSize='xl'> menu</Text>
                    <MdOutlineMenu size={25}/>
                </Flex>
          </Flex>
      </Flex>


        {/* Landing Page body */}

        <Flex alignItems={"center"} justifyContent={"center"}  h={"600px"} w={"100%"} flexDir={"column"}>
         <Heading color={"white"}>Welcome</Heading>
         <Flex>

          <Button color={"#BBCB50"} _hover={{bg: "#D49BAE"}} mt={4}>contact</Button>

       
          </Flex>
        </Flex>

        <Flex>
            {/* Footer */}
        </Flex>
    </Flex>
  )
}

export default LandingPage
