import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner5() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>

        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/265503e2-e973-4f07-a4fb-16ee9c9b9206.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       Travis Mathew
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
      INR 4,447.27
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
      src="https://n.nordstrommedia.com/id/sr3/1c2ee3ce-8e7e-4605-9bbb-6d8be5e30b54.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Allsaints
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
     INR 8,807.83
      </Text>
    <Flex>
   
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/9ae33158-05ad-446b-8fce-f8d50f98ab59.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       Noah
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 13,229.29
      </Text>
    <Flex>
    
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/9c3ec5cd-91ad-4dae-a0b5-e3aa71f3fe5d.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        New Balance
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 13,769.90
      </Text>
    <Flex>
   
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/d3182192-74b5-49a9-9f97-0d5b7a218290.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Torino
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 10,230.06
      </Text>
    <Flex>
    </Flex>
    </Stack>
</Card>
    </Flex>

    </>
  )
}

