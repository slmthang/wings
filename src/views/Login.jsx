
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import './Login.scss';
const data = [{name: 'Budget', value: 3000}, {name: 'Expenses', value: 2540}];


const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
};

const renderBarChart = (
  <BarChart data={data}>
    <XAxis dataKey="name"/>
    <YAxis domain={[0, 'dataMax + 3000']}/>
    <Bar dataKey="value" barSize={30} label={renderCustomBarLabel}>
      {
        data.map((entry, index) => (
          <Cell key={`cell-${entry.name.toLowerCase()}`} fill={entry.name.toLowerCase() === 'budget' ? '#32CD32' : '#EE4B2B'} />
        ))
      }
    </Bar>
  </BarChart>
);




export default function Login() {

    return (
      <div id='charts'>
        <ResponsiveContainer id='chart1' width="90%" height={300}>
          {renderBarChart}
        </ResponsiveContainer>
      </div>

    )
}