import React from "react";
import { ConditionalImage } from "../widgets/ConditionalImage";
import { EpiProperty } from "../widgets/EpiProperty";

const ContentBlock = ({ model }) => {
    const imageAlignment =
        model.imageAlignment === "Right" ? "Grid--rowReverse" : "";

    return (
        <div className="Page-container ContentBlock">
            <div
                className={`Grid Grid--alignMiddle Grid--gutterA ${imageAlignment}`}
            >
                {model.image && (
                    <div className="Grid-cell u-md-size1of2">
                        <ConditionalImage
                            src={model.image}
                            alt={model.title}
                            data-epi-edit="Image"
                        />
                    </div>
                )}
                <div
                    className={`Grid-cell ${
                        model.image ? "u-md-size1of2" : ""
                    }`}
                >
                    <h2
                        data-epi-edit="Title"
                        dangerouslySetInnerHTML={{ __html: model.title }}
                    ></h2>
                    <div
                        data-epi-edit="Content"
                        dangerouslySetInnerHTML={{ __html: model.content }}
                    ></div>
                    {!model.image && <EpiProperty propertyName="image" />}
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;
