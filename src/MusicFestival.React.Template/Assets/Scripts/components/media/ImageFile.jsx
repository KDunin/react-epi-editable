import React from "react";

export const ImageFile = ({ model }) => (
    <div className="ImageFile">
        <img className="img-fluid" src={model.url} alt={model.url} />
    </div>
);

export default ImageFile;
