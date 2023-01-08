import React from 'react'
import { Box,Img ,Text,Button} from '@chakra-ui/react'
const Profile = ({data}) => {
    console.log(data)
  return (
    <Box>
<Box w="20%" textAlign={"center"}>
 
  <Img src={data.avatar_url} borderRadius="60%"/>
  <Text>{data.name}</Text>
  <Text>@{data.login}</Text>
  <Text>{data.bio}</Text>
  <Box>
    <Button>Resume</Button>
    <Button>Follow</Button>
  </Box>
  </Box>
  <Box w="20%">
{data.bio}
  </Box>
  </Box>
  )
}

export default Profile