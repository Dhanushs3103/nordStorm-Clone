import React from 'react'
import { Text,Card,Image,Stack, Flex  } from '@chakra-ui/react'
import star from "../../Images/star.png"

export default function BelowBanner6() {
  return (
    <>
    <Flex justifyContent={"center"} gap={"20px"} mt={"20px"}>

        {/* card1 */}
    <Card w={"229px"} h={"430px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    borderRadius={"5px"}
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/55a09a40-5af1-4475-ba77-48f9822b3210.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       PAT Mcgrabs Labs
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
      INR 2,229.27
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (152)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card2 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/e19ca089-adad-49c3-85c7-2f1a9bee2c63.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Adidas
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
     INR 10,807.83
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (143)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card3 */}
<Card w={"229px"}backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/390b5159-758b-4e47-860a-92c6fe44e77a.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
       Free People
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 3,409.29
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (23)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card4 */}
<Card w={"229px"}  backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/4f6907a6-f3e4-48ee-b677-25c3854795ee.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        HOKO
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 12,969.90
      </Text>
    <Flex>
    <Image
       w={"80px"}
       h={"20px"}
      src={star}
      alt='lipstick'
    />
     <Text color='#647175' fontWeight={"bold"} fontSize='md'>
        (22)
      </Text>
    </Flex>
    </Stack>
</Card>
{/* card5 */}
<Card w={"229px"} backgroundColor={'whitesmoke'} p={0}>
    <Image
    h={"300px"}
    w={"100%"}
      src="https://n.nordstrommedia.com/id/sr3/e1b53d33-7738-4b87-9352-b2009ab18650.jpeg"
      alt='lipstick'
    />
    <Stack mt='6' spacing='3'>
       <Text color='#191A1B' fontSize='lg'>
        Zella
      </Text>
      <Text color='black' fontWeight={"bold"} fontSize='lg'>
        INR 6,185.06
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
    </Flex>

    </>
  )
}

