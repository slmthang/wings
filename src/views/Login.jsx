
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2100, amt: 2100}];
const renderCustomAxisTick = ({ x, y, payload }) => {
  let path = '';

  switch (payload.value) {
    case 'Page A':
      path = 'M5.625 40H14.0625V25H30.9375V40H39.375V17.5L22.5 6.25L5.625 17.5V40ZM0 45V15L22.5 0L45 15V45H25.3125V30H19.6875V45H0Z'
      break;
    case 'Page B':
      path = 'M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z';
      break;
    default:
      path = '';
  }

  return (
    <svg x={x - 12} y={y + 4} width={24} height={24} viewBox="0 0 1000 1000" fill="blue" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="#A7D28B"/>
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