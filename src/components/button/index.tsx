import React from 'react';

type ButtonType = 'yellow';

type ButtonProps = {
    children: React.ReactNode;
    type: ButtonType;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ children, type, disabled = false, onClick }: ButtonProps) => {
    const buttonClass = `button ${type}`;

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
