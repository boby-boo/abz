import Button from '../button';
import { getClients } from '../../services/services';
import { lazy, Suspense, useEffect, useState } from 'react';
import type { Employee } from '../../types';
import CardSkeleton from '../card-skeleton';
import { Fade } from 'react-awesome-reveal';

const Card = lazy(() => import('../card'));

type EmployeesProps = {
    shouldUpdate: boolean;
};

const Employees = ({ shouldUpdate }: EmployeesProps) => {
    const [employees, setEmployees] = useState<Employee[] | []>([]);
    const [nextPage, setNextPage] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const fetchClients = async (url?: string) => {
        setIsLoading(true);
        const data = await getClients(url);
        const updatedEmployees = shouldUpdate
            ? data.users
            : [...employees, ...data.users];
        setEmployees(updatedEmployees);
        setNextPage(data.links.next_url);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        if (shouldUpdate) {
            fetchClients(undefined);
        }
    }, [shouldUpdate]);

    return (
        <>
            <ul className="employees__list">
                {employees.map(employee => (
                    <Suspense key={employee.id} fallback={<CardSkeleton />}>
                        <Card employee={employee} />
                    </Suspense>
                ))}
            </ul>
            <div className="employees__button">
                <Fade direction="up">
                    <Button
                        type="yellow"
                        onClick={() => fetchClients(nextPage)}
                        disabled={!nextPage || isLoading || shouldUpdate}
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

export default Employees;
