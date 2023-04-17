import { Link } from 'react-router-dom';
import styles from './Tabicon.module.css';
import PropTypes from 'prop-types';

function Sport({ data, img, path }) {

    /*const data = prop.data;
    const urlImg = prop.img;
    const path = prop.path;*/

    return (
        <li className={styles.li}>
            <Link className={styles.icon} to={path}>
                <img src={img} alt={data}></img>
            </Link>
        </li>
    );
}

Sport.propTypes = {
    data: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired, 
    path: PropTypes.string.isRequired
}

export default Sport;