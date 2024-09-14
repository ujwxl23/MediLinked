import React from "react";
import Navbar from "../componets/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import pho from "../assets/Future_Medical_Device_Supply_Chain-1320x878-removebg-preview.png";
import { Box } from "@mui/material";

function HomePage() {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/buy");
  };

  const handleSellClick = () => {
    navigate("/register");
  };
  return (
    <>
      <div style={{ backgroundColor: "#4eaaa1", padding: "10px" }}>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "25px",
          }}
        >
          <div style={{ width: "50%" }}>
            <Typography
              variant="h3"
              align="center"
              fontWeight="bold"
              my={4}
              textAlign="left"
            >
              MediLink: Bridging Health and Commerce
            </Typography>
            <Typography variant="h6" align="center" my={4} textAlign="left">
              We bridge the gap between pharmaceutical manufacturers,
              shopkeepers, and customers. Our platform facilitates the efficient
              management of pharmaceutical inventory, fostering sustainability
              in the healthcare supply chain
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  padding: "20px 25px",
                  fontSize: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: "70px",
                }}
                onClick={handleBuyClick}
              >
                Go to Marketplace
              </button>
            </div>
          </div>
          <img
            src={pho}
            style={{ width: "500px", height: "350px" }}
            alt="parts"
          />
        </div>
      </div>
      {/* <div style={{ backgroundColor: "black" }}>Hello</div> */}
      <div style={{ backgroundColor: "#4eaaa1", padding: "10px" }}>
        <Typography
          color="black"
          marginLeft="50px"
          variant="h3"
          align="center"
          fontWeight="bold"
          my={4}
          textAlign="left"
        >
          Sustainable Development Goals
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            color="black"
            marginLeft="50px"
            fontWeight="bold"
          >
            Access to Essential Medicines and Vaccines (SDG 3)
          </Typography>
          <Typography variant="h6" mb={4} color="black" marginLeft="50px">
            A well-functioning medicine supply chain is essential for achieving
            this goal. It ensures that necessary health products reach end-users
            promptly and efficiently. These challenges can lead to stock-outs of
            essential medicines, exacerbating health disparities
          </Typography>
          <Typography
            variant="h5"
            color="black"
            marginLeft="50px"
            fontWeight="bold"
          >
            Responsible Production and Consumption (SDG 12)
          </Typography>
          <Typography variant="h6" mb={4} color="black" marginLeft="50px">
            This promotes resource efficiency and waste reduction (SDG 12.4) by
            enabling manufacturers to optimize raw material usage, minimize
            energy consumption, and reduce water usage throughout the medicine
            production process.
          </Typography>
          <Box backgroundColor="black">
            <Typography variant="h2" align="center" color="white" my={3}>
              GET MEDICINES IN UPTO 50% OFF
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
}

export default HomePage;
