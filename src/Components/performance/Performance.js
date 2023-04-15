import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from './Performance.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchUserPerformance } from '../Utils/fetchData.js';
import { formatForPerformance } from '../Utils/formatData';

function Performance() {

    const { userId } = useParams();
    const [userPerformance, setUserPerformance] = useState();

    useEffect(() => {
        async function getData() {
            if (userId) {
                const getData = await fetchUserPerformance(userId);
                if (getData) {
                    const performance = formatForPerformance(getData);
                    setUserPerformance(performance);
                }
            }
        }
        getData();
    }, [userId]);

    return (
        <div className={styles.chart}>
            { userPerformance ?
                <ResponsiveContainer className={styles.chart} width="100%" height="100%">
                    <RadarChart
                        margin={{ top: 2, right: 24, bottom: 2, left: 24 }}
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        data={userPerformance}
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dy={4}
                            tick={{ fill:"#FFF", fontSize:"12", fontWeight:"500" }}
                            tickSize={13}
                            dataKey="subject"
                        />
                        <PolarRadiusAxis
                            axisLine={false}
                            tick={false}
                        />
                        <Radar
                            dataKey="value"
                            fill="#E60000"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            : null}
        </div>
    );
}

export default Performance;