import Upload from './upload';
import Button from '../button';
import useFormErrorObserver from '../../helpers/hooks/useFormErrorObserver';
import RadioButtonsGroup from './radio-buttons-group';
import InputsGroup from './inputs-group.tsx';
import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';

type FormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ handleSubmit }: FormProps) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const hasError = useFormErrorObserver(formRef);

    return (
        <form className="form__form" onSubmit={handleSubmit} ref={formRef}>
            <InputsGroup />
            <RadioButtonsGroup />
            <Upload />
            <div className="form__button">
                <Fade direction="up">
                    <Button type="yellow" disabled={hasError}>
                        Sign up
                    </Button>
                </Fade>
            </div>
        </form>
    );
};

export default Form;
