import React from 'react'
import { Stack, Text ,Spacer,Box, Divider, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, Flex} from '@chakra-ui/react'

export default function Designer() {
  return (
    <>
     <Popover >
  <PopoverTrigger>
    <Box bg="none" color="black" ml={"20px"} mt={"10px"} w={"fit-content"}  _hover={{cursor:"pointer", border:"none", borderRadius:"0",width:"fit-content", borderBottom: "2px solid black", backgroundColor: "none"}} >Designer</Box>
  </PopoverTrigger>
  <PopoverContent ml={"25px"} w={"fit-content"} border={"none"} borderRadius={"2px"} bg={"white"} >
    <PopoverCloseButton fontSize={"18px"} />
      <Flex justifyContent={"space-evenly"} gap={"10px"}>
        {/* Part-1 */}
      <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="4px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Designer: Get Inspired</Box>
      <Divider orientation='horizontal' w="90%" m="auto" mb="10px" borderColor={"gray"}/>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" >Designer New Arrivals </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">New Designers to Nordstrom </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Designer Black Owned or Founded Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Designer Sale</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Designer Womens Trends</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Resort </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Wardrobe Essentials</Text>
</Stack>
     </Box>
     {/* Part-2 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Designer Brands</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Akris punto</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Alexander McQueen</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Balenciaga</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Bottega Veneta</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Brunello Cucinelli</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Burberry</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Christian Louboutin</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Givenchy</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Golden Goose</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Gucci</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Moncler </Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Prada</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Saint Laurent</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">The Row</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Thom Browne</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">TOM FORD</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Valentino</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">ZEGNA</Text>
</Stack>
     </Box>
     {/* part-3 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px"> Women</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Designer Clothing</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Shoes</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Handbags</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Jewelry</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Accessories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Sunglasses</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600"> Mens</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Clothing </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Shoes </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Accessories</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Designer Sunglasses </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Designer Beauty</Text>
</Stack>
     </Box>
     {/* part-4 */}
     <Box p={"10px"} w="200px"  margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">SPACE: Emerging & Advanced Designer</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400" >Ready-to-Wear</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Shoes</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Handbags</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Jewelry</Text>
  <Text fontSize='md' _hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Accessories</Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">SPACE: Emerging & Advanced Designer Brands</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Acne Studios</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Comme des Garçons</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Marine Serre</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Molly Goddard</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">R13 </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Sacai </Text >
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">  Simone Rocha</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Totême </Text>
</Stack>
     </Box>
     {/* part-5 */}
     <Box p={"10px"} w="200px" margin={0}>
     <Box ml="5px" fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600" mb="10px">Mens Emerging & Advanced Designer</Box>
      <Stack spacing={2} ml="5px">
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Clothing</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Shoes</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Accessories  </Text>
  <Spacer/>
  <Spacer/>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="600">Mens Emerging & Advanced Designer Brands </Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Bode</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Homme Plisse Issey Miyake</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400"> Jacquemus</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">JW Anderson</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">KENZO</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Noah</Text>
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Palm Angels</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Rick Owens </Text> 
  <Text fontSize='md'_hover={{ cursor:"pointer",borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">Stone Island</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">The Elder Statesman</Text>
  <Text fontSize='md' _hover={{cursor:"pointer", borderBottom: "2px solid black" }} w={"fit-content"} color="black" fontWeight="400">VISVIM</Text>
</Stack>
     </Box>
     <Box p={"20px"}> 
      <img src="https://n.nordstrommedia.com/id/95a28951-3f59-45f5-ac1f-abbd61d392ba.jpeg" width={"211px"} height={"356px"}style={{marginTop:"45px"}} alt="Sale" />
      <Text fontSize='md' cursor="pointer" borderBottom= "1px solid black"  w={"fit-content"} color="black" fontWeight="400">
Get Inspired</Text>
     </Box>
      </Flex>
  </PopoverContent>
</Popover>

    </>
  )
}
