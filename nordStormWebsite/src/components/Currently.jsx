import React from 'react'
import { Text, Image, Flex } from '@chakra-ui/react'

export default function Currently() {
  return (
     <>
         <Text fontSize={"25px"} letterSpacing={"3px"} color={"#191A1B"}  fontWeight={'600'} textAlign={"center"} mt={"50px"}>Currently Lovely</Text>
         <Text textAlign={"center"}  cursor={"pointer"}   fontSize={"15px"}  w={"fit-content"} color={"gray"} margin={'auto'}  mt={"10px"} mb={"50px"} >Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</Text>

         <Flex justifyContent={"center"} gap={"10px"} mt={"20px"}>
            <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjk2MzQwNjU0LjE1MDE0MzE3NTg0Ni5qcGVn.jpg" w={"330px"} h={"330px"} alt="first"cursor={"pointer"}/>
            <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA3NTE3NDU2LjIwNDg5Njc4OTk4LmpwZWc=.jpg" w={"330px"} h={"330px"}  alt="Second"cursor={"pointer"}/>
            <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA3OTMzMTM3Ljk4MzcwMzk0NTQ0OS5qcGVn.jpg" w={"330px"} h={"330px"}  alt="Third"cursor={"pointer"}/>
            <Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzA3NzU0ODQyLjQxMTU4NTM5Njc4OS5qcGVn.jpg" w={"330px"} h={"330px"}  alt="Fourth"cursor={"pointer"}/>
         </Flex>
     </>
  )
}
