import React, { Component } from "react";

export class Hero extends Component {
    render() {
        const { title, subtitle, heroimage } = this.props;

        const heroStyles = {
            backgroundImage: `url(${heroimage})`
        };

        return (
            <section className="Hero">
                <div className="Hero-content Page-container">
                    <h1 data-epi-property-name="Title">{title}</h1>

                    <h5 data-epi-property-name="Subtitle">{subtitle}</h5>

                    {/* <epi-property
                        v-show="!epiDisableEditing"
                        property-name="HeroImage"
                    ></epi-property> */}
                </div>
                <div
                    className="Hero-image"
                    v-if="heroimage"
                    style={heroStyles}
                ></div>
            </section>
        );
    }
}

export default Hero;
