import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PieCharts from "../../components/PieChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="pt-5 px-[25px] bg-[#f8f9fc]">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Dashboard</h1>

        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm  text-gray-700 hover:text-blue-600 "
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        <div className="h-[100px] rounded-[8px] bg-white border-s-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Doanh thu
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <i className="fa-solid fa-money-bill-wave text-[28px]"></i>
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-s-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Doanh thu
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <i className="fa-solid fa-money-bill-wave text-[28px]"></i>
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-s-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Doanh thu
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <i className="fa-solid fa-money-bill-wave text-[28px]"></i>
        </div>
        <div className="h-[100px] rounded-[8px] bg-white border-s-[4px] border-[#4e73df] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Doanh thu
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <i className="fa-solid fa-money-bill-wave text-[28px]"></i>
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px] ">
          <div className="bg-[#f8f9fc] py-[15px] px-[25px] border-b-[1px] border-[#ededed] mb-[20px] flex justify-between items-center">
            <h2>Earnings Overview</h2>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div>
            <LineChart
              width={750}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#f8f9fc] py-[15px] px-[25px] border-b-[1px] border-[#ededed] mb-[20px] flex justify-between items-center">
            <h2>Revenue Resources</h2>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div>
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
