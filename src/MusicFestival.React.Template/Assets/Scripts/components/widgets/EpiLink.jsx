import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EpiLink extends Component {
    render() {
        const { classname, url, inEditMode } = this.props;

        if (inEditMode) {
            return (
                <a
                    href={url}
                    className={classname + " " + "edit-mode"}
                    data-editmode={inEditMode}
                >
                    {this.props.children}
                </a>
            );
        }

        return url.match(/^(http(s)?|ftp):\/\//) ? (
            <a href={url} className={classname}>
                {this.props.children}
            </a>
        ) : (
            <Link
                className={classname}
                to={url}
                data-editmode={this.inEditMode}
            >
                {this.props.children}
            </Link>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {};
};

const mapStateToProps = ({ epiContext }) => {
    return {
        inEditMode: epiContext.inEditMode,
        isEditable: epiContext.isEditable
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpiLink);
