import { useEffect, useState } from 'react';
import RadioBtn from '../radio-btn';
import Typography from '../../typography';
import Preloader from '../../preloader';
import type { EmployeePosition } from '../../../types';
import { getPositions } from '../../../services/services';

const RadioButtonsGroup = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(1);
    const [employeePositions, setEmployeePositions] = useState<
        EmployeePosition[] | null
    >(null);

    useEffect(() => {
        const fetchPositions = async () => {
            const result = await getPositions();
            setEmployeePositions(result);
        };
        fetchPositions();
    }, []);

    const handlePositionChange = (position: number) => {
        setSelectedOption(position);
    };

    return (
        <div className="form__radio-btns">
            <Typography type="p1" className="form__radio-btns-title">
                Select your position
            </Typography>
            <div className="radio-group">
                {!employeePositions ? (
                    <Preloader />
                ) : (
                    employeePositions.map(option => {
                        const { id, name } = option;
                        const isChecked = id === selectedOption;
                        return (
                            <RadioBtn
                                key={id}
                                id={id.toString()}
                                name="position_id"
                                label={name}
                                checked={isChecked}
                                handleChange={() => handlePositionChange(id)}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default RadioButtonsGroup;
