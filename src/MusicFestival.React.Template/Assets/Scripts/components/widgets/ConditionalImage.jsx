import React from "react";

export const ConditionalImage = ({ src, alt }) =>
    src ? <img className="ConditionalImage" src={src} alt={alt} /> : <></>;

export default ConditionalImage;
