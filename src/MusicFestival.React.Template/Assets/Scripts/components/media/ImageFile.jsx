import React, { Component } from 'react';

export class ImageFile extends Component {
    render() {
        const { model } = this.props;

        return (
            <div className="ImageFile">
                <img className="img-fluid" src={model.url} alt="alt" />
            </div>
        );
    }
}

export default ImageFile;
