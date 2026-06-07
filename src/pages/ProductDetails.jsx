import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, cartItems } = useCart();

    const productInCart = cartItems.find((item) => item.id === product?.id);
    const productQuantityLabel = productInCart ? ` (${productInCart.quantity})` : "";

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                if (!res.ok) throw new Error('Network error')
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                setError('Could not load product')
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    if (!product) return <p>Product not found</p>

    return (
        <div className="page">
            <div className="container">
                <div className="product-detail">
                <div className="product-detail-image">
                <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-detail-content">
                <h1 className="product-detail-name">{product.title}</h1>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">{product.price} kr</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart {productQuantityLabel}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
