import { useState } from 'react';
import { trimFileName } from '../../../helpers/utils/trimFileName';
import useMainValidateFields from '../../../helpers/hooks/useMainValidateFields';

const Upload = () => {
    const [fileInfo, setFileInfo] = useState<File | null>(null);
    const { errorMessage, validate } = useMainValidateFields(fileInfo, 'photo');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] || null;
        if (file) {
            setFileInfo(file);
            validate(file);
        }
    };

    const hasError = !!errorMessage?.length;
    const containerClass = `file-upload ${hasError ? 'error' : ''} ${fileInfo?.size ? 'filled' : ''}`;

    return (
        <div
            className={`form__upload ${hasError || !fileInfo ? 'error-input' : ''}`}
            data-element="input"
        >
            <div className="field-upload__wrapper">
                <div className={containerClass}>
                    <label
                        className="file-upload__button"
                        htmlFor="file-input-id"
                    >
                        Upload
                    </label>
                    <div className="file-upload__field">
                        <input
                            type="file"
                            id="file-input-id"
                            name="photo"
                            className="file-upload__input"
                            onChange={handleFileChange}
                        />
                        <span className="file-upload__placeholder">
                            {trimFileName(fileInfo?.name || '') ||
                                'Upload your photo'}
                        </span>
                    </div>
                </div>
                {hasError && (
                    <span className="file-upload__error-text">
                        {errorMessage}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Upload;
