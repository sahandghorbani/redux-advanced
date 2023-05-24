import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import {uiActions} from '../../store/ui-slice'

const CartButton = (props) => {
  const {totalCount , totalPrice} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(uiActions.toggle())
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
      <span className={classes.badge}>{totalPrice}</span>
    </button>
  );
};

export default CartButton;
