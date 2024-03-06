import React from 'react'
import marcus from "../Images/marcus.png"
import freePost from "../Images/freePost.png"
import {  Box, Image, Text } from '@chakra-ui/react'

export default function MarcusFree() {
  return (
    <>
          <Box>
      <Image src={marcus} alt='Sponsor' h={"160px"} w={"100%"}  mt={"80px"} cursor={"pointer"}/>
      <Text textAlign={"right"} color={"#737373"} pt={"10px"} fontFamily={"Josefin Sans"} fontSize={"13px"}>
        Sponsored
      </Text>
     </Box>
     <Image src={freePost} alt='Sponsor' h={"320px"} w={"100%"}  mt={"30px"} cursor={"pointer"}/>
    </>
  )
}
