import React from "react";

import LanguageSelector from "../widgets/LanguageSelector";
import EpiLink from "../widgets/EpiLink";
import Hero from "../widgets/Hero";
import Modal from "../widgets/Modal";
import ContentArea from "../ContentArea";
import { useDispatch } from "react-redux";
import { setModalVisibilityAction } from "../../store/actions/appContext";
import { BuyTicketBlock } from "../blocks/BuyTicketBlock";

const LandingPage = ({ model }) => {
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(setModalVisibilityAction(true));
    };

    return (
        <>
            <div className="LandingPage">
                <nav className="Page-container PageHeader NavBar">
                    <button
                        className="Button buy-ticket-button"
                        onClick={handleShow}
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
                        className="Button landing-page-button"
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
                </main>

                <footer>
                    <div data-epi-edit="FooterContentArea">
                        <ContentArea model={model.footerContentArea} />
                    </div>
                    <div className="FooterBottom">
                        <h6>&copy; Music Festival 2018</h6>
                    </div>
                </footer>

                <Modal>
                    <BuyTicketBlock
                        pagePropertyName="BuyTicketBlock"
                        heading={model.buyTicketBlock.heading}
                        message={model.buyTicketBlock.message}
                    />
                </Modal>
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
};

export default LandingPage;
