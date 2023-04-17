import Header from './Header.js';
import Sidebar from './Sidebar.js';
import styles from './Layout.module.css';
import PropTypes from 'prop-types';

/**
 * This function return the layout of the app. Header + Sidebar + Node from Router
 * @param { HTMLElement } children HTML returned by the router
 * @returns { HTMLElement }
 */
function Layout({children}) {
    return (
        <>
            <Header/>
            <Sidebar/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;