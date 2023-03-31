import { user, activity, average_session, performance } from '../../Data/mock.js';
import Keydata from '../../Components/keydata/Keydata.js';
import Activity from '../../Components/activity/Activity.js';
import Linechart from '../../Components/linechart/Linechart.js';
import Performance from '../../Components/performance/Performance.js';
import Score from '../../Components/score/Score.js';
import calorieIcon from '../../Assets/calories-icon.svg';
import proteinIcon from '../../Assets/protein-icon.svg';
import glucidIcon from '../../Assets/carbs-icon.svg';
import lipidIcon from '../../Assets/fat-icon.svg';
import styles from './Dashboard.module.css';


console.log(user);
console.log(user);
console.log(activity);
console.log(average_session);
console.log(performance);


function Dashboard() {

    const userkeyData = user.data.keyData;

    return (
        <>
            <section className={styles.greetings_section}>
                <h1 className={styles.greeting}>Bonjour <span className={styles.username}>{user.data.userInfos.firstName}</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className={styles.datas_section}>
                <div className={styles.graphs}>
                    <div className={styles.graph_activity}>
                        <Activity />
                    </div>
                    <Linechart />
                    <Performance />
                    <Score />
                </div>
                <div className={styles.cards}>
                    { userkeyData.calorieCount ? <Keydata type="Calories" unite="kCal" icon={calorieIcon} data={userkeyData.calorieCount}  /> : null}
                    { userkeyData.proteinCount ? <Keydata type="Protéines" unite="g" icon={proteinIcon} data={userkeyData.proteinCount}  /> : null}
                    { userkeyData.carbohydrateCount ? <Keydata type="Glucides" unite="g" icon={glucidIcon} data={userkeyData.carbohydrateCount}  /> : null}
                    { userkeyData.lipidCount ? <Keydata type="Lipides" unite="g" icon={lipidIcon} data={userkeyData.lipidCount}  /> : null}
                </div>
            </section>
        </>
    );
}

export default Dashboard;