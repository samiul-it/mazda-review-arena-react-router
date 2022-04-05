import React from 'react';
import useData from './../../hooks/useData';

const Dashboard = () => {
    const [data,setData]=useData();
    return (
        <div>
            <h5>Welcome to Dashboard</h5>
            {data.length}

        </div>
    );
};

export default Dashboard;