import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactFormRHF({ endpoint }) {
    const [status, setStatus] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onValid = async (data) => {
        setStatus('Sending...');

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Request failed');
            await response.json();
            reset();
            setStatus('Message sent.');
        } catch {
            setStatus('Failed to send message.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit(onValid)} noValidate>
            <div className="contact-form__item">
                <label htmlFor="rhf-name">Name</label>
                <input className="contact-form__input" id="rhf-name" {...register('name', { required: 'Name is required' })} />
                {errors.name && <small className="contact-form__error">{errors.name.message}</small>}
            </div>
            <div className="contact-form__item">
                <label htmlFor="rhf-email">Email</label>
                <input className="contact-form__input" id="rhf-email" type="email" {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                })} />
                {errors.email && <small className="contact-form__error">{errors.email.message}</small>}
            </div>
            <div className="contact-form__item">
                <label htmlFor="rhf-message">Message</label>
                <textarea className="contact-form__textarea" id="rhf-message" {...register('message', { required: 'Message is required' })} />
                {errors.message && <small className="contact-form__error">{errors.message.message}</small>}
            </div>
            <button className="contact-form__button" type="submit">Send</button>
            {status && <p className="contact-form__status">{status}</p>}
        </form>
    );
}
