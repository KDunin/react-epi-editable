import React, { Component } from "react";

import BlockComponentSelector from "./BlockComponentSelector";

const DISPLAY_OPTIONS = {
    full: "col-md-12",
    wide: "col-md-4",
    half: "col-md-6",
    narrow: "col-md-4"
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
            <React.Fragment>
                {model.map((block, index) => (
                    <div
                        key={index}
                        className={
                            "mb-5 " + this.getDisplayOption(block.displayOption)
                        }
                    >
                        <BlockComponentSelector model={block} />
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default ContentArea;
