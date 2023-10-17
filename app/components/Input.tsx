import styles from '../styles/Input.module.css';
import classNames from 'classnames';

export default function Input({placeholder, handleCh, inputV, focus}) {

    return (
        <div className="input-group">
            <input 
            type="text" 
            className={classNames(styles['form-control'])}
            placeholder={placeholder}
            onChange={(e) => handleCh(e.target.value)}
            onFocus={focus}
            value={inputV}/>
        </div>
        
    )
}