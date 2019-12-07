import React, { Component } from 'react';

export class Hero extends Component {
    render() {
        const { title, subtitle, heroimage } = this.props;

        const heroStyles = {
            backgroundImage: `url(${heroimage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            textAlign: 'center'
        };

        return (
            <div className="jumbotron jumbotron-fluid" style={heroStyles}>
                <div className="container">
                    <h1 className="display-4" data-epi-property-name="Title">
                        {title}
                    </h1>
                    <p className="lead" data-epi-property-name="Subtitle">
                        {subtitle}
                    </p>
                </div>
            </div>
        );
    }
}

export default Hero;
