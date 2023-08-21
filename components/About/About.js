import {
  Flex,
  Heading,
  Text,
  Container,
  chakra,
  shouldForwardProp,
  Box,
  Button,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Image from "next/image";
import Coin from "../../img/coin.svg";
import Friend from "../../img/friend.svg";
import Feed from "../../img/feedback.svg";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = () => {
  return (
    <>
      <Container as="section" maxW="auto" bg="#FBF6F1" pt="119px" pl={{md: "75px", base: "22px"}}>
      <Flex columnGap="222px" alignItems="center" pb="100px">
        <ChakraBox
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          display={["none", "none", "none", "flex"]}
        >
          <Image src={Coin} />
        </ChakraBox>

        <Box as="div" width={{ base: "700px", "2xl": "100%" }} >
          <Heading as="h2" 
            fontSize={{md: "40px", base: "22px"}}
            fontWeight={{md: "700px", base: "700px"}}
            fontFamily="PT Serif"
            mb="12px"

          >
            What is Celo Africa DAO?
          </Heading>

          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px" mb="15px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
        </Box>
      </Flex>

      <Flex columnGap="72px" alignItems="center" pb="100px">
        <Box as="div" width={{ base: "700px", "2xl": "100%" }} >
          <Heading as="h2" 
            fontSize={{md: "40px", base: "22px"}}
            fontWeight={{md: "700px", base: "700px"}}
            fontFamily="PT Serif"
            mb="12px"

          >
            How does the DAO work?
          </Heading>

          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px" mb="15px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
        </Box>

        <ChakraBox display={["none", "none", "flex", "flex"]}>
          <Image src={Friend} />
        </ChakraBox>
      </Flex>

      <Flex columnGap="72px" alignItems="center" pb="191px">
      <ChakraBox display={["none", "none", "flex", "flex"]}>
          <Image src={Feed} />
        </ChakraBox>

        <Box as="div" width={{ base: "700px", "2xl": "100%" }} >
          <Heading as="h2" 
            fontSize={{md: "40px", base: "22px"}}
            fontWeight={{md: "700px", base: "700px"}}
            fontFamily="PT Serif"
            mb="12px"

          >
            How to be a part of the DAO?

          </Heading>

          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px" mb="15px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text fontSize={{md: "22px", base: "18px"}} fontFamily="Sofia Sans" fontWeight="200px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Button
            rightIcon={<ArrowForwardIcon />}
            bg="#FCF951"
            borderRadius={{lg: "60px", md: "60px", base: "60px"}}
            width={{lg: "311px", md: "246px", base: "193px"}}
            height={{lg: "90px", md: "48px", base: "48px"}}
            gap="10px"
            mt="72px"
            pl="10px"
            border="1px solid rgba(103, 103, 103, 0.75)"
            fontSize={{lg: "24px", md: "18px", sm: "16px"}}
            fontFamily="Sofia Sans"
            fontWeight="400px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="/">Join the DAO</Link>
          </Button>
        </Box>

          
      
      </Flex>
{/* 
      <Flex columnGap="61px" alignItems="center">
        <ChakraBox display={["none", "none", "flex", "flex"]}>
          <Image src={Feed} />
        </ChakraBox>

        <Box as="div" width={{ base: "700px", "2xl": "100%" }} pb="291px">
          <Heading as="h2" 
            fontSize={{md: "40px", sm: "22px"}}
            fontWeight="700px"
            fontFamily="PT Serif"
            mb="12px"
          >
            How to be a part of the DAO?
          </Heading>

          <Text fontSize="24px" fontFamily="Sofia Sans" fontWeight="200px" mb="15px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>
          <Text fontSize="24px" fontFamily="Sofia Sans" fontWeight="200px">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </Text>

          <Button
            rightIcon={<ArrowForwardIcon />}
            bg="#FCF951"
            borderRadius="60px"
            width="311px"
            height="90px"
            gap="15px"
            mt="72px"
            border="1px solid rgba(103, 103, 103, 0.75)"
            fontSize="24px"
            fontFamily="Sofia Sans"
            fontWeight="400px"
          >
            <Link href="/">Join the DAO</Link>
          </Button>
        </Box>
      </Flex> */}
    </Container>
    
  </>
    
  );
};

export default About;

