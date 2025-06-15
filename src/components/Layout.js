import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from './BackButton';

const Layout = () => {
    return (
        <div>
            <header>
                <BackButton />
            </header>
            <main>
                {/* O Outlet renderiza o componente da rota filha aqui */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;