import React from 'react'
import { Stack, Text ,Spacer,Box, Divider, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Flex} from '@chakra-ui/react'
export default function Shoes() {
  return (
    <>
      <Popover >
  <PopoverTrigger>
    <Box bg="none" color="black" ml={"20px"} mt={"10px"} w={"fit-content"}  _hover={{cursor:"pointer", border:"none", borderRadius:"0",width:"fit-content", borderBottom: "2px solid black", backgroundColor: "none"}} >Shoes</Box>
  </PopoverTrigger>
  <PopoverContent ml={"25px"} w={"fit-content"} border={"none"} borderRadius={"2px"} bg={"white"} >
    <PopoverCloseButton fontSize={"18px"} />
      <Flex justifyContent={"space-evenly"} gap={"10px"}>
        {/* Part-1 */}
      <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="4px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Shoes: Get Inspired</Box>
      <Divider orientation='horizontal' w="90%" m="auto" mb="10px" borderColor={"gray"}/>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >New Arrivals </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Shoes Sale</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Under $100</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Nordstrom x Nike</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Sneaker Release Calendar</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Womens Contemporary</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Womens Shoe Edit</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Make Room for Shoes: On</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Adaptive</Text>
</Stack>
     </Box>
     {/* Part-2 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Women</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Sandals</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Athletic</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sneakers</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Flats</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Heels</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Booties</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Clogs</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Espadrilles</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Boots</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Slippers</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Comfort </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Dress Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Mules & Slides</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Oxfords & Loafers</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Platforms</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Vacation & Resort </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Extended Sizes</Text>
</Stack>
     </Box>
     {/* part-3 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px"> Men</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Athletic</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sneakers</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Dress Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Loafers & Slip-Ons</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sandals & Flip-Flops</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Comfort</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Oxfords & Derbys</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Boots</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Slippers</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Extended Sizes</Text>
</Stack>
     </Box>
     {/* part-4 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Kids</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Baby & Walker Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Toddler </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Little Kid</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Big Kid  </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Girls Shoes</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Boys Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Boots</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sneakers & Athletic</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Slippers</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sandals</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Designer</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Shoe Care & Accessories</Text>
</Stack>
     </Box>
     {/* part-5 */}
     <Box p={"10px"} w="200px" margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Sale</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Womens Sale Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Mens Sale Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Kids Sale Shoes  </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Top Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Birkenstock</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">HOKA</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Nike</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">On</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sam Edelman</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Steve Madden</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Tory Burch </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">UGG</Text> 
</Stack>
     </Box>
     <Box p={"20px"}> 
      <img src="https://n.nordstrommedia.com/id/d9a12b59-abb8-4bfc-a72b-c4e314111338.jpg" width={"211px"} height={"356px"}style={{marginTop:"45px"}} alt="Sale" />
      <Text fontSize='md' cursor="pointer" borderBottom= "1px solid black"  w={"fit-content"} color="black" fontWeight="400">On Shoes</Text>
     </Box>
      </Flex>
  </PopoverContent>
</Popover>
    </>
  )
}
