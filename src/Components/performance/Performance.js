import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from './Performance.module.css';

const data = [
    {
        "value": 80,
        subject: "Intensité"
    },
    {
        "value": 120,
        subject: "Vitesse"
    },
    {
        "value": 140,
        subject: "Force"
    },
    {
        "value": 50,
        subject: "Endurance"
    },
    {
        "value": 200,
        subject: "Energie"
    },
    {
        "value": 90,
        subject: "Cardio"
    }
];

function Performance() {

    return (
        <ResponsiveContainer className={styles.chart} width="30%" height={220}>
            <RadarChart margin={{ top: 2, right: 24, bottom: 2, left: 24 }} cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dy={4} tick={{ fill:"#FFF", fontSize:"12", fontWeight:"500" }} tickSize={13} dataKey="subject" />
                <PolarRadiusAxis axisLine={false} tick={false}/>
                <Radar dataKey="value" fill="#E60000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default Performance;