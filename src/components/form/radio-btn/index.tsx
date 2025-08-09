export type RadioBtnProps = {
    label: string;
    id: string;
    checked: boolean;
    name: string;
    handleChange: () => void;
};

const RadioBtn = ({
    label,
    id,
    checked,
    handleChange,
    name,
}: RadioBtnProps) => {
    return (
        <div className="radio-group__item">
            <input
                type="radio"
                id={label}
                name={name}
                value={id}
                className="radio-input"
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={label} className="radio-label">
                {label}
            </label>
        </div>
    );
};

export default RadioBtn;
