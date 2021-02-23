import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function CartButtons({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));
  return (
    <>
      <button
        onClick={add}
        className="btn btn-success"
      >Add to card</button>
      &nbsp;
      <button
        onClick={remove}
        className="btn btn-danger"
      >Remove</button>
    </>
  );
}

export default CartButtons;