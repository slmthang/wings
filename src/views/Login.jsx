
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
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

const data2 = [
  { name: 'Housing', value: 500 },
  { name: 'Transportation', value: 540 },
  { name: 'Insurance', value: 800 },
  { name: 'Personal', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

function renderPieChartLabel(e) {
  return e.name;
}

const renderPieChart = (
  <PieChart>
    <Pie
      data={data2}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={renderPieChartLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
)




export default function Login() {

    return (
      <div id='charts'>
        <ResponsiveContainer id='chart1' width="85%" height={275}>
          {renderBarChart}
        </ResponsiveContainer>
        <ResponsiveContainer id='chart2' width="85%" height={275}>
          {renderPieChart}
        </ResponsiveContainer>
      </div>

    )
}