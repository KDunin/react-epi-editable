/**
    Will select a vue component based on the name.
    Used to match Models/Blocks/*.cs with Assets/Scripts/components/blocks/*.jsx.
    `component` dynamically loads a React component: https://vuejs.org/v2/guide/components.html#Dynamic-Components

    Compared to the `PageComponentSelector`, this does not use the store to get
    the model. It must take the model as a prop as the store model can be either:
    * the block, when editing in Preview.jsx
    * the page that the block belongs to, when rendered by ContentArea.jsx
*/

import getComponentTypeForContent from "../api/getComponentTypeForContent";

const BlockComponentSelector = ({ model }) => getComponentTypeForContent(model);

export default BlockComponentSelector;
