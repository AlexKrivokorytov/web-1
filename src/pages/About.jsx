import { useEffect, useState } from 'react';
import { getBackupPhoto, getFallbackEmployees, loadEmployees } from '../js/api/employees.js';

export default function About() {
    const [employees, setEmployees] = useState(getFallbackEmployees);

    useEffect(() => {
        const controller = new AbortController();

        loadEmployees(6, { signal: controller.signal })
            .then(setEmployees)
            .catch(() => {});

        return () => controller.abort();
    }, []);

    return (
        <>
            <section className="about">
                <h2>About me</h2>
                <p>My name is Alexander Krivokorytov. I study software engineering.</p>
                <p>This page is maximum i can do, because i am lazy and dont want to spend much time.</p>
            </section>
            <section className="team">
                <h2>Our team</h2>
                <div className="team__list">
                    {employees.map((employee) => (
                        <article className="team__card" key={employee.id}>
                            <img className="team__photo" src={employee.photo} alt={employee.name} onError={(event) => {
                                const backup = getBackupPhoto(employee.id);
                                if (event.currentTarget.src !== backup) event.currentTarget.src = backup;
                            }} />
                            <h3 className="team__name">{employee.name}</h3>
                            <p className="team__role">{employee.role}</p>
                            <a className="team__profile" href={employee.profileUrl} target="_blank" rel="noopener noreferrer">View profile</a>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
