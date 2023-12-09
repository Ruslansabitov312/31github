import {useState} from 'react';
import cls from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import flagKgz from '@/assets/kgz.png'
import bishkek from '@/assets/Bishkek.jpg'
import SvgLogo from '@/assets/svglogo.svg'

// TREE SHAKING - функция, до тех пор пока она была не использована она в итоговый бандл не попадала.
// Как только мы заиспользовали внутри кода, webpack понял и включил в главный бандл
function TODO() {
    TODO2()
}

function TODO2() {
    throw new Error()
}

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        TODO()
    }

    // // TREE SHAKING
    // TODO(1234)
    //
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    //
    // if(__ENV__) {
    //     // addDevtools() from example
    // }


    return (
        <div data-testid={'app-wrapper'}>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div className={cls.ImgWrapper}>
                <img width={350} height={200} src={flagKgz} alt="flag" />
                <img width={350} height={200} src={bishkek} alt="bishkek" />
                <SvgLogo width={350} height={200} fill={'red'} style={{color: 'yellow'}} />
            </div>
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
