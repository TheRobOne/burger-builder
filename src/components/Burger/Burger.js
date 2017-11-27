import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import React from 'react';

import classes from './Burger.css';

const burger = (props) => {
    const transformedIngredietns = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredietns}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;