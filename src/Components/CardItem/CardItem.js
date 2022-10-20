import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch,useSelector} from 'react-redux';
import {cartItemSelector} from '../../store/cart/cartSelector'
import {addToCart} from '../../store/cart/cartAction'
const styles={
    media:{
        margin:10
        
    }
}

export default function CardItem({item}) {
    const {name,price,imageUrl} = item;
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemSelector)

    const addItem=(item)=>{
      
      dispatch(addToCart(cartItems,item))  
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={name}
        style={styles.media}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Rs. {price.toFixed(2)} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>addItem(item)}>Buy Now</Button>
        <Button size="small">Add to Card</Button>
      </CardActions>
    </Card>
  );
}
