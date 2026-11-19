# Laboratory Work No. 11

A React application with a basic `FormData` form and a validated React Hook Form form.

## Run

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Main files

- `src/App.jsx` stores the current page for pseudo-navigation.
- `src/context/ThemeContext.jsx` stores and switches the light/dark theme.
- `src/hooks/useFetchEmployees.js` loads employees and exposes loading/error states.
- `src/data/news.js` contains mock news data.
- `src/components/` contains reusable React components.
- `src/pages/Home.jsx` stores the compact view state and renders the home page.
- `src/pages/About.jsx` loads and filters employees.
- `src/pages/Contacts.jsx` renders the contact form.
- `src/sections/ContactFormBasic.jsx` sends `FormData`.
- `src/sections/ContactFormRHF.jsx` validates fields and sends JSON with React Hook Form.
