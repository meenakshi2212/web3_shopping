import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <nav className="navbar">
        <h1>Web3 Shopping Cart</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </nav>
      
      <div className="store-header">
        <h1>Store</h1>
        <p>Buy with web3 wallet!</p>
      </div>

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <button className="add-to-cart">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App