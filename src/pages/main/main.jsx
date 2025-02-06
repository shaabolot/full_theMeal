import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
};

export default Main;