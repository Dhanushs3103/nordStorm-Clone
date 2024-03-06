import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner4() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>

        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/0a1576d1-7b30-44c4-ba6c-8d650fe522f9.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       True Botanical
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
      INR 2,157.27
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (232)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/f2fd6a42-ca37-47a4-95a2-3922bf47468c.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Westman Astlier
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
     INR 4,302.83
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (1137)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/bbf5c3aa-fe51-4c9b-96bc-c617af6d40e0.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       Kosas
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 1,829.29
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (198)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/23f0b041-122e-4e1c-8365-0e9c3c63c96d.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Kopari
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 3,769.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (253)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/b796bab9-dd23-4a95-9809-332ec6be55ca.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        ILIA
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 2,230.06
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
         <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (961)
      </Text>
    </Flex>
    </Stack>
</Card>
    </Flex>

    </>
  )
}

