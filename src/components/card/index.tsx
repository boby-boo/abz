import type { Employee } from '../../types';
import Image from '../image';
import Tooltip from '../tooltip';

const Card = ({ employee }: { employee: Employee }) => {
    const { name, email, phone, position, photo } = employee;

    return (
        <li className="card">
            <Image src={photo} alt={name} className="card__image" />
            <h3 className="card__title">{name}</h3>
            <ul className="card__list">
                <li className="card__item">{position}</li>
                <li className="card__item email">
                    {email}
                    <Tooltip title={email} />
                </li>
                <li className="card__item">{phone}</li>
            </ul>
        </li>
    );
};

export default Card;
