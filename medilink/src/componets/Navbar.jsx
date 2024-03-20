import React from 'react'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

function Navbar() {

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

  return (
        <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: "10px", // Adjust the values to your preference
        borderBottomRightRadius: "10px", // Adjust the values to your preference
        padding: "10px", // Add padding for better appearance
      }}>
        <Typography variant="h3" underline="always" fontWeight="bold">
          MediLink
        </Typography>

        <button
            style={{
                padding: '10px 20px',
                fontSize: '1rem',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                // marginBottom: "70px"
            }}
            onClick={handleClick}
            >
            Admin Login
            </button>
      </div>
  )
}

export default Navbar
