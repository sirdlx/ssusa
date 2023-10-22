type CardMainProps = {
    child: React.ReactNode;
    title: String;
    text: String;
};
export default function Card({ child, title, text }: CardMainProps) {
    return (
        <div className="card mb-3 hvr-grow hvr-sweep-to-top hvr-back-pulse">
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {text}
                </p>
                {child}
            </div>
            <div className="card-arrow">
                <div className="card-arrow-top-left"></div>
                <div className="card-arrow-top-right"></div>
                <div className="card-arrow-bottom-left"></div>
                <div className="card-arrow-bottom-right"></div>
            </div>
        </div>
    );
}
