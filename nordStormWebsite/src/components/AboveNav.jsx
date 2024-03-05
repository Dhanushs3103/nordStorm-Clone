// packages
import React from 'react'
import { Box } from '@chakra-ui/react'

export default function AboveNav() {
  return (
  <>
  <Box bg='black' w='100%' h={"40px"} p={"9px"} color='white' textAlign={"center"} fontSize={"15px"}>
    <b style={{ fontFamily: "Source Sans 2", fontWeight:"700"}}> Earn 5X the points on beauty!</b> A Nordy Club exclusive. <a href="#" style={{textDecoration:"underline"}}>See Restrictions</a>
  </Box>
  </>
  )
}
