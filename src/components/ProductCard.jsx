import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id);

    const productQuantityLabel = productInCart ? ` (${productInCart.quantity})` : "";
    return (
        <div className="product-card">
              <img src={product.thumbnail} className="product-card-image" alt={product.title} />
              <div className="product-card-content">
                <h3 className="product-card-name">{product.title}</h3>
                <p className="product-card-price">{product.price} kr</p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                    <button className="btn btn-primary"
                    onClick={() => addToCart(product)}>
                    Add to Cart {productQuantityLabel}
                    
                    </button>
                
                </div>
              </div>
            </div>  
    )
}