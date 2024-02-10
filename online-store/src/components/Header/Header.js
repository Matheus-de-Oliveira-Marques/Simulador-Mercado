import React from "react";

import "./style.css";
import MiniCart from "./components/MiniCart/MiniCart";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import SearchIcon from '@mui/icons-material/Search';



const Header = ({
  categories,
  selectedCategory,
  handleCategoryClick,
  handleSearchChange,
  ProductCart
}) => {

  return (
    <div>
      <div className="MiniHeader">
        <p className="textMiniHeader">Comprar nunca ficou tão facil!</p>{" "}
      </div>

      <header className="Header">
        <div className="LogoStore" />
        <CategoryMenu
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <div className="DivSearch">

        <input
          type="text"
          className="SearchImput"
          placeholder="Buscar"
          onChange={handleSearchChange}
    
        /> 
        <SearchIcon/>

        </div>

        <MiniCart ProductCart={ProductCart} />
      </header>
    </div>
  );
};

export default Header;
