import React from 'react'
import {Link, Outlet} from "react-router-dom";
import { adminRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => {
    return (
        <div data-testid={'app-wrapper'}>
            <h1>HOST CONTAINER</h1>
            <Link to={adminRoutes.about}>ABOUT</Link>
            <br/>
            <Link to={shopRoutes.main}>SHOP</Link>
            <Outlet />
        </div>
    );
};
