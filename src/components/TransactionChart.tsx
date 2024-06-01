import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [

  {
    name: "nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "nov",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "abc",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "abc",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "abc",
    Expense: 2390,
    Income: 3800
  },
  {
    name: "abc",
    Expense: 2390,
    Income: 3800
  },
];
export default function TransactionChart() {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-300 flex flex-col flex-1'>
      <strong className='text-gray-700 font-medium'>Transactions</strong>
      <div className='w-full mt-3 flex-1 text-xs'>
        <ResponsiveContainer width="100%" height="100%" className="min-h-[20rem]">
          <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#8884d8" />
            <Bar dataKey="Expense" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
