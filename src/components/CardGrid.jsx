import Card from './Card.jsx';

export default function CardGrid({ items, compact }) {
    return (
        <section className={`news${compact ? ' news--compact' : ''}`}>
            {items.map((item) => <Card key={item.id} item={item} />)}
        </section>
    );
}
