import React from "react";

import EpiLink from "./EpiLink";
import { ConditionalImage } from "./ConditionalImage";

export const ArtistCard = ({ artist }) => (
    <>
        <EpiLink url={artist.url}>
            <div className="card">
                <div className="round">
                    <ConditionalImage
                        src={artist.artistPhoto}
                        alt={artist.artistName}
                    />
                </div>
                <div className="info">
                    <p>{artist.artistName}</p>
                </div>
            </div>
        </EpiLink>

        <style jsx>{`
            @import "src/MusicFestival.React.Template/Assets/Styles/Common/variables.less";

            .card {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 10px 30px 10px 25px;
            }

            .round {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                overflow: hidden;
                margin-right: 10px;
            }

            .round img {
                max-width: 150%;
                margin-left: -15px;
            }

            .round img.big {
                width: 60px;
                height: 60px;
            }

            .info {
                flex-grow: 1;
            }

            .info p {
                margin: 0;
                font: 14px/20px @fontSubHeading;
            }

            .info span {
                display: block;
                font: 12px/16px @fontFamilyPrimary;
            }
        `}</style>
    </>
);
