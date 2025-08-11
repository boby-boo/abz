const CardSkeleton = () => {
    return (
        <>
            <li className="card loading">
                <div className="card__image" />
                <h3 className="card__title" />
                <ul className="card__list">
                    <li className="card__item" />
                    <li className="card__item card__item--email" />
                    <li className="card__item" />
                </ul>
            </li>
        </>
    );
};

export default CardSkeleton;
