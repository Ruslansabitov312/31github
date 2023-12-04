import {useState} from 'react';
import cls from './App.module.scss'

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    return (
        <div>
            <h1 className={cls.Value}>{count}</h1>
            <button className={cls.Button} onClick={increment}>click</button>
        </div>
    );
};
