export default function Contacts() {
    return (
        <>
            <h2>Contact form</h2>
            <form className="contact-form">
                <div className="contact-form__item">
                    <label htmlFor="name">Name</label>
                    <input className="contact-form__input" id="name" type="text" />
                </div>
                <div className="contact-form__item">
                    <label htmlFor="email">Email</label>
                    <input className="contact-form__input" id="email" type="email" />
                </div>
                <div className="contact-form__item">
                    <label className="contact-form__label" htmlFor="phone">Phone:</label>
                    <input className="contact-form__input" id="phone" type="tel" name="phone" placeholder="+380XXXXXXXXX" required pattern="\+380[0-9]{9}" title="Enter a number in the format +380XXXXXXXXX" aria-describedby="phone-hint" />
                    <small className="contact-form__hint" id="phone-hint">Format: +380XXXXXXXXX</small>
                </div>
                <div className="contact-form__item">
                    <label htmlFor="message">Message</label>
                    <textarea className="contact-form__textarea" id="message" />
                </div>
                <button className="contact-form__button" type="submit">Send</button>
            </form>
        </>
    );
}
