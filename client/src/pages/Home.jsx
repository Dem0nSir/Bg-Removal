import React from 'react'
import Header from "../components/Header.jsx";
import Steps from "../components/Steps.jsx";
import BgSlider from "../components/BgSlider.jsx";
import Testimonials from "../components/Testimonials.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <Steps/>
            <BgSlider/>
            <Testimonials/>
        </div>
    )
}
export default Home
