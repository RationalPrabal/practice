import React from 'react'
import { GridItem ,Text,Box} from '@chakra-ui/react'
import Link from 'next/link'

const ProjectCard = ({...el}) => {
  return (
    <GridItem bg="#00061c">
    <Link href={el.html_url} ><Text as="b" fontSize={"18"}>{el.name}</Text></Link>

<Text >{el.full_name}</Text>
< Box display={"flex"} justifyContent="space-between">
    <Text>Stars: {el.forks_count}</Text>

 
    <Text>Forks: {el.stargazers_count}</Text>
</Box>
<Text >Language:{el.language}</Text>
   </GridItem>
  )
}

export default ProjectCard