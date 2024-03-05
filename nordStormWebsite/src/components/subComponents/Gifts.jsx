import React from 'react'
import { Stack, Text ,Spacer,Box, Divider, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Flex} from '@chakra-ui/react'

export default function Gifts() {
  return (
    <>
              <Popover >
  <PopoverTrigger>
    <Box bg="none" color="black" ml={"20px"} mt={"10px"} w={"fit-content"}  _hover={{cursor:"pointer", border:"none", borderRadius:"0",width:"fit-content", borderBottom: "2px solid black", backgroundColor: "none"}} >Explore</Box>
  </PopoverTrigger>
  <PopoverContent ml={"25px"} w={"fit-content"} border={"none"} borderRadius={"2px"} bg={"white"} >
    <PopoverCloseButton fontSize={"18px"} />
      <Flex justifyContent={"space-evenly"} gap={"10px"}>
        {/* Part-1 */}
      <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="4px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Explore: Get Inspired</Box>
      <Divider orientation='horizontal' w="90%" m="auto" mb="10px" borderColor={"gray"}/>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >The Nordy Club</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">The Nordy Pod</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600"> Top Stories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">4 Outfits Our Team Is Wearing to Fashion Week</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >On Our Radar: Black Owned or Founded Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Trend Report: Sun-Kissed Resort Style</Text>
</Stack>
     </Box>
     {/* Part-2 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">The Thread</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Fashion Inspiration </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Beauty Tips</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Lifestyle Stories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Guides & How-Tos</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Shop with Purpose</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">AAPI Owned or Founded Brands</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Black Owned or Founded Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Hispanic & Latinx Owned or Founded Brands</Text>
</Stack>
     </Box>
     {/* part-3 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Styling & Services</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Get Beauty Advice</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Explore Styling Services</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Take the Style Quiz</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Request a Look</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Brands Were Obsessed With</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Favorite Daughter</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Free People</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Mother</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >On</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">SKIMS</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Westman Atelier</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Zimmermann</Text>
</Stack>
     </Box> 
     <Box p={"20px"}> 
      <img src="https://n.nordstrommedia.com/id/04e7ffdd-ec68-49d2-831f-0bdef8174788.jpg" width={"211px"} height={"356px"}style={{marginTop:"45px"}} alt="Sale" />
      <Text fontSize='md' cursor="pointer" borderBottom= "1px solid black"  w={"fit-content"} color="black" fontWeight="400">Fashion, Beauty & Lifestyle</Text>
     </Box>
      </Flex>
  </PopoverContent>
</Popover>     
    </>
  )
}
