import React, { useState, useEffect } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import banner1 from "../Images/banner1.png";
import banner2 from "../Images/banner2.png";
import banner3 from "../Images/banner3.png";
import banner4 from "../Images/banner4.png";
import banner5 from "../Images/banner5.png";

export default function BannerSlider() {
  const slides = [
    { img: banner1 },
    { img: banner2 },
    { img: banner3 },
    { img: banner4 },
    { img: banner5 }
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
      mt={"30px"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="600px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md" h={"600px"}>
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
