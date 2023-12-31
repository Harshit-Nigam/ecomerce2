import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";

import "./Cart.scss";
const Cart = ({setShowCart}) => {
    return (
    <div className="cart-pannel">
        <div className="opac-layer"></div>
        <div className="cart-content">
           <div className="cart-header">
            <span className="heading">Shoping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false) }>
                <MdClose />
                <span className="text">close</span>
            </span>
           </div>

           {/* <div className="empty-cart">
            <BsCartX />
            <span>No Product In The Cart</span>
            <button className="return-btn">Return To Shop</button>
           </div> */}

           <>
           <CartItem />
           <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;61565</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
           </div>
           </>
        </div>

    </div>
    );
};

export default Cart;
