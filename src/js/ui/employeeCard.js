export function renderEmployeeCard(tpl, emp) {
    const card = tpl.content.cloneNode(true);
    const photo = card.querySelector('[data-photo]');
    const name = card.querySelector('[data-name]');
    const role = card.querySelector('[data-role]');
    const profileLink = card.querySelector('[data-cta]');

    photo.src = emp.photo;
    photo.alt = emp.name;
    name.textContent = emp.name;
    role.textContent = emp.role;
    profileLink.href = emp.profileUrl;

    return card;
}
