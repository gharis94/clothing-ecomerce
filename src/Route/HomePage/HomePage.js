import React,{useEffect,useState} from 'react';
import Directory from '../../Components/Directory/Directory';
import styled from 'styled-components';

const HomePage = () => {
  const categories = [{
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
const images = ['http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
        'https: //jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
        'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg'
      ]
  const [counter,setCounter] = useState(0)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter === 2){
        setCounter(0);
      }else{
        setCounter(counter+1)
      }
        
    },3000)
    
    return ()=>clearInterval(interval);
  },[counter])
  return (
    <Main>
      <Carosel>
        <ImageContainer style={{backgroundImage:`url(${images[counter]})`}}/>
      </Carosel>

      <Directory categories={categories}/>
    </Main>
  )
}

export default HomePage
const Main=styled.div`
  padding:10px;
`

const Carosel = styled.div`
height:50vh;
transition:all 1s ease-in-out;
padding:10px 10px;
`
const ImageContainer = styled.div`
  height:90%;
  width:100%;
  border-radius:10px;
`