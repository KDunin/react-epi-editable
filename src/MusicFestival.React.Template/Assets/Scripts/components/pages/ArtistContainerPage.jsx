import React from "react";
import LanguageSelector from "../widgets/LanguageSelector";
import EpiLink from "../widgets/EpiLink";

import epi from "../../api/epi";

export class ArtistContainerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            artists: []
        };

        this.getChildren = this.getChildren.bind(this);
    }

    componentDidMount() {
        this.getChildren();
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
    }

    getChildren() {
        const { model } = this.props;
        this.setState({
            isMounted: true
        });
        const parameters = {};

        epi.getChildren(model.url, parameters).then(success => {
            // sort response alphabetically
            let artists = success.data.sort(
                (a, b) => a.artistName > b.artistName
            );

            // // group them by first letter of artist name and store in data.artists object
            // let artists = _.groupBy(ordered, artist => artist.artistName.substring(0, 1));

            if (this.state.isMounted) {
                this.setState({
                    artists
                });
            }
        });
    }

    render() {
        const { model } = this.props;

        return (
            <div className="ArtistContainerPage bg-dark text-white">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarText"
                            aria-controls="navbarText"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarText"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <EpiLink
                                        classname="backButton"
                                        url={model.parentUrl}
                                    >
                                        <img src="/Assets/Images/SVG/back.svg" />
                                    </EpiLink>
                                </li>
                            </ul>
                            <LanguageSelector
                                existingLanguages={model.existingLanguages}
                                currentLanguage={model.language}
                            />
                        </div>
                    </nav>
                </div>

                <div className="container">
                    <div className="top gutter">
                        <h1 data-epi-property-name="Name">{model.name}</h1>
                    </div>

                    <div className="list">
                        {/* {_.map(this.state.artists, (letter, key) => {
							return (
								<div key={key}>
									<h3>{key}</h3>
									{_.map(letter, artist => {
										return (

										);
									})}
								</div>
							);
						})} */}
                        {this.state.artists.map(artist => (
                            <EpiLink
                                classname=""
                                url={artist.url}
                                key={artist.contentLink.id}
                            >
                                <div className="row align-items-center mb-3">
                                    <div className="col-1">
                                        <img
                                            className="card-img"
                                            src={artist.artistPhoto}
                                            alt="Card image"
                                        />
                                    </div>
                                    <div className="col-9">
                                        <h5 className="mb-0">
                                            {artist.artistName}
                                        </h5>
                                        <p>{artist.artistGenre}</p>
                                    </div>
                                </div>
                            </EpiLink>
                        ))}
                    </div>
                </div>

                <footer>
                    <div className="FooterBottom">
                        <h6>&copy; Music Festival 2018</h6>
                    </div>
                </footer>
            </div>
        );
    }
}

export default ArtistContainerPage;
