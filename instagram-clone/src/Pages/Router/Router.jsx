import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import HomePage from '../HomePage/HomePage';

const Router = () => { 
    return (
        <div>
            <div className = 'flex'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        <Route path = "/" element = {<HomePage />} />
                        {/* <Route path = '/explore' element = {<Explore />} />
                        <Route path = '/notifications' element = {<Notifications />} />
                        <Route path = '/messages' element = {<Messages />} />
                        <Route path = '/profile' element = {<Profile />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router;