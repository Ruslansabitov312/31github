import {useState} from 'react';
import cls from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    return (
        <div>
            <div className={cls.Navbar}>
                <Link to={'/about'}>About</Link>
                <Link to={'/shop'}>Shop</Link>
            </div>
            <h1 className={cls.Value}>{count}</h1>
            <button className={cls.Button} onClick={increment}>click</button>
            <Outlet />
        </div>
    );
};
