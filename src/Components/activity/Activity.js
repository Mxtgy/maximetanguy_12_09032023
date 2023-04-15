import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Activity.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchUserActivity } from '../Utils/fetchData.js';
import { formatForActivity } from '../Utils/formatData';

function Activity() {

    const { userId } = useParams();
    const [userActivity, setUserActivity] = useState();

    useEffect(() => {
        async function getData() {
            if (userId) {
                const getData = await fetchUserActivity(userId);
                if (getData) {
                    const activity = formatForActivity(getData);
                    setUserActivity(activity);
                }
            }
        }
        getData();
    }, [userId]);

    return (
        <div className={styles.graph_activity}>
            <div className={styles.head_wrapper}>
                <span className={styles.title}>Activité quotidienne</span>
                <div className={styles.legends}>
                    <span className={styles.weight}>Poids (kg)</span>
                    <span className={styles.kcal}>Calories brûlées (kCal)</span>
                </div>
            </div>
            {userActivity ?
                <ResponsiveContainer width="100%" height={180} className={styles.chart} >
                    <BarChart barSize={8} data={userActivity} margin={{left: 50, right: 50 }} barGap="8%">
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />
                        <XAxis
                            scale="auto"
                            tickMargin="13"
                            tick={{fill: '#9B9EAC', stroke: '#9B9EAC', strokeWidth: .3, fontSize:".9em"}}
                            axisLine={{stroke: '#DEDEDE'}}
                            tickLine={false}
                            dataKey="day"
                        />
                        <YAxis
                            yAxisId={1}
                            tick={{fill: '#9B9EAC', stroke: '#9B9EAC', strokeWidth: .3}}
                            tickMargin="30"
                            axisLine={false}
                            tickLine={false}
                            tickCount={3}
                            orientation="right"
                            dataKey="kilogram"
                            type="number"
                            domain={['dataMin - 5', 'auto']}
                        />
                        <YAxis
                            yAxisId={2}
                            hide={true}
                            type="number"
                            domain={[0, 'dataMax']}
                        />
                        <Tooltip
                            separator=""
                            formatter={(value) => [value, ""]}
                            wrapperStyle={{outline:"none"}}
                            contentStyle={{background:"#E60000", border:"none", paddingTop:".5em", paddingBottom:".5em", textAlign:"center"}}
                            itemStyle={{color:"#FFF", margin:".6em 0 .6em", fontSize:".7em"}}
                            labelStyle={{display:"none"}}
                            cursor={{ outline: "none" }}
                        />
                        <Bar
                            yAxisId={1}
                            dataKey="kilogram"
                            radius={[20, 20, 0, 0]}
                            unit="kg"
                            fill="#282D30"
                        />
                        <Bar
                            yAxisId={2}
                            dataKey="calories"
                            radius={[20, 20, 0, 0]}
                            unit="kcal"
                            fill="#E60000"
                        />
                    </BarChart>
                </ResponsiveContainer>
            : null }
        </div>
    );
}

export default Activity;