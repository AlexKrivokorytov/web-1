import { loadEmployees } from '../api/employees.js';
import { renderEmployeeCard } from '../ui/employeeCard.js';

export async function initAboutPage() {
    const list = document.querySelector('.team__list');
    const template = document.querySelector('#employee-card-tpl');

    if (!list || !template) return;

    list.textContent = 'Loading employees...';

    try {
        const controller = new AbortController();
        const employees = await loadEmployees(6, { signal: controller.signal });
        const cards = document.createDocumentFragment();

        employees.forEach((employee) => {
            cards.append(renderEmployeeCard(template, employee));
        });

        list.replaceChildren(cards);
    } catch {
        controller.abort();
        list.textContent = 'Unable to load employees. Please try again later.';
    }
}
