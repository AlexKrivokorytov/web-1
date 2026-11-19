import { useState } from 'react';

export default function ContactFormBasic({ endpoint }) {
    const [status, setStatus] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus('Sending...');

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: new FormData(form),
            });
            if (!response.ok) throw new Error('Request failed');
            await response.json();
            form.reset();
            setStatus('Message sent.');
        } catch {
            setStatus('Failed to send message.');
        }
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form__item">
                <label htmlFor="basic-name">Name</label>
                <input className="contact-form__input" id="basic-name" name="name" required />
            </div>
            <div className="contact-form__item">
                <label htmlFor="basic-email">Email</label>
                <input className="contact-form__input" id="basic-email" name="email" type="email" required />
            </div>
            <div className="contact-form__item">
                <label htmlFor="basic-message">Message</label>
                <textarea className="contact-form__textarea" id="basic-message" name="message" required />
            </div>
            <button className="contact-form__button" type="submit">Send</button>
            {status && <p className="contact-form__status">{status}</p>}
        </form>
    );
}
