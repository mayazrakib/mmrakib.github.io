import "./introduction.scss";

const NAME = "MAYAZ RAKIB";

function Introduction() {
    return (
        <section className="introduction-panel" aria-labelledby="intro-heading">
            <p className="introduction-code">PERSONAL PROFILE / SYSTEM 01</p>
            <h1
                id="intro-heading"
                className="text-container"
                aria-label="MAYAZ RAKIB"
            >
                <span className="name-measure" aria-hidden="true">
                    {NAME}
                </span>
                <span className="typing-layer" aria-hidden="true">
                    <span className="typing-clip">
                        <span className="typed-name">{NAME}</span>
                    </span>
                    <span className="block-cursor" />
                </span>
            </h1>
        </section>
    );
}

export default Introduction;
