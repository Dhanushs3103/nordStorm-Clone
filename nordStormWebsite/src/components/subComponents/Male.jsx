import React from 'react'
import { Stack, Text ,Spacer,Box, Divider, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Flex} from '@chakra-ui/react'

export default function Male() {
  return (
    <>
     <Popover >
  <PopoverTrigger>
    <Box bg="none" color="black" ml={"20px"} mt={"10px"} w={"fit-content"}  _hover={{cursor:"pointer", border:"none", borderRadius:"0",width:"fit-content", borderBottom: "2px solid black", backgroundColor: "none"}} >Men</Box>
  </PopoverTrigger>
  <PopoverContent ml={"25px"} w={"fit-content"} border={"none"} borderRadius={"2px"} bg={"white"} >
    <PopoverCloseButton fontSize={"18px"} />
      <Flex justifyContent={"space-evenly"} gap={"10px"}>
        {/* Part-1 */}
      <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="4px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Men: Get Inspired</Box>
      <Divider orientation='horizontal' w="90%" m="auto" mb="10px" borderColor={"gray"}/>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >New Arrivals</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Mens Sale</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Bestsellers</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Nordstrom Made</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Sports Fan Shop for Men</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Suit Shop</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Wardrobe Essentials</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Shop by Trend</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Nautical Americana</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Graphic Resort</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600"> Shop By Occasion</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Vacation & Resort</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sports & Outdoor Activities</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Golf</Text>
</Stack>
     </Box>
     {/* Part-2 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px"> Clothing</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Activewear</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Blazers & Sport Coats</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Coats & Jackets</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Dress Shirts</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Jeans</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Lounge, Pajamas & Robes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Pants </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Polo Shirts</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Shirts</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Shorts</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Suits & Separates</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sweaters</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sweatshirts & Hoodies</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Swim Trunks & Board Shorts</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">T-Shirts </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Underwear, Undershirts </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Socks</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Big & Tall </Text>
</Stack>
     </Box>
     {/* part-3 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px"> Shoes</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Dress Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Athletic</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sneakers</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Loafers & Slip-Ons</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sandals & Flip-Flops </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Comfort</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Oxfords & Derbys </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Boots </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Grooming & Cologne</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Body Care & Deodorant </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Cologne</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Gifts & Sets</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Hair Products</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Shaving & Beard Care</Text>
</Stack>
     </Box>
     {/* part-4 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Accessories </Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Backpacks</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Bags</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Belts</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Dopp Kits & Toiletry Bags</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Gloves</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Hats</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Luggage & Travel </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Scarves</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sunglasses & Eyewear </Text >
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Tech Accessories  </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">  Ties & Pocket Squares </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Wallets & Card Cases </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Jewelry </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Fine Jewelry </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Watches </Text>
  <Spacer/>
  <Spacer/>
</Stack>
     </Box>
     {/* part-5 */}
     <Box p={"10px"} w="200px" margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px"> Designer</Box>
      <Stack spacing={2} ml="5px">
      <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Advanced Modern</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Young Adult</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Top Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">AG</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">AllSaints</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">BOSS</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Canali</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Carhartt Work In Progress</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Fear of God Essentials</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Nike</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Peter Millar</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Ted Baker London</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Vince</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">vuori </Text> 
</Stack>
     </Box>
     <Box p={"20px"}> 
      <img src="https://n.nordstrommedia.com/id/5cdaa7d6-dbb0-42bc-b8b4-d488b0e45fd5.jpg" width={"211px"} height={"356px"}style={{marginTop:"45px"}} alt="Sale" />
      <Text fontSize='md' cursor="pointer" borderBottom= "1px solid black"  w={"fit-content"} color="black" fontWeight="400">Shop Essentials</Text>
     </Box>
      </Flex>
  </PopoverContent>
</Popover>

    </>
  )
}
