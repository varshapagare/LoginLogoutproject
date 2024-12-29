
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProduct';
import AllProductList from './Allproduct';
import SearchProduct from './SearchProduct';


const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/');
    }

    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
    setFilteredProducts(savedProducts);
  }, [navigate]);

  const handleSearch = (query) => {
    if (query) {
      setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
      <AddProductForm setProducts={setProducts} products={products} />
      <SearchProduct onSearch={handleSearch} />
      <AllProductList products={filteredProducts}  />
    </div>
      
  );
};

export default HomePage;