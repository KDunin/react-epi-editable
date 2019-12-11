import React from "react";

import LanguageSelector from "../widgets/LanguageSelector";
import { BackButton } from "../widgets/BackButton";
import { ArtistImage } from "../widgets/ArtistImage";
import { EpiProperty } from "../widgets/EpiProperty";
import { formatDateTime } from "../../utils/dateUtils";

export const ArtistDetailsPage = ({ model }) => {
    return (
        <>
            <div className="ArtistDetailsPage">
                <nav className="Page-container PageHeader NavBar">
                    <BackButton prevUrl={model.parentLink.url} />
                    <LanguageSelector
                        existingLanguages={model.existingLanguages}
                        currentLanguage={model.language}
                    />
                </nav>

                <div className="Page-container u-posRelative">
                    <ArtistImage
                        name={model.artistName}
                        imageUrl={model.artistPhoto}
                    />

                    <div className="top">
                        <h1 data-epi-edit="ArtistName">{model.artistName}</h1>
                    </div>

                    <EpiProperty propertyName="ArtistPhoto" />
                    <EpiProperty propertyName="ArtistGenre" />
                    <EpiProperty propertyName="ArtistIsHeadliner" />

                    <div className="artist-information">
                        <p
                            data-epi-edit="StageName"
                            dangerouslySetInnerHTML={{
                                __html: model.stageName
                            }}
                        />
                        <p>
                            <span data-epi-edit="PerformanceStartTime">
                                {formatDateTime(model.performanceStartTime)}
                            </span>
                            <span> - </span>
                            <span data-epi-edit="PerformanceEndTime">
                                {formatDateTime(model.performanceEndTime)}
                            </span>
                        </p>
                    </div>
                    <div className="artist-description">
                        <p
                            data-epi-edit="ArtistDescription"
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
            <style jsx>
                {`
                    @import "src/MusicFestival.React.Template/Assets/Styles/Common/variables.less";

                    .ArtistDetailsPage {
                        position: relative;
                        padding-bottom: 46px;
                    }

                    .top {
                        text-align: center;
                        position: absolute;
                        width: 100%;
                    }

                    .top h1 {
                        position: relative;
                        font-size: 1em;
                        top: -2.5em;
                    }

                    .artist-information p {
                        margin: 0.55em 0;
                        font: 12px @fontSubHeading;
                        text-transform: uppercase;
                    }

                    .artist-information,
                    .artist-description {
                        margin: 0 10px;
                    }

                    @media (min-width: 768px) {
                        .artist-information,
                        .artist-description {
                            margin: 0;
                        }
                    }

                    .FooterBottom {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 46px;
                    }

                    @media (min-width: 768px) {
                        .top h1 {
                            font-size: 2em;
                            top: -2em;
                        }
                    }

                    @media (min-width: 1224px) {
                        .top h1 {
                            font-size: 2.5em;
                            top: -1.5em;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default ArtistDetailsPage;
