import { useState, useEffect } from 'react'
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        if (!res.ok) throw new Error('Network error')
        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        setError('Could not load products')
      }
    }
    fetchProducts()
  }, [])

  if (error) return <p>{error}</p>

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Allshop</h1>
        <p className="home-subtitle">
          Discover the best products at the lowest prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}