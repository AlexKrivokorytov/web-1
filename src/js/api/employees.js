const EMPLOYEES_URL = 'https://jsonplaceholder.typicode.com/users';
const HERO_NAMES = ['Mario', 'Link', 'Samus Aran', 'Lara Croft', 'Sonic', 'Kratos'];

export async function loadEmployees(limit = 6, { signal } = {}) {
    const response = await fetch(`${EMPLOYEES_URL}?_limit=${limit}`, { signal });

    if (!response.ok) {
        throw new Error(`Failed to load employees (${response.status} ${response.statusText})`);
    }

    const users = await response.json();

    return users.map((user) => ({
        id: user.id,
        name: HERO_NAMES[user.id - 1] || user.name,
        role: user.company?.name || 'Team member',
        photo: `https://picsum.photos/seed/${user.id}/320/220`,
        profileUrl: `${EMPLOYEES_URL}/${user.id}`,
    }));
}
