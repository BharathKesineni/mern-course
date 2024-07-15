import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setpassword] =useState("");


  return (
    <Container h={'95vh'}>
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
        <Heading children={"Welcome to Course Bundler"}/>

        <form style={{width:"100%"}}>

      <Box my={"4"}>
      <FormLabel htmmlFor="Email" children="Email Address"/>

<Input require id="email" value ={email} onChange={(e) => setEmail(e.target.value)}
placeholder="abc@gmail.com" type={"email"} focusBorderColor="yellow.500"

/>
      </Box>

      <Box my={"4"}>
      <FormLabel htmmlFor="Password" children="Password"/>

<Input require id="password" value ={password} onChange={(e) => setpassword(e.target.value)}
placeholder="Enter Your Password" type={"password"} focusBorderColor="yellow.500"

/>
      </Box>
      <Box>
        <Link to="/forgetpassword"><Button fontSize={"sm"} variant="link">Forget Password</Button></Link>
      </Box>

      <Button my="4" colorScheme={"yellow"} type='submit'>Login</Button>
      
      <Box my="4"> New User? <Link to="/register">  <Button colorScheme={"yellow"} variant="link"> SignUp </Button> {" "}
       here
      </Link>
      </Box>

        </form>

        </VStack>
    </Container>
  )
}

export default Login