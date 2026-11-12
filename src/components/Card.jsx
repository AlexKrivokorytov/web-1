import studentAvif from '../assets/images/student.avif';
import studentWebp from '../assets/images/student.webp';
import studentJpg from '../assets/images/student.jpg';

export default function Card({ item }) {
    return (
        <article className={`news__card${item.featured ? ' news__card--tailwind-demo dark:ring-2 dark:ring-brand-blue' : ''}`}>
            <picture className="news__media">
                <source srcSet={studentAvif} type="image/avif" />
                <source srcSet={studentWebp} type="image/webp" />
                <img className="news__image" src={studentJpg} alt="Student" />
            </picture>
            <h3 className="news__title">{item.title}</h3>
            <p className="news__description">{item.description}</p>
            <div className={`news__meta${item.featured ? ' news__meta--tailwind-demo' : ''}`}>
                <time dateTime={item.date}>{new Date(item.date).toLocaleDateString('uk-UA')}</time>
                <a href="#">Read more</a>
            </div>
        </article>
    );
}
