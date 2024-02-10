import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

import Header from "./components/Header/Header";
import ProductList from "./components/Content/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/categorias")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove produto do carrinho (se necessário)
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  console.log('PIMBA2',searchTerm)

  const filteredProducts = products.filter((product) => {

    console.log('PIMBA',product)
    if (selectedCategory && product?.category !== selectedCategory) {
      return false;
    }
    if (
      searchTerm &&
      !product?.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="App">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        handleSearchChange={handleSearchChange}
        ProductCart={cart}
      />

      <ProductList  products={filteredProducts} addToCart={addToCart}/>
    </div>
  );
};

export default App;
