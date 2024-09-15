import React from 'react';
import Navbar from '../components/NavBar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
