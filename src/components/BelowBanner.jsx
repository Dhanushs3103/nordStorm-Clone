import React, { useState, useEffect } from 'react';
import { Text, Box, Flex, Divider } from '@chakra-ui/react';
import BelowBanner1 from './subComponents/BelowBanner1';
import BelowBanner2 from './subComponents/BelowBanner2';
import BelowBanner3 from './subComponents/BelowBanner3';
import BelowBanner4 from './subComponents/BelowBanner4';
import BelowBanner5 from './subComponents/BelowBanner5';
import BelowBanner6 from './subComponents/BelowBanner6';

const components = [BelowBanner1, BelowBanner2, BelowBanner3, BelowBanner4, BelowBanner5, BelowBanner6];

export default function BelowBanner() {
  const [selectedText, setSelectedText] = useState(0);

  const handleClick = (index) => {
    console.log("Clicked Index:", index);
    setSelectedText(prevIndex => {
      console.log("Previous Index:", prevIndex);
      return prevIndex === index ? null : index;
    });
  };
  
  useEffect(() => {
    setSelectedText(0);
  }, []);

  return (
    <>
      <Box mt={"40px"}>
        <Text color={"#333333"} fontSize={"24px"} fontWeight={"bold"}>
          Top Picks for You
        </Text>
      </Box>
      <Flex gap={"20px"} mb={"10px"}>
        {['Best-Selling Beauty Products', 'Designer Mens Resort & Spring Fashion', 'Mens Bestsellers', 'Natural Beauty', 'Mens New Arrivals', 'Womens New Arrivals'].map((text, index) => (
          <Text
            key={index}
            color={index === selectedText ? 'black' : '#333333'}
            fontSize={"16px"}
            borderBottom={index === selectedText ? '2px solid black' : ""}
            fontWeight={index === selectedText ? "bold" : ""}
            onClick={() => handleClick(index)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </Text>
        ))}
      </Flex>
      <Divider mb={"10px"} />
      {selectedText !== null && React.createElement(components[selectedText])}
    </>
  );
}
