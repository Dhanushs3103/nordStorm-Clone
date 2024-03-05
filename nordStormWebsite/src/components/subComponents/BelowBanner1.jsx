import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner1() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>
        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/33641b65-8113-49f9-911c-e9a384312d5f.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        MAC Cosmetics
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 2,241.06
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (763)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/e5d64f42-d9cd-43f0-903e-72bb9f851d13.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Ilia
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
        (10205)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/62082cee-bdc7-4d5c-8399-fb476668fa84.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       MAC Cosmetics
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 2,151.42
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (1576)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/ea52458e-2f76-4352-aece-ea5cf25ec9ba.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        ILIA
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 2,508.98
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (3982)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/59490b91-1a5e-48c4-9f5e-8dadd4bcad88.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Charlotte Tilbury 
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 2,241.06
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (2063)
      </Text>
    </Flex>
    </Stack>
</Card>
    </Flex>
    </>
  )
}

