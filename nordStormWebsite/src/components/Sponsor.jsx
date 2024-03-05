import React from 'react'
import { Image, Box ,Text} from '@chakra-ui/react'
import sponsor from "../Images/sponsor.png"

export default function Sponsor() {
  return (
    <>
     <Box>
      <Image src={sponsor} alt='Sponsor' h={"180px"} w={"100%"} />
      <Text textAlign={"right"} color={"#737373"} pt={"10px"} fontFamily={"Josefin Sans"} fontSize={"13px"}>
        Sponsored
      </Text>
     </Box>
    </>
  )
}
