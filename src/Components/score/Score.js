import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import styles from './Score.module.css';

const data01 = [
    { value: 1000 }
  ];
  const data = [
    { value: .30 }
  ];

  const percent = data[0]["value"] * 360;
  const check = data[0]["value"] * 100;

function Score() {
    
    return(
        <ResponsiveContainer className={styles.chart} width="30%" height={220}>
            <PieChart width={400} height={400}>
                <text x={30} y={13} fill="black" textAnchor="middle" dominantBaseline="central">
                    <tspan className={styles.title}>Score</tspan>
                </text>
                
                <Pie data={data01} startAngle={90} endAngle={450} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#FFF" />
                <Pie data={data} startAngle={90} endAngle={90 + percent} dataKey="value" cx="50%" cy="50%" cornerRadius={50} innerRadius={60} outerRadius={70} stroke="none" fill="#E60000" />
                <text x={100} y={100} fill="black" textAnchor="middle" dominantBaseline="central">
                    <tspan className={styles.title}>{check} de votre objectif</tspan>
                </text>
            </PieChart>
            
      </ResponsiveContainer>
    );
}

export default Score;