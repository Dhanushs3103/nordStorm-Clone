import React from 'react'
import { Flex,Box,Text,Image } from '@chakra-ui/react'

export default function BelowTop() {
  return (
   <>
    <Flex mt={"80px"}>
        <Box w={"340px"} h={"323px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={"29px"} color={"#191A1B"}  fontWeight={'bold'}>Need Right Now</Text>
            <Box width={"230px"}>
            <Text textAlign={"left"} fontSize={"15px"} color={"#191A1B"}>Your curated roundup of this seasons essentials.</Text>
            </Box>
        </Box>
        <Box w={"340px"} h={"323px"}>
            <Image src="https://n.nordstrommedia.com/id/1c1a3cda-0794-4091-aa4e-bf7095d640fb.jpeg" alt="first"/>
        <Text cursor={"pointer"} margin={"auto"} w={"fit-content"} textAlign={"center"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Celebrate Your Shade</Text>
        </Box>
        <Box  w={"340px"} h={"323px"}>
        <Image src="https://n.nordstrommedia.com/id/5e89310b-fdbe-4de5-8f3e-93efcd1641aa.jpeg" alt="Second"/>
        <Text cursor={"pointer"} textAlign={"center"} margin={"auto"} w={"fit-content"} fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"}  _hover={{borderBottom:"2px solid black", }}>Designer Fragrance</Text>
        </Box>
        <Box  w={"340px"} h={"323px"}>
        <Image src="https://n.nordstrommedia.com/it/d74b880e-9f12-4355-a3de-5e6cd803969a.jpeg" alt="third"/>
        <Text  cursor={"pointer"} textAlign={"center"} margin={"auto"} w={"fit-content"} fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"}  _hover={{borderBottom:"2px solid black", }}>Natural Beauty</Text>
        </Box>
    </Flex>
   </>
  )
}
