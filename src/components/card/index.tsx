import type { Employee } from '../../types';
import { useCallback } from 'react';
import Image from '../image';

const Card = ({ employee }: { employee: Employee }) => {
    const { name, email, phone, position, photo } = employee;

    const truncetText = useCallback((text: string, maxLength: number = 30) => {
        return text.length > maxLength
            ? text.slice(0, maxLength) + '...'
            : text;
    }, []);

    return (
        <li className="card">
            <Image src={photo} alt={name} className="card__image" />
            <h3 className="card__title">{truncetText(name)}</h3>
            <ul className="card__list">
                <li className="card__item">{truncetText(position)}</li>
                <li className="card__item card__item--email" title={email}>
                    {truncetText(email)}
                </li>
                <li className="card__item">{phone}</li>
            </ul>
        </li>
    );
};

export default Card;
