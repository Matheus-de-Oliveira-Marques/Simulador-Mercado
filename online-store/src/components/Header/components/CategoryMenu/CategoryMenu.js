import React from 'react'

import './style.css'

const CategoryMenu = ({ categories, selectedCategory, handleCategoryClick }) => {

  console.log('selectedCategory',selectedCategory)

  console.log('categories',categories)

  return (
    <div className="CategoryMenu">
      <ul>
      {categories.map(category => (
          <li key={category?.id}>
            <button  className='LinkMenu' onClick={() => handleCategoryClick(category)}>{category?.nome}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryMenu;
