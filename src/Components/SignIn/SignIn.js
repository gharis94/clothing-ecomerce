import React,{useState} from 'react'
import styled from 'styled-components';
import {signInWithGoogle,createUserDocFromAuth,signInWithEmailPassword} from '../../utils/firebase'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicButton from '../BasicButton/BasicButton'

const initialState = {
    email:'',
    password:''
}

const SignIn = () => {
 const [input,setInput] = useState(initialState);
 const {email,password} =input;

 const handleChange=(e)=>{ 
    const {name,value} = e.target;
    setInput({...input,[name]:value})
 };

 const googleButton =async()=>{
    try{
        const {user} = await signInWithGoogle();
        await createUserDocFromAuth(user);
    }catch(error){
        console.log('Error in logging',error)
    }
 }

 const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        const rsp = await signInWithEmailPassword(email,password);
        console.log(rsp)
    }catch(error){
        console.log(error)
    }
    
 }

 return (
    <Container>
        <h4>Already have account</h4>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <Box component = 'form'
            sx = {{'& > :not(style)': {
                        m: 1,
                        width: '35ch'
                    },}} noValidate autoComplete = "off" >

                <TextField id='outlined-basic' label='Email' variant="outlined" type='email' name='email' value={email} onChange={(e)=>handleChange(e)}/>
                
                <TextField id='outlined-basic' label='Password' variant="outlined"  type='password' name='password' value={password} onChange={(e)=>handleChange(e)}/>
            </Box>
            
            <Button>
                <BasicButton value='Sign In' variant='outlined' type='submit'/>
                <BasicButton variant='contained' value='Google Sign In' onClick={()=>googleButton()} type='button'/>
            </Button>
        </form>
        
    </Container>
  )
}

export default SignIn;


//style code is below

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:450px;
  margin:0 200px;
`

const Button = styled.div`
display:flex;
justify-content:space-between;
height:30%;
`