import React from "react";

export const ConditionalImage = ({ src, ...props }) =>
    src && <img className="ConditionalImage" src={src} {...props} />;
