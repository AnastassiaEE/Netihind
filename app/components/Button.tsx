import styles from '../styles/Button.module.css';

export default function Button() {
    return (
        <button className={[styles.btn, styles.active].join(' ')}> Hello </button>
    )
}