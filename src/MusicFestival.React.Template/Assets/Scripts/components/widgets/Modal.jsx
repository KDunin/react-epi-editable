﻿import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalVisibilityAction } from "../../store/actions/appContext";

export const Modal = ({ children }) => {
    const isVisible = useSelector(({ appContext }) => appContext.showModal);
    const dispatch = useDispatch();

    const closeModal = () => dispatch(setModalVisibilityAction(false));

    return (
        <>
            {isVisible && (
                <div className="modal-mask">
                    <div className="modal-wrapper">
                        <div className="modal-container">
                            <div className="modal-content">{children}</div>

                            <div className="modal-footer">
                                <button
                                    className="Button modal-default-button"
                                    onClick={closeModal}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                @import "src/MusicFestival.React.Template/Assets/Styles/Common/variables.less";

                .modal-mask {
                    position: fixed;
                    z-index: 9998;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: table;
                    transition: opacity 0.3s ease;
                }

                .modal-wrapper {
                    display: table-cell;
                    vertical-align: middle;

                    // HACK - Having it in the middle doesn't work in OPE
                    vertical-align: top;
                    padding-top: 10rem;
                }

                .modal-container {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    margin: 0px auto;
                    padding: @space;
                    background-color: @backgroundColor;
                    border-radius: 1em;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
                    transition: all 0.3s ease;
                }

                .modal-default-button {
                    float: right;
                }

                .modal-enter {
                    opacity: 0;
                }

                .modal-leave-active {
                    opacity: 0;
                }

                .modal-enter .modal-container,
                .modal-leave-active .modal-container {
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
};

export default Modal;
