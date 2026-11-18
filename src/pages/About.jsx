import { useMemo, useState } from 'react';
import EmployeeCard from '../components/EmployeeCard.jsx';
import useFetchEmployees from '../hooks/useFetchEmployees.js';

const EMPLOYEES_URL = 'https://jsonplaceholder.typicode.com/users';

export default function About() {
    const [query, setQuery] = useState('');
    const { data: employees, loading, error } = useFetchEmployees(EMPLOYEES_URL);
    const filteredEmployees = useMemo(() => {
        const value = query.toLowerCase();
        return employees.filter((employee) =>
            employee.name.toLowerCase().includes(value)
            || employee.company.name.toLowerCase().includes(value));
    }, [employees, query]);

    return (
        <>
            <section className="about">
                <h2>About me</h2>
                <p>My name is Alexander Krivokorytov. I study software engineering.</p>
                <p>This page is maximum i can do, because i am lazy and dont want to spend much time.</p>
            </section>
            <section className="team">
                <h2>Our team</h2>
                <input className="team__search" type="search" placeholder="Search employees" value={query} onChange={(event) => setQuery(event.target.value)} />
                {loading && <p>Loading...</p>}
                {error && <p>Failed to load employees.</p>}
                {!loading && !error && <p>Showing {filteredEmployees.length} of {employees.length} employees</p>}
                {!loading && !error && filteredEmployees.length === 0 && <p>No employees found.</p>}
                <div className="team__list">
                    {filteredEmployees.map((employee) => (
                        <EmployeeCard employee={employee} key={employee.id} />
                    ))}
                </div>
            </section>
        </>
    );
}
