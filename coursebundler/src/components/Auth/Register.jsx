import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

 export const fileUploadCss= {

    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94b",
    backgroundColor:"black"
}


const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss
}

const Register = () => {
    const [email,setEmail] =useState("");
    const [name,setname] =useState("");
    const [password,setpassword] =useState("");
    const [imagePrev,setImagePrev] =useState("");
    const [image,setImage] =useState("");



const changeImageHandler =(e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
    }
}


  return (
    <Container h={'95vh'}>
        <VStack h={"full"} justifyContent="center" spacing={"16"}>
        <Heading textTransform={"uppercase"} children={"Registration"}/>

        <form style={{width:"100%"}}>
    <Box my="4" display={"flex"} justifyContent="center">
        <Avatar src={imagePrev} size={"2xl"}/>
    </Box>



        <Box my={"4"}>
      <FormLabel htmmlFor="name" children="Name"/>

<Input require id="name" value ={name} onChange={(e) => setname(e.target.value)}
placeholder="abc" type={"text"} focusBorderColor="yellow.500"

/>
      </Box>

      <Box my={"4"}>
      <FormLabel htmmlFor="Email" children="Email Address"/>

<Input require id="email" value ={email} onChange={(e) => setEmail(e.target.value)}
placeholder="abc@gmail.com" type={"email"} focusBorderColor="yellow.500"/>
      </Box>

      <Box my={"4"}>
      <FormLabel htmmlFor="Password" children="Password"/>

<Input require id="password" value ={password} onChange={(e) => setpassword(e.target.value)}
placeholder="Enter Your Password" type={"password"} focusBorderColor="yellow.500"

/>
      </Box>

      <Box my={"4"}>
      <FormLabel htmmlFor="chooseAvatar" children="Choose Avatar"/>

<Input accept='image/*' require id="chooseAvatar" type={"file"} focusBorderColor="yellow.500" css={fileUploadStyle} onChange={changeImageHandler}/>
      </Box>

      <Button my="4" colorScheme={"yellow"} type='submit'>sign Up</Button>
      <Box my="4"> Already Signed Up? <Link to="/login">  <Button colorScheme={"yellow"} variant="link"> Login </Button> {" "}
       here
      </Link></Box>

        </form>

        </VStack>
    </Container>
  )
}


export default Register