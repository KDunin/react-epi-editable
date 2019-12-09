import React from "react";
import EpiLink from "./EpiLink";

export const BackButton = ({ prevUrl }) => (
    <>
        <div className="backButton">
            <EpiLink url={prevUrl}>
                <svg>
                    <use xlinkHref="#back"></use>
                </svg>
            </EpiLink>
        </div>

        <style jsx>
            {`
                .backButton {
                    z-index: 10;
                    height: 50px;
                    width: 50px;
                    margin-top: 7px;
                }

                @media (min-width: 768px) {
                    .backButton {
                        height: 64px;
                        width: 64px;
                        margin-top: 0;
                    }
                }
            `}
        </style>
    </>
);
