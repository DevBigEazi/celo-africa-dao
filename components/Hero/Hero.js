import {
    Flex,
    Button,
    Text,
    Container,
    Box,
    Heading,
    chakra,
    shouldForwardProp,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  import { motion, isValidMotionProp } from "framer-motion";
  import Image from "next/image";
  import HeroImg from "../../img/hero.svg";
  import Friend from "../../img/friend.svg";
  
 
  
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  
  const Hero = () => {
    return (
      <Flex
        as="section"
        maxW="auto"
        bg="#FBF6F1"
        pl={{base: "21px", sm:"40px", md:"65px"}}
        pt={{base: "94px", sm:"99px", md:"148px"}} 
        flexDir="row"
        pr="60px"
  
        
      >
      <Box  width={{ base: "700px", "2xl": "80%" }}
      columnGap="290.93px"

      
      
      >
        <Heading
          as="h3"
          width={{base: "300px", sm: "400px", md: "668px"}}
          fontSize={{ base:"28px", md:"40px"}}
          color="#1C1C1C"
          fontWeight={700}
          fontFamily="PT Serif"
          lineHeight="normal"
          mb={{base: "20px", sm:"40px", md:"40px"}}

  
        >
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <Text
          as="p"
          color="#1C1C1C"
          width={{base: "300px", sm: "400px", md: "661px"}}
          fontFamily="Sofia Sans"
          fontSize={{ base:"18px", sm:"22px", md:"32px",}}
          fontWeight="300"
          lineHeight="normal"
          fontStyle="normal"
          mb={{base: "29px", sm:"20px", md:"50px",}}
          pr="80px"
        >
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
  
        <Button
          rightIcon={<ArrowForwardIcon />}
          bg="#FCF951"
          borderRadius="60px"
          height={{base: "48px", sm:"55px", md:"80px"}}
          padding="10px"
          columnGap="5px"
          justify-content="center"
          align-items="center"
          fontSize={{base: "16px", md:"24px"}}
          fontFamily="Sofia Sans"
          fontWeight="400px"
          w={{base: "200px", sm: "248px", md:"329px"}}
          mb={{base: "18px", sm:"25px", md:"28px"}}
          
  
        >
          <Link href="/">Join the community</Link>
        </Button>
      </Box>
  
        <ChakraBox width="595px"
        display={["none", "none", "none", "flex"]} flexDir="column">
        <Image src={HeroImg} />
        </ChakraBox>
  
      </Flex>
    );
  };
  
  export default Hero;
  