import { loadEmployees } from '../api/employees.js';
import { renderEmployeeCard } from '../ui/employeeCard.js';

export function initAboutPage() {
    const list = document.querySelector('.team__list');
    const template = document.querySelector('#employee-card-tpl');

    if (!list || !template) return () => {};

    const controller = new AbortController();
    list.textContent = 'Loading employees...';

    loadEmployees(6, { signal: controller.signal })
        .then((employees) => {
            if (controller.signal.aborted) return;

            const cards = document.createDocumentFragment();

            employees.forEach((employee) => {
                cards.append(renderEmployeeCard(template, employee));
            });

            list.replaceChildren(cards);
        })
        .catch((error) => {
            if (error.name !== 'AbortError') {
                list.textContent = 'Unable to load employees. Please try again later.';
            }
        });

    return () => controller.abort();
}
