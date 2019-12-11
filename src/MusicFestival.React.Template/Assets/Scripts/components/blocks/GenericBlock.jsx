import React from "react";

const GenericBlock = ({ model }) => (
    <div className="Page-container GenericBlock">
        <div className="Grid Grid--alignMiddle Grid--gutterA">
            <div className="Grid-cell">
                <p>Could not load {model.Name} vue component.</p>
            </div>
        </div>
    </div>
);

export default GenericBlock;
