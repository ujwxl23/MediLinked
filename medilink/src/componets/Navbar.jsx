import React from "react";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// import { ConnectWallet } from "@thirdweb-dev/react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "10px",
      }}
    >
      <Typography variant="h3" underline="always" fontWeight="bold">
        MediLink
      </Typography>

      <button
        style={{
          padding: "10px 40px",
          fontSize: "1rem",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
}

export default Navbar;
