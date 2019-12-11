export const getParamsFromUrl = (url = location.search) => {
    const searchParams = new URLSearchParams(url);
    const params = {};

    for (let [key, value] of searchParams.entries()) {
        params[key] = value;
    }

    return params;
};
