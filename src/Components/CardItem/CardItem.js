import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../../context/CartContext/CartContext';

const styles={
    media:{
        margin:10
        
    }
}

export default function CardItem({item}) {
    const {name,price,imageUrl} = item;
    const {addItem} = React.useContext(CartContext);
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
