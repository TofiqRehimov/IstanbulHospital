import React from 'react';
import Articles from "../Components/Articles";
import Cards from "../Components/Cards";
import Corusels from "../Components/Corusels";
import Content from "../Components/Content";
import PageInfo from "../Components/PageInfo";
import DoctorSlide from './DoctorSlide';
const Home = () => {
    return (
        <div>
            <Corusels />
            <Cards />
            <Content />
            <PageInfo />
            <DoctorSlide />
            <Articles />
        </div>
    );
};

export default Home;