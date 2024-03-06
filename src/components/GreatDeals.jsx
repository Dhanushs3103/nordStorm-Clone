import React from 'react'
import { Divider,Text, Flex,Image,Card,Stack } from '@chakra-ui/react'
import star from "../Images/star.png"

export default function GreatDeals() {
  return (
     <>
     <Divider borderBottom="3px solid #000000" orientation='horizontal' mt={'80px'} />
     <Text fontSize={"22px"} color={"#191A1B"}  fontWeight={'600'} textAlign={"center"} mt={"50px"}>Shop what you love-faster and easier.</Text>
     <Text textAlign={"center"}  cursor={"pointer"}   fontSize={"15px"}  w={"fit-content"} color={"#191A1B"} margin={'auto'}  mt={"10px"} mb={"50px"} borderBottom={"1px solid black"} _hover={{borderBottom:"2px solid black", }}>Sign In or Create an Account</Text>
     <Text textAlign={"left"} mt={"40px"}  fontSize={"22px"} color={"#191A1B"}  fontWeight={'700'} >Great Deals on What You Love</Text>
    <Text textAlign={"left"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"}>Items similar to what you have browsed are on sale</Text>

    <Flex justifyContent={"center"} gap={"35px"} mt={"20px"}>
        {/* card1 */}
    <Card w={"229px"} h={"500px"}  backgroundColor={'#FFFFFF'} p={"5px"}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/6df3a6e3-5d25-49be-a091-682c4b4f99aa.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        ARMANI beauty
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 2,043.84 <span color='#D82508' fontWeight={"normal"}>(40% off)</span>
      </Text>
      <Text color='#647175' textDecoration={"line-through"} fontWeight={"bold"} fontSize='lg'>
        INR 3,456.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (405)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'#FFFFFF'} p={"5px"}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/8514b2dd-fdf1-469c-92fd-ef20c25ef890.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
    <Text color='#191A1B' fontSize='lg'>
        TOM FORD
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 8,440.84 <span color='#D82508' fontWeight={"normal"}>(14% off)</span>
      </Text>
      <Text color='#647175' textDecoration={"line-through"} fontWeight={"bold"} fontSize='lg'>
        INR 9,4514.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (13)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'#FFFFFF'} p={"5px"}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/28c67ef0-c5b1-4c4c-9b12-f667958dfc92.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       ARMANI beauty
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 2,097.42 - INR 4,033.98
      </Text>
      <Text color='#647175' textDecoration={"line-through"} fontWeight={"bold"} fontSize='lg'>
        INR 2,151.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#' fontWeight={"bold"} fontSize='md'>
        (2065)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'#FFFFFF'} p={"5px"}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/f1d8fac8-42f9-4188-9899-fd1b4de0069f.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
    <Text color='#191A1B' fontSize='lg'>
        ARMANI beauty
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 2,043.42  <span color='#D82508' fontWeight={"normal"}>(40% off)</span>
      </Text>
      <Text color='#647175' textDecoration={"line-through"} fontWeight={"bold"} fontSize='lg'>
        INR 3,831.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (115)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'#FFFFFF'} p={"5px"}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/53517b90-fa86-40d2-a1af-6453c1ae21ef.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
    <Text color='#191A1B' fontSize='lg'>
       IT Cosmetics
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 3,549.42  <span color='#D82508' fontWeight={"normal"}>(20% off)</span>
      </Text>
      <Text color='#647175' textDecoration={"line-through"} fontWeight={"bold"} fontSize='lg'>
        INR 4,431.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (475)
      </Text>
    </Flex>
    </Stack>
</Card>
    </Flex>
     </>
  )
}
