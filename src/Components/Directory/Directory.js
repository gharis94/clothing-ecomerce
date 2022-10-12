import React from 'react'
import styled from 'styled-components';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

const Directory = ({categories}) => {

  return (
    <Container>
        {
            categories.map(category=><DirectoryItem key={category.id} category={category}/>)
        }
    </Container>
  )
}

export default Directory;


//styles code below

const Container = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`