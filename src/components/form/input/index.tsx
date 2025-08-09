import { useState } from 'react';
import { applyPhoneMask } from '../../../helpers/utils/applyPhoneMask';
import useMainValidateFields from '../../../helpers/hooks/useMainValidateFields';

type InputProps = {
    name: string;
    label: string;
    helperText?: string;
    initialValue?: string;
};

const Input = ({ name, label, helperText, initialValue = '' }: InputProps) => {
    const [value, setValue] = useState(initialValue);
    const { errorMessage, validate } = useMainValidateFields(value, name);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        if (name === 'phone') {
            inputValue = applyPhoneMask(inputValue);
        }
        setValue(inputValue);
    };

    const hasError = !!errorMessage?.length;
    const hasValidateFormError =
        hasError || !value || (value.includes('+38') && value.length === 3);
    return (
        <>
            <div
                className={`form-field ${value ? 'enabled-filled' : 'enabled'} ${hasError ? 'error' : ''} ${hasValidateFormError ? 'error-input' : ''}`}
                data-element="input"
            >
                <input
                    type="text"
                    name={name}
                    className="form-field__input"
                    value={value}
                    placeholder=""
                    onBlur={() => validate()}
                    onChange={handleChange}
                />
                <label className="form-field__label">{label}</label>
                {hasError ? (
                    <span className="form-field__helper-text">
                        {errorMessage}
                    </span>
                ) : (
                    <span className="form-field__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        </>
    );
};

export default Input;
