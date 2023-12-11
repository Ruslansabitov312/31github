import React from 'react'
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div data-testid={'app-wrapper'}>
            <h1>HOST CONTAINER</h1>
            <Link to={'/about'}>ABOUT</Link>
            <br/>
            <Link to={'/shop/main'}>SHOP</Link>
            <Outlet />
        </div>
    );
};
