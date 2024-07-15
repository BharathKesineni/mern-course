import React from 'react'
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

const Subscribe = () => {
  return (
  <Container h="90vh" p="16">

    <Heading children="Welcome" my="8" textAlign={"center"}/>

    <VStack boxShadow={"lg"} alignItems="stretch" borderRadius={"lg"} spacing="0">

      <Box bg="yellow.400" p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
        <Text color={"black"} children={`Pro Pack -$299.00`}/>
      </Box>

    </VStack>

  </Container>                                                                                                                                                                                                              
  )
}

export default Subscribe                                                                                           