import React from 'react';
import useData from './../../hooks/useData';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {AreaChart,Area} from "recharts";
import {BarChart,Bar,Legend} from "recharts";
import { PieChart, Pie } from "recharts";
import './Dashboard.css';



const Dashboard = () => {
    
    const [data,setData]=useData();
    const renderLineChart = (
      
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="investment" stroke="#e34616" />
          <CartesianGrid stroke="#2acb0ea5" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      
    );

    const renderAreaChart = (
      <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="investment" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#d3186f" />
      </AreaChart>
    );

    const renderBarchart = (
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#aaa823" />
        <Bar dataKey="revenue" fill="#06ac96" />
      </BarChart>
    );

    const renderPieChart = (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#2727c9"
        />
        <Pie
          data={data}
          dataKey="sell"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#21ce63"
          label
        />
      </PieChart>
    );




    return (
      <div>
        <h5>Welcome to Dashboard</h5>
        {/* {data.length} */}
        <div className="chart-container">
            {renderLineChart}
            {renderAreaChart}
            {renderBarchart}
            {renderPieChart}

        </div>
      </div>
    );
};

export default Dashboard;