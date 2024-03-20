import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers';
import { useSigner } from "@thirdweb-dev/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

import Navbar from '../componets/Navbar'

function BuyPage() {

  const [loading, setLoading] = useState(false);

 const cardData = [ 
  { 
    image:'src/assets/combiflam.png', 
    title: 'Combiflam', 
    description: 'Pain Relif', 
    price: '40', 
  }, 
  { 
    image: 'src/assets/crocin.jpeg', 
    title: 'Crocin', 
    description: 'Helps reduce Fever', 
    price: '30', 
  }, 
  { 
    image: 'src/assets/pantocid.jpeg', 
    title: 'Pantocid', 
    description: 'Treatment of Gastroesophageal Reflux Disease', 
    price: '15', 
  }, 
  { 
    image: 'src/assets/Paracetamol.jpeg', 
    title: 'Paracetamol', 
    description: 'Treats pain and fever', 
    price: '10', 
     
  },   
  ]; 

  const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
  };

  //  const handleBuy = async (price) => {
  //   try {
  //     setLoading(true);

  //     const recipientAddress = '0xCB511d1366cDED23FE9FBBd8FA0D9b6160BC55AC';
  //     const contract = new ethers.Contract(contractAddress, contractABI, signer);
  //     const priceInWei = ethers.utils.parseEther(price);

  //     const approveTx = await contract.approve(signer.getAddress(), priceInWei);
  //     await approveTx.wait();

  //     // Call transferFrom function
  //     const transaction = await contract.transferFrom(
  //       signer.getAddress(),
  //       recipientAddress,
  //       priceInWei
  //     );

  //     // Wait for the transaction to be mined
  //     await transaction.wait();

  //     console.log(`Tokens transferred successfully to ${recipientAddress}`);
  //     toast.success('Transaction completed successfully');
  //   } catch (error) {
  //     console.error('Error transferring tokens:', error);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // };

  
  return (
     <div> 
      <Navbar/> 
      <br/> 
      <h2>Marketplace</h2> 
      <div style={cardContainerStyle}> 
        {cardData.map((card, index) => ( 
          <Card key={index} sx={{ maxWidth: 345, flex: '1 0 calc(33.33% - 16px)' }}> 
            <CardMedia sx={{ height: 240 }} image={card.image} title={card.title} /> 
            <CardContent> 
              <Typography gutterBottom variant="h5" component="div"> 
                {card.title} 
              </Typography> 
              <Typography variant="body2" color="text.secondary"> 
                {card.description} 
              </Typography> 
              <Typography variant="body2" color="text.secondary"> 
                Price-{card.price} 
              </Typography> 
            </CardContent> 
            <CardActions> 
              <Button size="small" href={card.verificationLink} target="_blank" rel="noopener noreferrer">Add To Cart</Button> 
            </CardActions> 
          </Card> 
        ))} 
      </div> 
      <ToastContainer /> 
    </div> 
  )
}

export default BuyPage
