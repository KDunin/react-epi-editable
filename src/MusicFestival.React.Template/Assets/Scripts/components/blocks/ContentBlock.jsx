import React from 'react';

export class ContentBlock extends React.Component {
    imageAlignment(direction) {
        if (direction === 'Right') {
            return 'row align-items-center flex-column-reverse flex-lg-row';
        } else {
            return 'row align-items-center';
        }
    }

    render() {
        const { model } = this.props;
        const imageAlignment = this.imageAlignment(model.imageAlignment);

        return (
            <div className={imageAlignment}>
                <div className="col-md-6">
                    <img className="img-fluid" src={model.image} alt="alt" />
                </div>

                <div className="col-md-6">
                    <h2 data-epi-property-name="Title">{model.title}</h2>
                    <div
                        data-epi-property-name="Content"
                        dangerouslySetInnerHTML={{ __html: model.content }}
                    />
                </div>
            </div>
        );
    }
}

export default ContentBlock;
