import React, { Component } from "react";

import BlockComponentSelector from "./BlockComponentSelector";

export const DISPLAY_OPTIONS = {
    full: "u-md-sizeFull",
    wide: "u-md-size2of3",
    half: "u-md-size1of2",
    narrow: "u-md-size1of3"
};

export class ContentArea extends Component {
    constructor(props) {
        super(props);

        this.getDisplayOption = this.getDisplayOption.bind(this);
    }

    getDisplayOption(value) {
        let displayoption = DISPLAY_OPTIONS[value];

        if (!displayoption) {
            displayoption = DISPLAY_OPTIONS.full;
        }

        return displayoption;
    }

    render() {
        const model = this.props.model || [];

        return (
            <section className="Grid Grid--alignMiddle Grid--gutterA ContentArea">
                {model.map((block, index) => (
                    <div
                        key={index}
                        className={
                            "Grid-cell " +
                            this.getDisplayOption(block.displayOption)
                        }
                    >
                        <BlockComponentSelector model={block} />
                    </div>
                ))}
            </section>
        );
    }
}

export default ContentArea;
