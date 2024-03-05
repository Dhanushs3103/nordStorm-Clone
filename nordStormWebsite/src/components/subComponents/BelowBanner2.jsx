import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner2() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>

        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/099d6648-6e3a-4fe5-bc94-951d56200b83.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       FERRAGAMO Gancini 
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
      INR 49,303.27
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
      src="https://n.nordstrommedia.com/id/sr3/21f7943b-10f8-49c5-9df7-73f248ddd45b.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Prada
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 80,499.09
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (82)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/d0a87edc-00a3-47b2-bcdc-c3f66b071977.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       FERRAGAMA
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 49,302.29
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
      src="https://n.nordstrommedia.com/id/sr3/14edca11-3b83-4eab-9d67-1b8d559a66cb.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        off-White
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 58,235.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (7)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/b53d7694-2270-45c8-be43-62b4450f9ece.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Dolce&Gabbana
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 63,301.06
      </Text>
    <Flex>
    
    </Flex>
    </Stack>
</Card>
    </Flex>

    </>
  )
}

