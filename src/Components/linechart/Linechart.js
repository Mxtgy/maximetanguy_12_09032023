import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import styles from './Linechart.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchUserAverageSessions } from '../Utils/fetchData.js';
import { formatForAverageSessions } from '../Utils/formatData';

function Linechart() {

    const { userId } = useParams();
    const [userAverageSessions, setUserAverageSessions] = useState();

    useEffect(() => {
        async function getData() {
            if (userId) {
                const getData = await fetchUserAverageSessions(userId);
                if (getData) {
                    const averageSessions = formatForAverageSessions(getData);
                    setUserAverageSessions(averageSessions);
                }
            }
        }
        getData();
    }, [userId]);

    function CustomTooltip({active, payload, label}) {

        if (active && payload && payload.length) {
          return (
            <div className={styles.customtooltip}>
              <p className={styles.label}>{payload[0].value} min</p>
            </div>
          );
        }
        return null;
    }

    function CustomCursor(props) {
        var x = props.points[0].x;
        var y = props.points[0].y;
        return (
            <Rectangle
                width={400}
                height={250}
                x={x}
                y={y - 70}
                style={{background: '#000', opacity: 0.1}}
            />
        );
    }

    return (
        <div className={styles.chart}>
            <span className={styles.title}>Durée moyenne des <strong>sessions</strong></span>
            { userAverageSessions ?
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userAverageSessions} margin={{ top: 65, right: 0, left: 0, bottom: 80 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="80%" stopColor="#FFF" />
                                <stop offset="100%" stopColor="#FFF" />
                            </linearGradient>
                        </defs>
                        <XAxis
                            tickMargin={30}
                            padding={{left:-15,right:-10}}
                            tick={{fill: "#FFF", opacity: ".5", fontSize: 12}}
                            axisLine={false}
                            hide={true}
                            tickLine={false}
                            dataKey="day"
                        />
                        <YAxis
                            dataKey="sessionLength"
                            hide={true}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            wrapperStyle={{outline: 'none'}}
                            cursor={<CustomCursor />}
                        />
                        <Line
                            type="natural"
                            unit="min"
                            dataKey="sessionLength"
                            stroke="url(#colorUv)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{stroke: '#FFF', strokeOpacity: '.5', fill: '#FFF', strokeWidth: 7, r: 4}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            : null}
            <div className={styles.days}>
                <span>L</span>
                <span>M</span>
                <span>M</span>
                <span>J</span>
                <span>V</span>
                <span>S</span>
                <span>D</span>
            </div>
        </div>
    );
}

export default Linechart;