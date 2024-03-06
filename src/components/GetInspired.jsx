import React from 'react'
import { Box,Divider,Flex,Text,Image } from '@chakra-ui/react'

export default function GetInspired() {
  return (
    <>
     <Divider borderBottom="3px solid #000000" orientation='horizontal' mt={'80px'} />
     <Box mt={'20px'}>
        <Text fontSize={"24px"} color={"#191A1B"}  fontWeight={'600'} textAlign={"center"} mt={"50px"} letterSpacing={"3px"}>GET INSPIRED</Text>
        <Text textAlign={"center"}  fontSize={"15px"} mt={"2px"} color={"#191A1B"}>Discover the latest stories from The Thread, plus more we are loving in fashion, beauty and lifestyle.</Text>
        <Text textAlign={"center"}  cursor={"pointer"}   fontSize={"15px"}  w={"fit-content"} color={"#191A1B"} margin={'auto'}  mt={"10px"} mb={"50px"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Explore The Thread</Text>
     </Box>
     {/* card1 */}
     <Flex  gap={"20px"} mt={"20px"}>
      <Box  w={"455px"} h={"570px"}  >
        <Image src="https://n.nordstrommedia.com/it/e16a1c7d-fb4c-4e53-954b-e80173c09cd1.jpeg" w={"100%"}  alt="first"/>
        <Text  fontSize={"22px"} mt={"10px"}  color={"#191A1B"}  fontWeight={'600'} >Celebrating Womens History Month</Text>
        <Text textAlign={"left"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"}>Join us in championing women-led brands, closing the gender gap and spotlighting the impact women have made in building a better world.</Text>
        <Text textAlign={"left"}  cursor={"pointer"} w={"fit-content"} fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>
        Learn More
        </Text>
      </Box>
      {/* card2 */}
      <Box  w={"455px"} h={"570px"}>
      <Image src="https://n.nordstrommedia.com/it/0056e02b-d087-4604-be68-4aec7278330b.jpeg" alt="second" w={"100%"}/>
      <Text textAlign={"left"} mt={"10px"}  fontSize={"22px"} color={"#191A1B"}  fontWeight={'600'} >4 Denim Pieces That Work with Everything</Text>
      <Text textAlign={"left"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"}>If you are itching to give your denim collection an update, we have rounded up a few new takes on the timeless material.</Text>
     <Flex gap={"20px"}>
       <Text textAlign={"left"}  cursor={"pointer"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Shop Jeans & Denim</Text>
       <Text textAlign={"left"}  cursor={"pointer"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Read the Story</Text>
     </Flex>
      </Box>
      {/* card3 */}
      <Box w={"455px"} h={"600px"} >
      <Image src="https://n.nordstrommedia.com/it/1c99e9cc-b3a2-4d97-8633-d35f9db825bc.jpeg" alt="third" />
      <Text textAlign={"left"} mt={"10px"}  fontSize={"22px"} color={"#191A1B"}  fontWeight={'600'} >Style Staple: 3 Ways to Wear the Striped Sweater</Text>
      <Text textAlign={"left"} fontSize={"15px"} mt={"5px"} color={"#191A1B"} overflow={"hidden"} >No wardrobe is complete without a striped sweater. We asked Linda Cui Zhang, associate fashion director at Nordstrom, to share her favorite ways to style it.</Text>
        <Flex  gap={"20px"}>
        <Text textAlign={"left"}  cursor={"pointer"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>hop Striped Sweaters</Text>
       <Text textAlign={"left"}  cursor={"pointer"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Read the Story</Text>
        </Flex>
      </Box>
     </Flex>
    </>
  )
}
