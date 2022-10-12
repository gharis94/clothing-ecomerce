import React,{useContext} from 'react'
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../asset/crwn.svg'
import CartIcon from '../../Components/CartIcon/CartIcon';
import {UserContext} from '../../context/userContext/userContext';
import {signOutFn} from '../../utils/firebase'
import DropDown from '../../Components/DropDown/DropDown';

const Nav = () => {
  const {currentUser} = useContext(UserContext);
  
  return (
    <>
        <Navigation>
          <LogoContainer>
            <LinkS to='/'><Logo/></LinkS>
          </LogoContainer>
          <LinkContainer>
            <LinkS to='shop'>SHOP</LinkS>
              <br/>
                {
                  currentUser ? (
                    <LinkA onClick={()=>signOutFn()}>SIGN OUT</LinkA>
                  ):(
                    <LinkS to='auth'>SIGN IN</LinkS>
                  )
                }
                <DropDown/>
                
            </LinkContainer>
        </Navigation>
        <Outlet/>
    </>
    
  )
}

export default Nav;


//style below

const Navigation = styled.div`
height:70px;
width:100%;
display:flex;
justify-content:space-between;
margin-bottom:25px
`

export const LogoContainer = styled.div`
height:100%;
width:70px;
padding:25px;
`

const LinkContainer = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:flex-end;
`

const LinkS = styled(Link)`
padding:10px 15px;
cursor:pointer;
`
const LinkA = styled.span`
padding:10px 15px;
cursor:pointer;
`