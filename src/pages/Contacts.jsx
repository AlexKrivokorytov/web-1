import { useState } from 'react';
import ContactFormBasic from '../sections/ContactFormBasic.jsx';
import ContactFormRHF from '../sections/ContactFormRHF.jsx';

const ENDPOINT = 'https://postman-echo.com/post';

export default function Contacts() {
    const [formType, setFormType] = useState('basic');

    return (
        <>
            <h2>Contact form</h2>
            <div className="form-switcher">
                <button className="contact-form__button" type="button" onClick={() => setFormType('basic')}>FormData</button>
                <button className="contact-form__button" type="button" onClick={() => setFormType('rhf')}>React Hook Form</button>
            </div>
            {formType === 'basic'
                ? <ContactFormBasic endpoint={ENDPOINT} />
                : <ContactFormRHF endpoint={ENDPOINT} />}
        </>
    );
}
