import React from "react";
import { ConditionalImage } from "./ConditionalImage";

export const ArtistImage = ({ name, imageUrl }) => (
    <>
        <div className="artistImage">
            <ConditionalImage src={imageUrl} alt={name} />
        </div>
        <style jsx>{`
            .artistImage {
                padding-top: 80px;
            }

            .artistImage :global(img) {
                width: 100%;
                height: auto;
                animation: fadein 2s;
            }

            @keyframes fadein {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `}</style>
    </>
);
