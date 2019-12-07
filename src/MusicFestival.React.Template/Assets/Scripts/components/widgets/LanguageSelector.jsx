import React, { Component } from "react";
import EpiLink from "./EpiLink";

export class LanguageSelector extends Component {
    render() {
        const { existingLanguages, currentLanguage } = this.props;

        return (
            <ul className="lang">
                {existingLanguages.map(language => (
                    <li
                        key={language.name}
                        className={
                            language.name === currentLanguage.name
                                ? "active"
                                : ""
                        }
                    >
                        <EpiLink url={language.link} classname={"nav-link"}>
                            {language.displayName}
                        </EpiLink>
                    </li>
                ))}
                <style jsx>{`
                    @import "../../../Styles/Common/variables.less";

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    .main {
                        min-height: 55vh;
                        margin-bottom: 50px;
                    }

                    .lang {
                        position: absolute;
                        right: 10px;
                        top: 25px;
                        z-index: 10;
                    }

                    .lang li {
                        position: relative;
                        margin-bottom: 8px;
                    }

                    .lang li.active:after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        background: @colorTurquoise;
                        top: 13px;
                    }

                    .lang li a {
                        display: block;
                        user-select: none;
                        font: 10px @fontSubHeading;
                        text-transform: uppercase;
                        cursor: pointer;
                        text-decoration: none;
                    }

                    @media (min-width: 425px) {
                        .lang {
                            top: 38px;
                        }

                        .lang li {
                            display: inline-block;
                            right: 0;
                            margin-right: 30px;
                            margin-bottom: 0;
                        }

                        .lang li:last-of-type {
                            margin-right: 0;
                        }

                        .lang li.active:after {
                            height: 4px;
                            top: 17px;
                        }

                        .lang li a {
                            font-size: 13px;
                        }
                    }
                `}</style>
            </ul>
        );
    }
}

export default LanguageSelector;
