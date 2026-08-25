const homePaths = Object.freeze(["/", "/index.html"]);

function isHomeLocation() {
    return (
        homePaths.includes(window.location.pathname) &&
        window.location.hash === ""
    );
}

export { isHomeLocation };
