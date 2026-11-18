export default function EmployeeCard({ employee }) {
    return (
        <article className="team__card">
            <h3 className="team__name">{employee.name}</h3>
            <p className="team__role">{employee.company.name}</p>
            <a className="team__profile" href={`mailto:${employee.email}`}>{employee.email}</a>
        </article>
    );
}
