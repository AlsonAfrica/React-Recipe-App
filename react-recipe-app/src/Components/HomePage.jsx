import React from "react";
import './HomePage.css';
import NavbarHome from "./NavbarHome";
import './NavbarHome.css';
import HeroSection from "./HeroSection";
import SearchBarHome from "./HomeSearchBar";
import MealList from "./MealList";
import ReviewList from "./ReviewList";

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
                    <span>Explore our collection of the most popular and delicious recipes, curated for your enjoyment.</span>
                    {/* <div className="Searchbar"><SearchBarHome/></div>  */}
                    <div className="api-list"><MealList/></div>
                </div>
                <div className="Review-cards">
                    <h2>Get to hear what our users get to say</h2>
                    <ReviewList/>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}
