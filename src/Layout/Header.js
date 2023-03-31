import { Link, NavLink } from "react-router-dom";
import logo from '../Assets/logo.svg';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.logo} to='/'>
                    <img src={logo} alt='Logo Sportsee'></img>
                </Link>
                <div className={styles.links}>
                    <NavLink to='/'>Accueil</NavLink>
                    <NavLink to='/'>Profil</NavLink>
                    <NavLink to='/'>Réglages</NavLink>
                    <NavLink to='/'>Communauté</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;