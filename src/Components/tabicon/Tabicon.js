import { Link } from 'react-router-dom';
import styles from './Tabicon.module.css';

function Sport(prop) {

    const data = prop.data;
    const urlImg = prop.img;
    const path = prop.path;

    return (
        <li className={styles.li}>
            <Link className={styles.icon} to={path}>
                <img src={urlImg} alt={data}></img>
            </Link>
        </li>
    );
}

export default Sport;