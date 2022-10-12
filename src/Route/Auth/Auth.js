import React from 'react';
import styled from 'styled-components'
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

const Auth = () => {
    
  
  return (
    <Container>
        <SignIn/>
        <SignUp/>
    </Container>
  )
}

export default Auth;

//style code below

const Container = styled.div`
  display: flex;
  justify-content:space-between;
  
  margin: 30px auto;
  padding:0px 10px;
`