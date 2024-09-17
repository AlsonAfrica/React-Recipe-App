import React from "react";
import './HomePage.css';
import NavbarHome from "./NavbarHome";
import './NavbarHome.css';
import HeroSection from "./HeroSection";
import SearchBarHome from "./HomeSearchBar";
import MealList from "./MealList";
import ReviewList from "./ReviewList";
import Footer from "./footer";
import { MdOutlineReviews } from "react-icons/md";

export const HomePage = () => {
    return (
        <div className="wrapper">
            <div className="nav">
                <NavbarHome />
            </div>
            <div className="container">
              <HeroSection/>
            </div>
            <div className="api-containers">
                <div className="Text-api">
                    <p className="Heading-api">View what others have been cooking</p>
                    <h1>Our Most Loved Dishes</h1>
                    <span>Click on the image to view the recipe</span>
                    {/* <div className="Searchbar"><SearchBarHome/></div>  */}
                    <div className="api-list" id="Api-List"><MealList/></div>
                </div>
                <div className="Review-cards" >
                    <h2>Get to hear what our users have to say <MdOutlineReviews /></h2>
                    <div className="Review-list-ctn" ><ReviewList/></div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}
