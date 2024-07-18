
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import './Login.scss';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2100, amt: 2100}];

const renderCustomAxisTick = ({ x, y, payload }) => {
  let path = '';

  switch (payload.value) {
    case 'Page A':
      path = 'M2.875 20.4444H7.1875V12.7778H15.8125V20.4444H20.125V8.94444L11.5 3.19444L2.875 8.94444V20.4444ZM0 23V7.66667L11.5 0L23 7.66667V23H12.9375V15.3333H10.0625V23H0Z'
      break;
    case 'Page B':
      path = 'M2.875 20.4444H7.1875V12.7778H15.8125V20.4444H20.125V8.94444L11.5 3.19444L2.875 8.94444V20.4444ZM0 23V7.66667L11.5 0L23 7.66667V23H12.9375V15.3333H10.0625V23H0Z'
      break;
    default:
      path = '';
  }

  return (
    <svg x={x - 12} y={y + 4} width={30} height={30} viewBox={`0 0 30 30` } fill="blue" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="#A7D28B" className='path'/>
    </svg>
  );
};


const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};
// const renderLabel = function(entry) {
//   return entry.name;
// }

const renderBarChart = (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" tick={renderCustomAxisTick} />
    <YAxis />
    <Bar dataKey="uv" barSize={30} fill="#8884d8"
      label={renderCustomBarLabel}/>
  </BarChart>
);


export default function Login() {

    return renderBarChart;
}