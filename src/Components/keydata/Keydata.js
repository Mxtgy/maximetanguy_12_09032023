import styles from './Keydata.module.css';
import PropTypes from 'prop-types';

/*
This is the keydata component on the side of the page.
*/
function Keydata({ type, unite, icon, data }) {

    return (
        <div className={styles.card}>
            <img src={icon} alt={type}></img>
            <div className={styles.card_informations}>
                <span className={styles.data}>{ Intl.NumberFormat('en-US').format(data) + unite }</span>
                <span className={styles.type}>{type}</span>
            </div>
        </div>
    );
}

Keydata.propTypes = {
    type: PropTypes.string.isRequired,
    unite: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired
}

export default Keydata;