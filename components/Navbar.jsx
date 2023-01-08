import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navbar = () => {
    const router=useRouter();
    const seeProjects=()=>{
        router.push("/projects")
    }
 
    const seeHome=()=>{
        router.push("/")
    }

  return (
    <Box display={"flex"} w="50%" justifyContent={"space-around"}>
        <Text onClick={seeHome}>Prabal</Text>
        <Text onClick={seeProjects}>Projects</Text>
          <Text>Experience</Text>
        
    </Box>
  )
}

export default Navbar