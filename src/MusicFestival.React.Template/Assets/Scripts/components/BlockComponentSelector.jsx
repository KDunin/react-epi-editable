import React, { Component } from "react";

import getComponentTypeForContent from "../api/getComponentTypeFromContent";

export class BlockComponentSelector extends Component {
    render() {
        const { model } = this.props;

        return (
            <React.Fragment>{getComponentTypeForContent(model)}</React.Fragment>
        );
    }
}

export default BlockComponentSelector;
