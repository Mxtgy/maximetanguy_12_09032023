import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Linechart.module.css';

const data = [
        {
            "day": "L",
            "sessionLength": 30
        },
        {
            "day": "L",
            "sessionLength": 30
        },
        {
            "day": "M",
            "sessionLength": 23
        },
        {
            "day": "M",
            "sessionLength": 45
        },
        {
            "day": "J",
            "sessionLength": 50
        },
        {
            "day": "V",
            "sessionLength": 0
        },
        {
            "day": "S",
            "sessionLength": 0
        },
        {
            "day": "D",
            "sessionLength": 60
        },
        {
            "day": "D",
            "sessionLength": 60
        }
];

function Linechart() {

    function CustomTooltip({ active, payload, label }) {
        if (active && payload && payload.length) {
          return (
            <div className={styles.customtooltip}>
              <p className={styles.label}>{payload[0].value} min</p>
            </div>
          );
        }
        return null;
    }

    return (
        <div className={styles.chart}>
            <span className={styles.title}>Durée moyenne des <strong>sessions</strong></span>
            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data} margin={{ top: 65, right: 0, left: 0, bottom: 80 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                            <stop offset="0%" stopColor="#FF0000" />
                            <stop offset="80%" stopColor="#FFF" />
                            <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                    </defs>
                    <XAxis tickMargin={30} padding={{left:-15,right:-10}}  tick={{fill: "#FFF", opacity: ".5", fontSize: 12}} axisLine={false} hide={true} tickLine={false} dataKey="day"/>
                    <YAxis dataKey="sessionLength" hide={true} />
                    <Tooltip cursor={false} /*position={{y:0}}*/ content={<CustomTooltip />} />
                    <Line type="natural" unit="min" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false} activeDot={{stroke: '#FFF', strokeOpacity: '.5', fill: '#FFF', strokeWidth: 7, r: 4}} />
                </LineChart>
            </ResponsiveContainer>
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