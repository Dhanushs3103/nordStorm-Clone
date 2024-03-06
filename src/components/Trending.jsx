import React from 'react'
import { Flex,Text,Image,Card,Stack,Input,Button } from '@chakra-ui/react'
import star from "../Images/star.png"

export default function Trending() {
  return (
    <>
      <Text textAlign={"left"} mt={"80px"}  fontSize={"22px"} color={"#191A1B"}  fontWeight={'700'} >Trending Near You</Text>
    <Text textAlign={"left"}  fontSize={"15px"} mt={"5px"} color={"#191A1B"}>The most-viewed items by shoppers in your area</Text>
        <Flex justifyContent={"center"} gap={"10px"} mt={"20px"}>
        {/* card1 */}
    <Card w={"210px"} h={"500px"} backgroundColor={'#F9F9F9'} p={"5px"}>
    <Image
    borderRadius={"5px"}
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/f3478605-9551-4d7d-8b85-ec619312d3d5.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       Nike
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 4,241.06 - INR 8,989.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (109)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={"5px"}>
    <Image
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/f6b12a6d-03b6-46aa-8b74-14a508aae043.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Nike
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 4,932.83 - INR 9,412.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (284)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={"5px"}>
    <Image
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/14c06b66-9ec8-48a7-8dc9-dfb9f0ab5be4.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       UGG
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 11,651.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (1106)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={"5px"}>
    <Image
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/c278c449-39db-4aec-8c96-317d9dddc049.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        On
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 12,508.98
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (1482)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={"5px"}>
    <Image
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/8c97d60e-bfd7-4876-8595-fe18b7c0e067.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        NordStrom
      </Text>
      <Text color='#D82508' fontWeight={"bold"} fontSize='lg'>
        INR 1,741.06 (33% off)
      </Text>
      <Text color='gray' textDecoration={"line-through"} fontWeight={"400"} fontSize='lg'>
        INR 2,599.00
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (2569)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card6 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={"5px"}>
    <Image
    h={"290px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/28c6040f-2317-4c9e-80dc-cfa793dfaac1.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Birkenstock 
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 4,447.63
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (2561)
      </Text>
    </Flex>
    </Stack>
</Card>
    </Flex>
    <Flex justifyContent={"right"} mt={"80px"}>
      <Text fontSize={"16px"} color={"#333333"} fontWeight={'500'} textAlign={"center"} mt={"6px"} mr={"10px"}>Get Email Updates:</Text>
      <Input
        w={"300px"}
        pr='4.5rem'
        type="email"
        p={"8px"}
        placeholder='Email Address'
        border={'1px solid black'}
        borderRadius={'0'}
        borderBottom={'3px solid black'}
        _hover={{borderBottom:'3px solid black',borderRadius:"0"}}
      />
       <Button bg='black' fontWeight="200" color="white" h={"40px"} fontSize="16px" size='lg' w="300px" borderRadius="0" _hover={{bg:"#333333",color:"white"}}>
         Sign up
       </Button>
    </Flex>
    </>
  )
}
