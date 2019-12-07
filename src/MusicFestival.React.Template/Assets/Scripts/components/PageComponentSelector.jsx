import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { updateModelByUrl } from "../store/actions/epiDataModel";
import getComponentTypeForContent from "../api/getComponentTypeFromContent";

class PageComponentSelector extends Component {
    componentDidMount() {
        const url = this.props.location.pathname;
        this.props.updateModelByUrl(url);

        this.props.history.listen(() => {
            console.log("location changed", url);

            // if (url !== url) {
            // }
        });
    }

    render() {
        const { model, modelLoaded } = this.props;
        return modelLoaded ? (
            getComponentTypeForContent(model)
        ) : (
            <React.Fragment></React.Fragment>
        );
    }
}

const mapStateToProps = ({ epiDataModel }) => ({
    model: epiDataModel.model,
    modelLoaded: epiDataModel.modelLoaded
});

const mapDispatchToProps = dispatch => ({
    updateModelByUrl: url => dispatch(updateModelByUrl(url))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PageComponentSelector)
);
