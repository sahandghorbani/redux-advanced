import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const countItemHandler = (mode, key) => {
    if (mode === "inc") {
      dispatch(cartActions.addItemToCart({ itemIndex: key }));
    } else {
      dispatch(cartActions.removeItemToCart({ itemIndex: key }));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        {props.items.map((item) => (
          <div key={item.id} className={classes.item}>
            <p> {item.title}</p>
            <p className={classes.quantity}>Quantity: {item.quantity}</p>
            <p className={classes.itemprice}>Price: {item.price}</p>
            <div className={classes.actions}>
              <button onClick={() => countItemHandler("dec", item.id)}>-</button>
              <button onClick={() => countItemHandler("inc", item.id)}>+</button>
            </div>
          </div>
        ))}
      </header>
      <div></div>
    </li>
  );
};

export default CartItem;
