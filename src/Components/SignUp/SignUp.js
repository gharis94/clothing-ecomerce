import React,{useState} from 'react'
import {createUserWithEmailPassword,createUserDocFromAuth} from '../../utils/firebase';
import TextField from '@mui/material/TextField';
import BasicButton from '../BasicButton/BasicButton'
import Box from '@mui/material/Box';

const initialState={
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
};

const SignUp = () => {
  const [formField,setFormField] =useState(initialState);
  const {displayName,email,password,confirmPassword} = formField;

  const handleChange =(e)=>{
    const {name,value} = e.target
    setFormField({...formField,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    if(password !== confirmPassword) return'password & confirm password not same'

    try{
      const {user} = await createUserWithEmailPassword(email,password);
      await createUserDocFromAuth(user,{displayName})
      setFormField(initialState)
    }catch(error){
      console.log('error in creating user',error)
    }

  }

  return (
    <div>
      <h4>Register Account Here</h4>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <Box component = 'form' sx = {{'& > :not(style)': {
                        m: 1,
                        width: '35ch'
                    },}} noValidate autoComplete = "off">
        
          <TextField id='outlined-basic' label='Name' variant="outlined" type='text' name='displayName' value={displayName} onChange={(e)=>handleChange(e)}/>
        
          <TextField id='outlined-basic' label='Email' variant="outlined" type='email' name='email' value={email} onChange={(e)=>handleChange(e)}/>
        
          <TextField id='outlined-basic' label='Password' variant="outlined" type='password' name='password' value={password} onChange={(e)=>handleChange(e)}/>
        
          <TextField id='outlined-basic' label='Confirm Password' variant="outlined" type='password' name='confirmPassword' value={confirmPassword} onChange={(e)=>handleChange(e)}/>
        </Box>
        
        <BasicButton variant='outlined' value='Sign Up' type='submit'/>
      </form>
    </div>
  )
}

export default SignUp;