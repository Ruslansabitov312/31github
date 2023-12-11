import React from 'react';
import { shopRoutes } from '@packages/shared/src/routes/shop';
import {Link} from "react-router-dom";

const Shop = () => {
    return (
        <div>
            SHOP
            <div>
                <Link to={shopRoutes.second}>GO to SecondPage</Link>
            </div>
        </div>
    );
};

export default Shop;