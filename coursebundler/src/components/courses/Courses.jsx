import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Course =({views,title,imageSrc,id,addToPlayListHandler,creator,description,lectureCount}) => {
    return(
        <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'}/>
            <Heading textAlign={["center","left"]} maxW="200px"  size={'sm'} fontFamily={"sans-serif"}
            noOfLines={3} children={title}/>
            <Text noOfLines={2} children={description}/>
            <HStack>
                <Text fontWeight={'bold'} textTransform="uppercase" children={'creator'}/>
                <Text fontFamily={'body'} textTransform="uppercase" children={creator}/>
            </HStack>
            <Heading textAlign={"center"} size="xs" children={`Lectures -${lectureCount}`} textTransform="uppercase"
            />
            <Heading  size="xs" children={`Views -${views}`} textTransform="uppercase" />

        <Stack direction={["column","row"]} alignItems="center">
            <Link to={`/course/${id}`}>
            <Button colorScheme={"yellow"}>Watch Now</Button>
            </Link>
            <Button variant={"ghost"} colorScheme={"yellow"} onClick={() => addToPlayListHandler(id)}>Add to playlist</Button>

        </Stack>


        </VStack>

    )
}


const Courses = () => {

    const [keyword,setKeyword] =useState("");
    const [category,setCategory] =useState("");

    const addToPlayListHandler = () => {
        console.log("Added to playlist");
    }


    const categories = [
        "Web Development","Artificial Intelligence","Data Structure & Algorithm","App Development","Data Science","Game Development"
    ]
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Heading children="All Courses" m={'8'}/>

        <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='search a course...' type={'text'} focusBorderColor='yellow.500'/>

    <HStack overflowX={"auto"} paddingY="8" css={{"&::-webkit-scrollbar":{
        display: "none"
    }}}>
        {
            categories.map((item,index)=> (
                <Button key={index} onClick={()=> setCategory()} minW={'60'}>
            <Text children={item}/>
        </Button>
            ))
        }
        
    </HStack>

    <Stack
    direction={["column",'row']}
    flexWrap="wrap"
    justifyContent={['flex-start','space-evenly']}
    alignItems={["center","flex-start"]}    
    >
        <Course
        title={"Sample"}
        description={"Sample"}
        views={23}
        imageSrc={"https://img.freepik.com/free-photo/close-up-adorable-kitten-outdoors_23-2150782429.jpg?t=st=1720782919~exp=1720786519~hmac=2ce20fd48e8f7024e5716aa134cae22c918cc27fad0020e3f3957bd144e724c9&w=740"}
        id={"sample"}
        creator={"sample boy"}
        lectureCount={2}
        addToPlayListHandler={addToPlayListHandler}
        />

    </Stack>

    </Container>
  )
}

export default Courses