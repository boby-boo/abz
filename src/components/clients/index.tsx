import Card from '../card';
import Button from '../button';
import { getClients } from '../../services/services';
import { useCallback, useEffect, useState } from 'react';
import type { Employee } from '../../types';

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
                    <Card key={employee.id} employee={employee} />
                ))}
            </ul>
            <div className="clients__button">
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
            </div>
        </>
    );
};

export default Clients;
