import styles from './Sidebar.module.css';
import Tabicon from '../Components/tabicon/Tabicon.js';

import yoga from '../Assets/yoga.svg';
import swim from '../Assets/swim.svg';
import bike from '../Assets/bike.svg';
import fitness from '../Assets/fitness.svg';

function Sidebar() {
    return (
        <section className={styles.sidebar}>
            <ul>
                <Tabicon data="Yoga" img={yoga} path="/" />
                <Tabicon data="Swim" img={swim} path="/" />
                <Tabicon data="Bike" img={bike} path="/" />
                <Tabicon data="Fitness" img={fitness} path="/"/>
            </ul>
            <span className={styles.copyright}>Copyright, SportSee 2020</span>
        </section>
    );
}

export default Sidebar;