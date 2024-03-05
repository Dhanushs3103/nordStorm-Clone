// Packages
import React from 'react'
import { Box, Input,IconButton,Flex, Spacer} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';

// Local imports
import SignIn from './subComponents/signIn';

export default function Navbar() {

  return (
  <>
  
  <Box w='100%' p={"25px 15px 20px 15px"}   >
    {/* Logo */}
    <Flex justifyContent="center" gap={"70px"}>
    <Box>
        <a href="/"><h1 style={{ fontFamily:"Josefin Sans",fontWeight:"600",fontSize:"31px" , margin:"0"}}>NORDSTROM</h1></a>
    </Box>
    {/* Search Bar */}
    <Box border={"1px solid black"} p={"0"}  h={"42px"} w={"650px"}>
    <IconButton aria-label='Search database' ml={"10px"}  bg={"0"} icon={<SearchIcon h={"41px"} fontSize={"20px"} mb={"2px"}/>}  />
    <Input placeholder='Search for products or brand'  focusBorderColor="transparent" _focus={{ boxShadow: "none" }} size='md' w={"280px"}  borderRadius={"0"}  border={"0"}/>
    </Box>
    {/* singIn and cart */}
    <Box>
      <Box>
        <SignIn/>
      </Box>
    </Box>
    </Flex>
  </Box>

 
  </>
  )
}
