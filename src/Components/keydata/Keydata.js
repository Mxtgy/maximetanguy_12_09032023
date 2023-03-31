import styles from './Keydata.module.css';

function Keydata(props) {

    const type = props.type;
    const unite = props.unite;
    const icon = props.icon;
    const data = props.data;

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

export default Keydata;