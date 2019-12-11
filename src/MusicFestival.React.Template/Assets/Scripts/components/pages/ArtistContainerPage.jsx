import React, { useState, useEffect } from "react";

import LanguageSelector from "../widgets/LanguageSelector";
import { ArtistCard } from "../widgets/ArtistCard";
import { BackButton } from "../widgets/BackButton";

import epi from "../../api/epi";

const ArtistContainerPage = ({ model }) => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getChildren();
    }, []);

    const getChildren = () => {
        epi.getChildren(model.url).then(response => {
            setArtists(groupAlphabetically(response.data));
        });
    };

    return (
        <>
            <div className="ArtistContainerPage">
                <nav className="Page-container PageHeader NavBar">
                    <BackButton prevUrl={model.parentLink.url} />
                    <LanguageSelector
                        existingLanguages={model.existingLanguages}
                        currentLanguage={model.language}
                    />
                </nav>

                <div className="Page-container">
                    <div className="top gutter">
                        <h1 data-epi-edit="Name">{model.name}</h1>
                    </div>
                    <div className="list">
                        {artists.map(([letter, items], index) => (
                            <div key={`${letter}-${index}`}>
                                <h3>{letter}</h3>
                                {items.map((artist, index) => (
                                    <ArtistCard
                                        key={`${artist.artistName}-${index}`}
                                        artist={artist}
                                    />
                                ))}
                            </div>
                        ))}
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
                    .top h1 {
                        text-transform: none;
                        margin: 0 40px 0 40px;
                        padding: 0.3em 0;
                    }

                    @media (min-width: 425px) {
                        .top h1 {
                            margin-right: 140px;
                        }
                    }

                    h3 {
                        text-transform: uppercase;
                        width: 100%;
                        text-align: center;
                        background: rgba(236, 64, 122, 0.24);
                        padding: 5px 0 7px;
                        margin: 0;
                    }
                `}
            </style>
        </>
    );
};

export default ArtistContainerPage;

/**
 * Sorts artists alphabetically and group them by first letter of artist name
 */
const groupAlphabetically = data => {
    const sorted = data.sort((a, b) => a.artistName > b.artistName);

    return Object.entries(
        sorted.reduce((acc, item) => {
            const firstNameLetter = item.artistName.charAt(0);
            if (firstNameLetter in acc) {
                acc[firstNameLetter].push(item);
            } else {
                acc[firstNameLetter] = [item];
            }
            return acc;
        }, {})
    );
};
