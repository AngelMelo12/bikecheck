import { Link } from 'react-router-dom';

function BoxWithTitle({className, title}) {
    return (
        <>
            <div className={className}>
                <h2>{title}</h2>
            </div>
        </>
    );
}

function BoxWithTextInsideBox({className, title, content}) {
    return (
        <>
            <div className={className}>
                <h2>{title}</h2>
                <section>
                    <p>{content}</p>
                </section>
            </div>
        </>
    );
}

function BoxWithText({className, title, content}) {
    return (
        <>
            <div className={className}>
                <h2>{title}</h2>
                <p style={{whiteSpace: "pre-line"}}>{content}</p>
            </div>
        </>
    );
}

function BoxWithTextAndButton({className, title, content, link, page}) {
    return (
        <>
            <div className={className}>
                <h2>{title}</h2>
                <p style={{whiteSpace: "pre-line"}}>{content}</p>
                <Link to={link}>
                    <button>
                        Va para {page}
                    </button>
                </Link>
            </div>
        </>
    );
}

export { BoxWithTitle, BoxWithTextInsideBox, BoxWithText, BoxWithTextAndButton };