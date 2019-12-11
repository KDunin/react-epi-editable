import React from "react";

export const BuyTicketBlock = ({
    heading,
    message,
    model,
    pagePropertyName
}) => {
    const prefixPropertyName = propertyName =>
        pagePropertyName ? `${pagePropertyName}.${propertyName}` : propertyName;

    return (
        <>
            <div className="buyTickets-container">
                <h3 data-epi-edit={prefixPropertyName("Heading")}>
                    {heading || model.heading}
                </h3>
                <div>
                    <p data-epi-edit={prefixPropertyName("Message")}>
                        {message || model.message}
                    </p>
                    <input type="email" />
                </div>
            </div>
            <style jsx>
                {`
                    @import "src/MusicFestival.React.Template/Assets/Styles/Common/variables.less";

                    .buyTickets-container {
                        background: @backgroundColor;
                        padding: @space;
                        border-radius: 1em;
                    }
                `}
            </style>
        </>
    );
};
