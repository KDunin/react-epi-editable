import React from "react";
import ConditionalImage from "../widgets/ConditionalImage";

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
                            v-epi-edit="'Image'"
                        ></ConditionalImage>
                    </div>
                )}
                <div
                    className={`Grid-cell ${
                        model.image ? "u-md-size1of2" : ""
                    }`}
                >
                    <h2
                        v-epi-edit="'Title'"
                        dangerouslySetInnerHTML={{ __html: model.title }}
                    ></h2>
                    <div
                        v-epi-edit="'Content'"
                        dangerouslySetInnerHTML={{ __html: model.content }}
                    ></div>
                    {/* <epi-property v-if="!model.image" property-name="image"></epi-property> */}
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;
