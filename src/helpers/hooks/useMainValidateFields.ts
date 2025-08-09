import { useState } from "react";
import { errorMsgs, validationRegex } from "../../components/form/contstants";

const useMainValidateFields = (value: string | File | null, fieldName: string) => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    const validate = (photo?: File) => {
        setErrorMessage('');
        setIsValid(false);

        if (fieldName === 'photo') {
            if (!photo) {
                setErrorMessage(errorMsgs.empty);
                return;
            }

            if (!validationRegex.type.test(photo.type)) {
                setErrorMessage(errorMsgs.type);
                return;
            }

            if (photo.size > validationRegex.size) {
                setErrorMessage(errorMsgs.size);
                return;
            }

            if (!validationRegex.type.test(photo.type)) {
                setErrorMessage(errorMsgs.type);
                return;
            }

            setIsValid(true);
            return;
        }

        const regex = validationRegex[fieldName as keyof typeof validationRegex] as RegExp;

        const cleanedValue = fieldName === 'phone' ? String(value).replace(/\D/g, '') : String(value);
        if (!regex.test(cleanedValue)) {
            setErrorMessage(errorMsgs[fieldName as keyof typeof errorMsgs]);
        } else {
            setErrorMessage('');
            setIsValid(true);
        }
    }

    return { errorMessage, validate, isValid };
}

export default useMainValidateFields;