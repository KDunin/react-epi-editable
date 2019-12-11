import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EpiLink = ({ className, url, children, ...props }) => {
    const inEditMode = useSelector(({ epiContext }) => epiContext.inEditMode);
    const TagName =
        inEditMode || url.match(/^(http(s)?|ftp):\/\//) ? "a" : Link;

    return (
        <TagName
            href={url}
            to={url}
            className={`EPiLink ${className}`}
            {...props}
        >
            {children}
        </TagName>
    );
};

export default EpiLink;
