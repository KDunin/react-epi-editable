/**
 *  Renders a button to edit a property in OPE. Useful when the property to
 *  edit isn't directly visible (such as ArtistGenre on the ArtistDetailsPage
 *  component), or when the OPE overlays would be overlapping (e.g. the background
 *  image in the Hero component).
 */

import React from "react";
import { useSelector } from "react-redux";

export const EpiProperty = ({ propertyName, ...props }) => {
    const inEditMode = useSelector(({ epiContext }) => epiContext.inEditMode);
    return (
        <>
            {inEditMode && (
                <button data-epi-edit={propertyName} type="button" {...props}>
                    Edit property: {propertyName}
                </button>
            )}
            <style jsx>
                {`
                    button {
                        background: gray;
                        color: white;
                    }
                `}
            </style>
        </>
    );
};
