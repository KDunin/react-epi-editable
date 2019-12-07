import React, { Component } from "react";

import LanguageSelector from "../widgets/LanguageSelector";
import EpiLink from "../widgets/EpiLink";
import Hero from "../widgets/Hero";
import ContentArea from "../ContentArea";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        console.log("handleShow");
    }

    render() {
        const { model } = this.props;

        return (
            <>
                <div className="LandingPage">
                    <nav className="Page-container PageHeader NavBar">
                        <button
                            className="Button buy-ticket-button"
                            onClick={this.handleShow}
                        >
                            {model.buyTicketBlock.heading}
                        </button>
                        <LanguageSelector
                            existingLanguages={model.existingLanguages}
                            currentLanguage={model.language}
                        />
                    </nav>

                    <Hero
                        title={model.title}
                        subtitle={model.subtitle}
                        heroimage={model.heroImage}
                    />

                    {model.artistsLink.expandedValue && (
                        <EpiLink
                            classname="Button modal-default-button landing-page-button"
                            url={model.artistsLink.expandedValue.url}
                        >
                            {model.artistsLink.expandedValue.name}
                        </EpiLink>
                    )}

                    <main
                        className="Page-container"
                        data-epi-edit="MainContentArea"
                    >
                        <div className="row">
                            <ContentArea model={model.mainContentArea} />
                        </div>

                        <div className="row">
                            {/* <ContentArea model={model.secondaryContentArea} /> */}
                        </div>
                    </main>

                    <footer>
                        <div data-epi-edit="FooterContentArea">
                            <ContentArea model={model.footerContentArea} />
                        </div>
                        <div className="FooterBottom">
                            <h6>&copy; Music Festival 2018</h6>
                        </div>
                    </footer>
                </div>
                <style jsx>{`
                    main,
                    footer {
                        overflow: hidden;
                        width: 100%;
                    }

                    footer .ContentArea.Grid--gutterA {
                        /* Disable gutters because we want this content area to be full width. */
                        margin: 0;
                    }

                    .LandingPage :global(.landing-page-button) {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 1em;
                    }

                    .buy-ticket-button {
                        margin-top: 11px;
                    }
                `}</style>
            </>
        );
    }
}

export default LandingPage;
