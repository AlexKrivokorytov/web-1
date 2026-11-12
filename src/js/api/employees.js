const EMPLOYEES_URL = 'https://jsonplaceholder.typicode.com/users';
const HERO_NAMES = ['Mario', 'Link', 'Samus Aran', 'Lara Croft', 'Sonic', 'Kratos'];
const FALLBACK_ROLES = ['Romaguera-Crona', 'Deckow-Crist', 'Romaguera-Jacobson', 'Robel-Corkery', 'Keebler LLC', 'Considine-Lockman'];

export const getBackupPhoto = (id) => `https://i.pravatar.cc/320?img=${id}`;

function formatEmployee(user) {
    return {
        id: user.id,
        name: HERO_NAMES[user.id - 1] || user.name,
        role: user.company?.name || FALLBACK_ROLES[user.id - 1] || 'Team member',
        photo: `https://picsum.photos/seed/${user.id}/320/220`,
        profileUrl: `${EMPLOYEES_URL}/${user.id}`,
    };
}

export function getFallbackEmployees() {
    return Array.from({ length: 6 }, (_, index) => formatEmployee({ id: index + 1 }));
}

export async function loadEmployees(limit = 6, { signal } = {}) {
    const response = await fetch(`${EMPLOYEES_URL}?_limit=${limit}`, { signal });

    if (!response.ok) throw new Error(`Failed to load employees (${response.status})`);
    return (await response.json()).map(formatEmployee);
}
