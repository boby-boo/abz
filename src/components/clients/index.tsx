import Button from '../button';
import { getClients } from '../../services/services';
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import type { Employee } from '../../types';
import CardSkeleton from '../card/card-skeleton';
import { Fade } from 'react-awesome-reveal';

const Card = lazy(() => import('../card'));

const Clients = () => {
    const [employees, setEmployees] = useState<Employee[] | []>([]);
    const [nextPage, setNextPage] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const fetchClients = useCallback(
        async (url?: string) => {
            setIsLoading(true);
            const data = await getClients(url);
            setEmployees([...employees, ...data.users]);
            setNextPage(data.links.next_url);
            setIsLoading(false);
        },
        [employees],
    );

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <>
            <ul className="clients__list">
                {employees.map(employee => (
                    <Suspense key={employee.id} fallback={<CardSkeleton />}>
                        <Card employee={employee} />
                    </Suspense>
                ))}
            </ul>
            <div className="clients__button">
                <Fade direction="up">
                    <Button
                        type="yellow"
                        onClick={() => fetchClients(nextPage)}
                        disabled={!nextPage || isLoading}
                    >
                        {isLoading && nextPage
                            ? 'Loading...'
                            : !isLoading && !nextPage
                              ? 'No more users'
                              : 'Show more'}
                    </Button>
                </Fade>
            </div>
        </>
    );
};

export default Clients;
