import React from "react";
import { EpiProperty } from "./EpiProperty";
import { useSelector } from "react-redux";

export const Hero = ({ title, subtitle, heroimage }) => {
    const heroStyles = {
        backgroundImage: `url(${heroimage})`
    };
    const epiDisableEditing = useSelector(
        ({ appContext }) => appContext.showModal
    );

    return (
        <section className="Hero">
            <div className="Hero-content Page-container">
                <h1 data-epi-edit="Title">{title}</h1>
                <h5 data-epi-edit="Subtitle">{subtitle}</h5>
                {!epiDisableEditing && <EpiProperty propertyName="HeroImage" />}
            </div>
            <div className="Hero-image" style={heroStyles}></div>
        </section>
    );
};

export default Hero;
