export default function Toggle({ compact, onToggle }) {
    return (
        <button className="view-toggle" type="button" style={{ cursor: 'pointer' }} onClick={onToggle}>
            {compact ? 'Увімкнути звичайний вигляд' : 'Увімкнути компактний вигляд'}
        </button>
    );
}
