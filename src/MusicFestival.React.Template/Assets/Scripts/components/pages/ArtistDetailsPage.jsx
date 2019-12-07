import React, { Component } from 'react';

import LanguageSelector from '../widgets/LanguageSelector';
import EpiLink from '../widgets/EpiLink';

export class ArtistDetailsPage extends Component {
    render() {
        const { model } = this.props;
        console.log(model);

        return (
            <div className="ArtistDetailsPage bg-dark text-white">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarText"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <EpiLink
                                        classname="backButton"
                                        url={model.parentUrl}
                                    >
                                        <img src="/Assets/Images/SVG/back.svg" />
                                    </EpiLink>
                                </li>
                            </ul>
                            <LanguageSelector
                                existingLanguages={model.existingLanguages}
                                currentLanguage={model.language}
                            />
                        </div>
                    </nav>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img
                                src={model.artistPhoto}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div className="top">
                        <h1 data-epi-property-name="ArtistName">
                            {model.artistName}
                        </h1>
                    </div>

                    <div className="artist-information">
                        <p
                            data-epi-property-name="StageName"
                            dangerouslySetInnerHTML={{
                                __html: model.stageName
                            }}
                        />
                        <p>
                            <span data-epi-property-name="PerformanceStartTime">
                                {model.performanceStartTime}
                            </span>{' '}
                            -{' '}
                            <span data-epi-property-name="PerformanceEndTime">
                                {model.performanceEndTime}
                            </span>
                        </p>
                    </div>
                    <div className="artist-description">
                        <p
                            data-epi-property-name="ArtistDescription"
                            dangerouslySetInnerHTML={{
                                __html: model.artistDescription
                            }}
                        />
                    </div>
                </div>

                <footer>
                    <div className="FooterBottom">
                        <h6>&copy; Music Festival 2018</h6>
                    </div>
                </footer>
            </div>
        );
    }
}

export default ArtistDetailsPage;
