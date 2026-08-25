const homePaths = Object.freeze(["/", "/index.html"]);
const ROUTES = Object.freeze({
    HOME: "home",
    NOT_FOUND: "not_found",
    UTILITIES: "utilities",
});

function isHomeLocation() {
    return (
        homePaths.includes(window.location.pathname) &&
        ["", "#/"].includes(window.location.hash)
    );
}

function isUtilitiesLocation() {
    return (
        homePaths.includes(window.location.pathname) &&
        window.location.hash === "#/utilities"
    );
}

function isKnownLocation() {
    return isHomeLocation() || isUtilitiesLocation();
}

function getCurrentRoute() {
    if (isHomeLocation()) {
        return ROUTES.HOME;
    }

    if (isUtilitiesLocation()) {
        return ROUTES.UTILITIES;
    }

    return ROUTES.NOT_FOUND;
}

export {
    getCurrentRoute,
    isHomeLocation,
    isKnownLocation,
    isUtilitiesLocation,
    ROUTES,
};
