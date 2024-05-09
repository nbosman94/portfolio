import React from 'react'
import { Button, Flex, Heading, Link, Text, Box, Avatar, Badge} from '@chakra-ui/react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import profilepic from "../../public/1x/IMG_8642.jpg"
import ProjectDisplay from '../components/projectDisplay';
// import cv from "../../public/1x/PDF_CV_Natasha_BOSMAN_Software_Development.pdf";


const LandingPage = () => {
  return (
    <Flex flexDir={"column"} >
       
        {/* Top navbar section */}
      <Flex w={"100%"} h={"100px"}  alignItems={"center"} justifyContent={"center"} mb={20} boxShadow={"1px 2px 5px #4a6fce"}>
          <Flex w={"25%"} h={"100%"}  p={0}  flexDir={"row"}>
          <Flex alignItems={"center"} justifyContent={"flex-start"} ml={10} flexDir={"row"} gap={6} w={"100%"} color={"white"}>
                
                <GiBearFace size={25} />
                <Box display={{base: "none", md: "block"}}>
                <Text as='b' fontSize={{base: "sm", md:'l'}}> natasha bosman</Text>
                </Box>
                </Flex>
          </Flex>
          <Flex w={"50%"} h={"100%"} p={0} >
        
          </Flex>
          <Flex w={"25%"} h={"100%"}  p={0}  >
          <Flex alignItems={"center"} justifyContent={"flex-end"} mr={10} flexDir={"row"} gap={{base:2, md:6}} w={"100%"} color={"white"}>
                 <a href='https://www.linkedin.com/in/natasha-bosman-4530b0172/'>
                <FaLinkedin size={35} />
                </a>

                <a href='https://github.com/nbosman94'>
                <FaGithubSquare size={35}/>
                </a>
              </Flex>
          </Flex>
      </Flex>


        {/* Landing Page body */}

        <Flex  alignItems={"center"} justifyContent={"center"} h={"300px"} w={"100%"} flexDir={"row"} >
          {/* Left hand Side */}
          <Flex alignItems={"center"} flexDir={"column"}>
         <Heading color={"white"} size='3xl'>welcome</Heading>

                  <Flex mt={4}>
                  <Avatar src={profilepic} />
                  <Box ml='3'>
                    <Text fontWeight='bold'>
                      Natasha Bosman
                     
                    </Text>
                    <Text fontSize='sm'>Software Engineer</Text>
                  </Box>
                </Flex>
         
         <Flex gap={2} >
            <Button bg={"#dde4f6"} color={"#678cec"} _hover={{bg: "#5982ec", color: "white", transitionDuration: "0.8s"}} mt={4} w={24}>contact</Button>
            <a color={"white"} href={"../../public/1x/PDF_CV_Natasha_BOSMAN_Software_Development.pdf"} download={"NatashaBosmanCV.pdf"}><Button variant={"outline"}  _hover={{bg: "#dde4f6", color: "#678cec", transitionDuration: "0.8s"}} mt={4} w={24}>cv</Button></a>
          </Flex>

       <Flex maxH={"50px"} width={"100%"}  flexDir={"column"} >
       <Heading mt={8} textAlign={"center"} fontSize='4xl'>projects</Heading>
         <ProjectDisplay/>
            </Flex>
            
            </Flex>

            {/* Right hand side */}

      
   
        </Flex>
    
    </Flex>
  )
}

export default LandingPage
