import { Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projectDisplay = () => {

    const githubURL = "https://api.github.com/users/nbosman94/repos"
    
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await fetch(githubURL);
        const projects = await response.json();
        console.log(projects);
        console.log(projects[0].name)
        setProjects(projects);
    };


    useEffect(() => {
        getProjects();
    }, []);
    
    const projectsToDisplay = projects.filter(project => project.language !== null);

  return (
    <Flex alignContent={"center"} justifyContent={"center"} flexDir="column" mt={22}>
      <Text mt={4} textAlign={"center"} fontSize='2xl'>projects</Text>
      {projectsToDisplay.map((project) => (
          <ProjectCard projectTitle={project.name} projectLanguage={project.language} lastUpdated={project.updated_at}></ProjectCard>
      ))}
    
    </Flex>
  )
}

export default projectDisplay
