import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cross from "../assets/cross.png";
import minus from "../assets/minus.png";

function BuyPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    toast.success(`${item.title} added to cart!`);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const cardData = [ 
    { 
      image:'src/assets/combiflam.png', 
      title: 'Combiflam', 
      description: 'Pain Relief', 
      price: '40', 
      expiryDate: '23/05/2024'
    }, 
    { 
      image: 'src/assets/crocin.jpeg', 
      title: 'Crocin', 
      description: 'Helps reduce Fever', 
      price: '30', 
      expiryDate: '23/05/2024'
    }, 
    { 
      image: 'src/assets/pantocid.jpeg', 
      title: 'Pantocid', 
      description: 'Treatment of Gastroesophageal Reflux Disease', 
      price: '15', 
      expiryDate: '23/05/2024'
    }, 
    { 
      image: 'src/assets/Paracetamol.jpeg', 
      title: 'Paracetamol', 
      description: 'Treats pain and fever', 
      price: '10', 
      expiryDate: '23/05/2024'
    },   
  ]; 

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  };

  return (
    <div> 
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <h1>Medilink</h1>
        <button
          onClick={toggleCart}
          style={{
            backgroundColor: 'black',
            color: 'white',
            fontSize: '1rem',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Cart ({cartItems.length})
        </button>
      </div>
      <br />
      <h1 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Marketplace</h1>
      <br/>
      <div style={cardContainerStyle}> 
        {cardData.map((card, index) => ( 
          <Card key={index} sx={{ 
            maxWidth: 345, 
            flex: '1 0 calc(33.33% - 16px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}> 
            <CardMedia 
              sx={{ height: 240 }} 
              image={card.image} 
              title={card.title} 
              style={{ objectFit: 'cover' }} 
            /> 
            <CardContent> 
              <Typography gutterBottom variant="h5" component="div"> 
                {card.title} 
              </Typography> 
              <Typography variant="body2" color="text.secondary"> 
                {card.description} 
              </Typography> 
              <Typography variant="body2" color="text.secondary"> 
                Price: {card.price} 
              </Typography> 
              <Typography variant="body2" color="text.secondary"> 
                Expiry Date: {card.expiryDate} 
              </Typography>
            </CardContent> 
            <CardActions> 
              <Button size="small" onClick={() => addToCart(card)}>Add To Cart</Button> 
            </CardActions> 
          </Card> 
        ))} 
      </div> 
      <ToastContainer />
      {showCart && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', backgroundColor: '#f0f0f0', zIndex: 999, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', padding: '16px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2>Cart</h2>
            <Button onClick={toggleCart}>
              <img src={cross} alt="Close" style={{ width: '30px', height: '30px' }} />
            </Button>
          </div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} 
                <Button size="small" onClick={() => removeFromCart(index)}>
                  <img src={minus} alt="-" style={{ width: '20px', height: '20px', color: 'red' }} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div> 
  )
}

export default BuyPage;
