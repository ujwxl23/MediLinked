import React from "react";
import BuyPage from "../pages/BuyPage";
import SellPage from "../pages/SellPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPAge";
import RegisterPage from "../pages/RegistorPage";

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

]