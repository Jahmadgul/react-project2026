import { useCart } from "../context/CartContext";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
    const {getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart} = useCart();
    const cartItems = getCartItemsWithProducts();
    const cartTotal = getCartTotal();
    const debounceTimers = useRef({});

    function handleQuantityChange(itemId, newQuantity) {
        clearTimeout(debounceTimers.current[itemId])
        debounceTimers.current[itemId] = setTimeout(() => {
            updateQuantity(itemId, newQuantity)
        }, 300)
    }

    function placeOrder() {
        alert("Order placed successfully!");
        clearCart();
    }

    return (
      <div className="page">
        <div className="container">
            <h1 className="page-title">Checkout</h1>
            <div className="checkout-container">
                <div className="checkout-items">
                    <h2 className="checkout-section-title">Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="checkout-item">
                            <div className="checkout-item-info">
                                <img src={item.thumbnail} className="product-card-image" alt={item.title} />
                                <h3 className="checkout-item-name">{item.title}</h3>
                                <p className="checkout-item-price">{item.price} kr</p>
                                <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
                            </div>
                            <div className="checkout-item-controls">
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                        -
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                        +
                                    </button>
                                </div>
                                <p className="checkout-item-total">Total: {(item.price * item.quantity).toFixed(2)} kr</p>
                                <button className="btn btn-secondary btn-small" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>    
                        </div>
                    ))}
                </div>
                <div className="checkout-summary">
                    <h2 className="checkout-section-title">Total</h2>
                    <div className="checkout-total">
                        <p className="checkout-total-label">Subtotal:</p>
                        <p className="checkout-total-value">{cartTotal.toFixed(2)} kr</p>
                    </div>
                    <div className="checkout-total">
                        <p className="checkout-total-label">Total</p>
                        <p className="checkout-total-value checkout-total-final">{cartTotal.toFixed(2)} kr</p>  

                    </div>
                    <button className="btn btn-primary btn-large btn-block" onClick={placeOrder}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>    
      </div>  
    );
}