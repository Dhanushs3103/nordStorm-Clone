import React from 'react'
import { Stack, Text ,Spacer,Box, Divider, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Flex} from '@chakra-ui/react'


export default function Home() {
  return (
     <>
         <Popover >
  <PopoverTrigger>
    <Box bg="none" color="black" ml={"20px"} mt={"10px"} w={"fit-content"}  _hover={{cursor:"pointer", border:"none", borderRadius:"0",width:"fit-content", borderBottom: "2px solid black", backgroundColor: "none"}} >Home</Box>
  </PopoverTrigger>
  <PopoverContent ml={"25px"} w={"fit-content"} border={"none"} borderRadius={"2px"} bg={"white"} >
    <PopoverCloseButton fontSize={"18px"} />
      <Flex justifyContent={"space-evenly"} gap={"10px"}>
        {/* Part-1 */}
      <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="4px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Home: Get Inspired</Box>
      <Divider orientation='horizontal' w="90%" m="auto" mb="10px" borderColor={"gray"}/>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >New Arrivals </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Home Sale</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Under $100 Home</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Black Owned or Founded Brands</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Nordstrom Made: Home</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Seasonal Home Scents</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">The Home Edit</Text>
  <Spacer />
  <Spacer />
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Shop by Style</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Healthy Living</Text>
</Stack>
     </Box>
     {/* Part-2 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Bath</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Bath Accessories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Towels</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Bedding </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Bedding Essentials & Pillows</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Bedding Sets</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Blankets & Throws</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Comforters, Coverlets & Quilts </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Duvet Covers & Shams </Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Sheets</Text>
  <Spacer />
  <Spacer />
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600"> Travel Essentials </Text>
  <Spacer />
  <Spacer />
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Luggage & Travel</Text>
  <Spacer />
  <Spacer />
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Water Bottles & Tumblers </Text>
</Stack>
     </Box>
     {/* part-3 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Home Decor</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Art Prints & Wall Decor</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Books, Games & Puzzles</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Candles & Diffusers </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Decorative Accents </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Decorative Pillows </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Lighting & Lamps</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Picture Frames</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Rugs</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Storage & Organization</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Throw Blankets </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Vases & Planters </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Electronics & Speakers</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Pet Accessories</Text>
</Stack>
     </Box>
     {/* part-4 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Kitchen</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Cookware & Bakeware</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Cutlery & Knives </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Kitchen Linens </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Small Appliances</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Utensils & Gadgets</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Coffee & Tea Accessories  </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Tabletop & Dining</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Bar Tools & Accessories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Dinnerware</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Drinkware & Mugs</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Glassware</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Serveware</Text>
</Stack>
     </Box>
     {/* part-5 */}
     <Box p={"10px"} w="200px" margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Home Gifts</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Cozy Gifts for Home </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Housewarming Gifts </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Luxe Home Gifts </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Wedding & Engagement Gifts</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Pantry</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Candy </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Gift Sets</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Coffee & Tea </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600"> Top Brands</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Top Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Barefoot Dreams</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Le Creuset</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Our Place</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Parachute</Text> 
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">UGG</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Voluspa</Text>
  </Stack>
     </Box>
     <Box p={"20px"}> 
      <img src="https://n.nordstrommedia.com/id/c70d9d62-3943-4b0b-aa7c-5b2d49846455.jpg" width={"211px"} height={"356px"}style={{marginTop:"45px"}} alt="Sale" />
      <Text fontSize='md' cursor="pointer" borderBottom= "1px solid black"  w={"fit-content"} color="black" fontWeight="400">Healthy Living </Text>
     </Box>
      </Flex>
  </PopoverContent>
</Popover>     
     </>
  )
}
