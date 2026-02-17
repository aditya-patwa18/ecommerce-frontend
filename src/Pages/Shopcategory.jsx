import React, { useContext, useState, useEffect } from 'react';
import '../Pages/css/Shopcategory.css';
import { Shopcontext } from '../Context/Shopcontext';
import drop_down from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/product/Item";

const Shopcategory = (props) => {
  const { all_product } = useContext(Shopcontext);
  const [sortBy, setSortBy] = useState('default');
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter products by category
  const filteredProducts = all_product.filter(product =>
    props.category === product.category
  );

  // Sort products
  const getSortedProducts = () => {
    let sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => parseFloat(a.new_price) - parseFloat(b.new_price));
      case 'price-high':
        return sorted.sort((a, b) => parseFloat(b.new_price) - parseFloat(a.new_price));
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  };

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' }
  ];

  const handleSortChange = (value) => {
    setSortBy(value);
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".sort-container")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const sortedProducts = getSortedProducts();
  const currentLabel = sortOptions.find(option => option.value === sortBy)?.label || 'Default';

  return (
    <div className="shop-category">
      {/* Banner */}
      <div className="banner-container">
        <img className="shop-banner" src={props.banner} alt="Category Banner" />
        <div className="banner-overlay">
          <h1 className="category-title">{props.category?.toUpperCase()}</h1>
        </div>
      </div>

      {/* Index + Sort */}
      <div className="shopcategory-index">
        <div className="product-count">
          <p className="count-text">
            <span className="highlight-text">
              Showing 1-{Math.min(visibleCount, sortedProducts.length)}
            </span>
            <span className="total-text"> of {sortedProducts.length} products</span>
          </p>
        </div>

        <div className="sort-container">
          <div
            className={`shopcategory-sort ${showDropdown ? 'active' : ''}`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="sort-label">Sort by:</span>
            <span className="sort-value">{currentLabel}</span>
            <img
              src={drop_down}
              alt="Dropdown"
              className={`dropdown-icon ${showDropdown ? 'rotated' : ''}`}
            />
          </div>

          {showDropdown && (
            <div className="sort-dropdown">
              {sortOptions.map(option => (
                <div
                  key={option.value}
                  className={`sort-option ${sortBy === option.value ? 'selected' : ''}`}
                  onClick={() => handleSortChange(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="products-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.slice(0, visibleCount).map((product) => (
              <div key={product.id} className="product-card-wrapper">
                <Item
                  id={product.id}
                  name={product.title}
                  image={product.image}
                    new_price={product.new_price}
                    old_price={product.old_price}
                />
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < sortedProducts.length && (
          <div className="load-more-section">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount(prev => prev + 12)}
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shopcategory;
