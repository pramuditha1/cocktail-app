import React from 'react'
import classes from './Item.module.css'

function CartItem(props) {
    // const price = `$${props.item.price.toFixed(2)}`;
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.item.category}</span>
                    {/* <span className={classes.amount}>{ props.item.category }</span> */}
                    <img src={props.item.image} alt={props.item.image} />
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem