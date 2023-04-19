import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { fetchUserData } from '../../Components/Utils/fetchData.js';
//import { user } from '../../Data/mock.js';
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

/* 
This component is the dashboard with all the charts and keydata inside.
 */
function Dashboard() {

    const { userId } = useParams();
    const [userkeyData, setUserKeyData] = useState({});
    const [userName, setUserName] = useState();
    const [logErr, setLogErr] = useState(false);
    
    /*useEffect(() => {
        setUserName(user.data.userInfos.firstName);
        setUserKeyData(user.data.keyData);
    }, []);*/

    useEffect(() => {
        async function getData() {
            if (userId) {
                const getData = await fetchUserData(userId);
                if (getData) {
                    setUserName(getData.userInfos.firstName);
                    setUserKeyData(getData.keyData);
                } else {
                    setLogErr(true);
                }
            }
        }
        getData();
    }, [userId]);

    return (
        <>
            { logErr ? <Navigate to="/*" /> : 
                <>
                    <section className={styles.greetings_section}>
                        <h1 className={styles.greeting}>Bonjour <span className={styles.username}>{userName}</span></h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </section>
                    <section className={styles.datas_section}>
                        <div className={styles.graphs}>
                            <Activity />
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
            }
        </>
    );
}

export default Dashboard;