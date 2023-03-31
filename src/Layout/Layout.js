import Header from './Header.js';
import Sidebar from './Sidebar.js';
import styles from './Layout.module.css';

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

export default Layout;