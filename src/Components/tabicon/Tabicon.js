import { Link } from 'react-router-dom';
import styles from './Tabicon.module.css';
import PropTypes from 'prop-types';

/* 
This is the link component that is inside the sidebar.
*/
function Sport({ data, img, path }) {

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