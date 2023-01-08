import React from 'react'
import axios from 'axios'
import { Grid,GridItem,Text,Box } from '@chakra-ui/react'
import StarIcon from "@chakra-ui/icons"
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
const projects = ({data}) => {
console.log(data.items)
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6} w="70%" mr="0" >
   {data.items.map(el=><ProjectCard key={el.id} {...el}/>
    )
}
   </Grid>
   
  )
}

export default projects

 export async function getServerSideProps(){
      let response=await axios.get("https://api.github.com/search/repositories?q=user:RationalPrabal+fork:true&sort=updated&per_page=10&type=Repositories")
      return {
        props:{
          data: response.data,
        
        }
      }
    }