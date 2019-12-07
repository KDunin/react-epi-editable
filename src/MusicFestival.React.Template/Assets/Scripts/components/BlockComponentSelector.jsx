import getComponentTypeForContent from "../api/getComponentTypeFromContent";

const BlockComponentSelector = ({ model }) => getComponentTypeForContent(model);

export default BlockComponentSelector;
