import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminPage from '../pages/AdminPage/AdminPage';
import UsersHeader from '../components/UsersHeader';

function UserLayout() {
    const [activeTab, setActiveTab] = useState("grid");

    return (
        <div className='adminka'>
            <UsersHeader activeTab={activeTab} />
            <AdminPage activeTab={activeTab} setActiveTab={setActiveTab} />
            <Outlet />
        </div>
    );
}

export default UserLayout;
