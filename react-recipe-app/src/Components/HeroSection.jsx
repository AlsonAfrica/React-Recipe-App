import React from "react";
import './HeroSection.css';
import PhotoLayout from "./PhotoLayout";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return ( 
    <div className="section">
        <div className="column1">
            <h1 className="title">What is in the Kitchen</h1>
            <p className="information">YumYard is a dynamic recipe app designed to elevate your cooking experience by offering a comprehensive platform for discovering, organizing, and sharing recipes. With features like real-time weather-based recipe suggestions, personalized meal plans, and a user-friendly interface, YumYard caters to both novice cooks and seasoned chefs. Users can explore a vast collection of recipes, create their own culinary masterpieces, and manage their kitchen inventory effortlessly</p>
            <button className="btn-explore-now" onClick={() => document.getElementById('column2-gallery').scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
       
        </div>
        <div className="column2 gallery" id="column2-gallery">
            <PhotoLayout/>
        </div>
    </div> );
}
 
export default HeroSection;