import React from 'react'
import { Divider,Text,Flex,Box,Image } from '@chakra-ui/react'
export default function Category() {
  return (
    <>
    <Divider borderBottom="3px solid #000000" orientation='horizontal' mt={'80px'} />
    <Text fontSize={"25px"} color={"#191A1B"}  fontWeight={'600'} textAlign={"center"} mt={"50px"} letterSpacing={"3px"}>SHOP BY CATEGORY</Text>
    
    <Flex  mt={"60px"} justifyContent={"center"}>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/ac9f18f1-4888-4868-8a44-0554aff74627.jpeg" cursor={"pointer"} alt="first"/>
            <Text textAlign={"center"} fontWeight={"600"}  fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Women</Text>
        </Box>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/fc1e0b3d-20f5-4707-9cad-35cd32cf9535.jpeg"  cursor={"pointer"} alt="Second"/>
            <Text textAlign={"center"} fontWeight={"600"}  fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Men</Text>
        </Box>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/7183101d-83a5-4bde-bc8b-452c39bc1fe0.jpeg" cursor={"pointer"} alt="Third"/>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Kids</Text>
        </Box>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/2de5d6fe-9cd0-4b65-b44e-4e8203a8bec3.jpeg" cursor={"pointer"} alt="Fourth"/>
            <Text textAlign={"center"}fontWeight={"600"}  fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Designer</Text>
        </Box>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/b2cbcfb4-f148-44fd-b235-c40e931d21ae.jpeg" cursor={"pointer"} alt="Fifth"/>
            <Text textAlign={"center"} fontWeight={"600"}  fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Home</Text>
        </Box>
        <Box>
            <Image src="https://n.nordstrommedia.com/it/70c916e8-05e9-4066-81cd-00d4cb0673af.jpeg" cursor={"pointer"} alt="Sixth"/>
            <Text textAlign={"center"} fontWeight={"600"} fontSize={"24px"} mt={"5px"} color={"#191A1B"}>Beauty & Frangrance</Text>
        </Box>
    </Flex>

    </>
  )
}
