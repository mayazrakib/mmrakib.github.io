import "./introduction.scss";

function Introduction() {
    const words = ["Mayaz", "Rakib"];

    return (
        <section className="introduction-panel" aria-labelledby="intro-heading">
            <p className="introduction-code">PERSONAL PROFILE / SYSTEM 01</p>
            <h1
                id="intro-heading"
                className="text-container"
                aria-label="Mayaz Rakib"
            >
                <span className="impact-layer impact-first" aria-hidden="true">
                    {words.map((word) => (
                        <span key={word} className="impact-word">
                            {word}
                        </span>
                    ))}
                </span>
                <span className="impact-layer impact-final" aria-hidden="true">
                    {words.map((word) => (
                        <span key={word} className="impact-word">
                            {word}
                        </span>
                    ))}
                </span>
                <span className="print-head" aria-hidden="true" />
            </h1>
        </section>
    );
}

export default Introduction;
