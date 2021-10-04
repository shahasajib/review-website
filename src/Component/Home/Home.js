import React from 'react';
import "./Home.css"
import image from '../../image/home1.jpg'
const Home = () => {
    return (
        <div>
            <div>
                <img className="w-75" src={image} alt="" />
            </div>
            <h2>this is the home</h2>
        </div>
    );
};

export default Home;