import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './Activity.module.css';

const data = [
    {
      "name": "1",
      "Poids (kg)": 80,
      "Calories brûlées (kCal)": 240
    },
    {
      "name": "2",
      "Poids (kg)": 80,
      "Calories brûlées (kCal)": 220
    },
    {
      "name": "3",
      "Poids (kg)": 81,
      "Calories brûlées (kCal)": 280
    },
    {
      "name": "4",
      "Poids (kg)": 81,
      "Calories brûlées (kCal)": 290
    },
    {
      "name": "5",
      "Poids (kg)": 80,
      "Calories brûlées (kCal)": 160
    },
    {
      "name": "6",
      "Poids (kg)": 78,
      "Calories brûlées (kCal)": 162
    },
    {
      "name": "7",
      "Poids (kg)": 76,
      "Calories brûlées (kCal)": 390
    }
  ];

function Activity() {

    function renderColorfullLegendText(value, entry) {
        var color = "#74798C";
        return <span style={{ color }}>{value}</span>;
    }

    return (
        <ResponsiveContainer width="100%" height={220} className={styles.chart} >
            <BarChart className={styles.barchart} barSize={6} data={data} barGap="8%">
                <text x={80} y={13} fill="black" textAnchor="middle" dominantBaseline="central">
                    <tspan className={styles.title}>Activité quotidienne</tspan>
                </text>
                <Legend
                    width={650}
                    wrapperStyle={{ fontSize: "13px", fontWeight: "500" }}
                    formatter={renderColorfullLegendText}
                    align="right"
                    verticalAlign="top"
                    iconSize="10"
                    iconType="circle"
                    height={50}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis
                    scale="auto"
                    tickMargin="15"
                    tick={{fill: '#9B9EAC', stroke: '#9B9EAC', strokeWidth: .3}}
                    axisLine={{stroke: '#DEDEDE'}}
                    tickLine={false}
                    dataKey="name"
                />
                <YAxis
                    yAxisId={1}
                    tick={{fill: '#9B9EAC', stroke: '#9B9EAC', strokeWidth: .3}}
                    tickMargin="25"
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                    orientation="right"
                    dataKey="Poids (kg)"
                    type="number"
                    domain={['dataMin', 'auto']}
                    
                />
                <YAxis yAxisId={2} hide={true} type="number" domain={[0, 'dataMax']}/>
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
                    dataKey="Poids (kg)"
                    radius={[20, 20, 0, 0]}
                    unit="kg"
                    fill="#282D30"
                />
                <Bar
                    yAxisId={2}
                    dataKey="Calories brûlées (kCal)"
                    radius={[20, 20, 0, 0]}
                    unit="kcal"
                    fill="#E60000"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Activity;