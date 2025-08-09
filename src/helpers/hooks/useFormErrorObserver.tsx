import { type RefObject, useEffect, useState } from 'react';

const useFormErrorObserver = (formRef: RefObject<HTMLFormElement | null>) => {
    const [hasError, setHasError] = useState(true);

    useEffect(() => {
        if (!formRef.current) return;
        const formEl = formRef.current;

        const recalc = () => {
            const any = formEl.querySelector(
                '[data-element="input"].error-input',
            );
            setHasError(!!any);
        };

        recalc();

        const obs = new MutationObserver(mutations => {
            if (
                mutations.some(
                    m =>
                        (m.type === 'attributes' &&
                            m.attributeName === 'class') ||
                        m.type === 'childList',
                )
            ) {
                requestAnimationFrame(recalc);
            }
        });

        obs.observe(formEl, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => obs.disconnect();
    }, [formRef]);

    return hasError;
};

export default useFormErrorObserver;
