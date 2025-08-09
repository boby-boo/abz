import Input from '../input';
import { Fade } from 'react-awesome-reveal';

const inputs = [
    { name: 'name', label: 'Your name' },
    { name: 'email', label: 'Email' },
    {
        name: 'phone',
        label: 'Phone',
        helperText: '+38 (XXX) XXX - XX - XX',
        initialValue: '+38',
    },
];

const InputsGroup = () => {
    return (
        <div className="form__inputs">
            <Fade direction="up" cascade duration={400}>
                {inputs.map(input => {
                    const { name, label, helperText, initialValue } = input;
                    return (
                        <Input
                            key={name}
                            name={name}
                            label={label}
                            helperText={helperText}
                            initialValue={initialValue}
                        />
                    );
                })}
            </Fade>
        </div>
    );
};

export default InputsGroup;
