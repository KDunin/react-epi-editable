import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import { updateModelByUrl } from "../store/actions/epiDataModel";
import getComponentTypeForContent from "../api/getComponentTypeForContent";

const PageComponentSelector = ({ model, modelLoaded, updateModelByUrl }) => {
    const { pathname, search } = useLocation();
    const url = pathname + search;

    useEffect(() => {
        updateModelByUrl(url);
    }, [pathname, search]);

    return modelLoaded ? getComponentTypeForContent(model) : <></>;
};

const mapStateToProps = ({ epiDataModel, epiContext }) => ({
    model: epiDataModel.model,
    context: epiContext,
    modelLoaded: epiDataModel.modelLoaded
});

const mapDispatchToProps = dispatch => ({
    updateModelByUrl: url => dispatch(updateModelByUrl(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageComponentSelector);
