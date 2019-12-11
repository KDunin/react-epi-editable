import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const EpiViewModeLink = ({ url, children, style, ...props }) => {
    const inEditMode = useSelector(({ epiContext }) => epiContext.inEditMode);
    const styles = inEditMode ? { pointerEvents: "none", ...style } : style;

    return (
        <Link to={url} {...props} style={styles}>
            {children}
        </Link>
    );
};
