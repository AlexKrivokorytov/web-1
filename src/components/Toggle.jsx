export default function Toggle({ compact, onToggle }) {
    return (
        <button className="view-toggle" type="button" style={{ cursor: 'pointer' }} onClick={onToggle}>
            {compact ? 'Enable normal view' : 'Enable compact view'}
        </button>
    );
}
