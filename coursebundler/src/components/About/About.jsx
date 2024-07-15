import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import introVideo from "../../assets/videos/busy.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndConditions from "../../assets/docs/termsAndConditon"
import { Link } from 'react-router-dom';


const Founder = () => (
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"}>

        <VStack>
            <Avatar src='https://img.freepik.com/premium-photo/cyclist-riding-cross-country-bike-turning-one-wheel-bicycle-mountain-hill_10069-3330.jpg?w=1380' boxSize={["40","48"]}/>
            <Text children="Co-Founder" opacity={0.7}/>
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading children="Bharath Kesineni" size={["md","xl"]}/>
            <Text  textAlign={["center", "left"]} children={`Hi, I am a FullStack Developer Node and ReactJs. Our Mission is to provide quality content at reasonable price..`}/>
        </VStack>

    </Stack>
);

const VideoPlayer = () => (
    <Box>
        <video autoPlay 
            controls 
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
             src={introVideo}>
            </video>
    </Box>
)

const TandC = ({termsAndConditions}) => (
    <Box>
        <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my="4"/>
        <Box h="sm" p="4" overflowY={"scroll"}>
            <Text fontFamily={"heading"} letterSpacing={"widest"} textAlign={["center","left"]}>{termsAndConditions}</Text>
            <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days.."/>

        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center","left"]}/>
        <Founder/>

        <Stack m="8" direction={["column","row"]} alignItems="center">
            <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
                We are a video streaming platform with some premium courses available ONLY for premium users..
            </Text>
            <Link to="/subscribe">
            <Button variant={"ghost"} colorScheme='yellow'>
                CheckOut Our Plan
            </Button>
            </Link>
        </Stack>
<VideoPlayer/>

<TandC termsAndConditions={termsAndConditions}/>

<HStack m="4" p={"4"}>

    <RiSecurePaymentFill/>
    <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children={"Payment is secured by RazorPay.."}/>
</HStack>

    </Container>
  )
}

export default About