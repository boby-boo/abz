import { useState, useEffect } from 'react';
import Banner from '../../components/banner';
import Clients from '../../components/clients';
import Form from '../../components/form';
import Header from '../../components/header';
import Typography from '../../components/typography';
import SuccessBanner from '../../components/success-banner';
import { postEmployee } from '../../services/services';
import Preloader from '../../components/preloader';

const HomePage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const cleanedPhone = (phone: string) => phone.replace(/[^\d+]/g, '');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);

        const phone = formData.get('phone') as string;
        formData.set('phone', cleanedPhone(phone));

        const response = await postEmployee(formData);

        if (response.success) {
            setIsSuccess(true);
            setSuccessMessage(response.message);
        } else {
            setErrors(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
            setErrors(false);
            setSuccessMessage('');
        }, 7000);

        return () => clearTimeout(timeout);
    }, [isSuccess, errors]);

    return (
        <>
            <Header />
            <main>
                <section className="banner">
                    <div className="container">
                        <Banner />
                    </div>
                </section>
                <section className="clients" id="clients">
                    <div className="container">
                        <div className="clients__row">
                            <Typography type="h2">
                                Working with GET request
                            </Typography>
                            <Clients />
                        </div>
                    </div>
                </section>
                <section className="form" id="signup">
                    <div className="container">
                        <div className="form__row">
                            {isLoading && <Preloader />}
                            {errors && (
                                <Typography type="h2" className="form__error">
                                    Error
                                </Typography>
                            )}
                            {isSuccess ? (
                                <SuccessBanner title={successMessage} />
                            ) : (
                                <>
                                    <Typography
                                        type="h2"
                                        className="form__title"
                                    >
                                        Working with POST request
                                    </Typography>
                                    <Form handleSubmit={handleSubmit} />
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
