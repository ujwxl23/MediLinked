import React from "react";
import BuyPage from "../pages/BuyPage";
import SellPage from "../pages/SellPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPAge";
import RegisterPage from "../pages/RegistorPage";
import ProductTable from "../pages/AdminPage";
import CheckoutPage from "../pages/CheckoutPage";
import ThankYouPage from "../pages/ThankyouPage";

export const Links = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
    showInNavigation: true,
  },
  {
    name: "Buy",
    path: "/buy",
    element: <BuyPage />,
    showInNavigation: true,
  },
  {
    name: "Sell",
    path: "/sell",
    element: <SellPage />,
    showInNavigation: true,
  },
  {
    name: "Login",
    path: "/login",
    element: <LoginPage />,
    showInNavigation: true,
  },
  {
    name: "Register",
    path: "/register",
    element: <RegisterPage />,
    showInNavigation: true,
  },
  {
    name: "AdminTable",
    path: "/table",
    element: <ProductTable />,
    showInNavigation: true,
  },
  {
    name: "Checkout",
    path: "/checkout",
    element: <CheckoutPage />,
    showInNavigation: true,
  },
  {
    name: "Thankyou",
    path: "/thankyou",
    element: <ThankYouPage />,
    showInNavigation: true,
  },
];
