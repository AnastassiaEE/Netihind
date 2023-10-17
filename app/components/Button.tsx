import styles from '../styles/Button.module.css';

export default function Button({children, active}) {

    return (
        <button className={styles.btn} disabled={!active}> {children} </button>
    )
}