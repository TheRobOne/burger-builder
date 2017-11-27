import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import React from 'react';

import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredietns = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(transformedIngredietns.length === 0) {
        transformedIngredietns = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredietns}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;