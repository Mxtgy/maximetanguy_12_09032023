import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import styles from './Score.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchUserScore } from '../Utils/fetchData.js';
import { formatForScore } from '../Utils/formatData';

function Score() {

    const { userId } = useParams();
    const [userScore, setUserScore] = useState();

    useEffect(() => {
        async function getData() {
            if (userId) {
                const getData = await fetchUserScore(userId);
                if (getData) {
                    const score = formatForScore(getData);
                    setUserScore(score);
                }
            }
        }
        getData();
    }, [userId]);

    return(
        <div className={styles.chart}>
            { userScore && userScore[0].text && userScore[0].angle ?
                <>
                    <span className={styles.title}>Score</span>
                    <span className={styles.intext}><em>{ userScore[0].text }</em> de votre <br></br>objectif</span>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>             
                            <Pie
                                data={[{value: 1000}]}
                                startAngle={90}
                                endAngle={450}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                fill="#FFF"
                            />
                            <Pie
                                data={userScore}
                                startAngle={90}
                                endAngle={90 + userScore[0].angle }
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                cornerRadius={50}
                                innerRadius={70}
                                outerRadius={80}
                                stroke="none"
                                fill="#E60000"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </>
            : null}
        </div>
    );
}

export default Score;