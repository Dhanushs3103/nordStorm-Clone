import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner3() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>

        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/5ca72fe3-c521-4c89-a3b1-0abbed95f83a.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       FERRAGAMO 
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
      INR 37,303.27
      </Text>
    <Flex>
   
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/3dc43c80-26d7-40fe-8581-d2d5f1a84b1b.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Fear of God Essentials
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 3,025.09
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (34)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/56c18a74-3e0e-4438-906b-88bc317e9101.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       FERRAGAMo
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 29,562.29
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (01)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/c4de088a-77cd-4b69-983c-f82863d4e9b1.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        On
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 12,549.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (491)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/56c18a74-3e0e-4438-906b-88bc317e9101.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        FERRAGAMMO
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 29,581.06
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
    </Flex>
    </Stack>
</Card>
    </Flex>

    </>
  )
}

