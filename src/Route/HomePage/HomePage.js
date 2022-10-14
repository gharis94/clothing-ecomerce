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
        'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg',
        'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg'
      ]
  let [counter,setCounter] = useState(0)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter>=2){
        console.log('h')
        setCounter(0)
      }else{
        counter++
        setCounter(counter)
      }
    },3000)
    
    return ()=>clearInterval(interval);
  },[counter])
  return (
    <div>
      <Carosel>
        {console.log(counter)}
        <ImageContainer style={{backgroundImage:`url(${images[counter]})`}}/>
      </Carosel>

      <Directory categories={categories}/>
    </div>
  )
}

export default HomePage

const Carosel = styled.div`
height:50vh;
transition:box-shadow 800ms;
margin:10px 10px;
`

const ImageContainer= styled.div`
  height:100%;
  width:100%;
  border-radius:10px;
  object-fit:cover;
`

