import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from "../pages/shared/Banner/Banner"
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;