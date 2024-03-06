import React, { useState, useEffect } from 'react';
import { Flex, Box,Image } from '@chakra-ui/react';
import topbelow1 from "../Images/topbelow1.png";
import topbelow2 from "../Images/topbelow2.png";
import topbelow3 from "../Images/topbelow3.png";

export default function BelowSlider() {
  const slides = [
    { img: topbelow1 },
    { img: topbelow2 },
    { img: topbelow3 }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all 1s",
    marginLeft: `-${currentSlide * 100}%`
  };

  const SLIDES_INTERVAL_TIME = 4000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);

    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      w="full"
      _dark={{
        bg: "#3e3e3e",
      }}
      mt={"80px"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="180px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" h={"180px"}>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}


