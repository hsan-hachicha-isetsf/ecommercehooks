import React from 'react'
import { Link } from 'react-router-dom'
import "./article.css"
const Headerarticle = ({searchText,handleSearchChange}) => {
  return (
    <div className="table-container-header">
  <button className="new">
    <Link to="/articles/add" style={{ textDecoration: 'none', color: 'inherit' }}>
      <i className="fa-solid fa-plus-square"></i> Nouveau
    </Link>
  </button>
  <div className="search-container">
            <i className="fa-solid fa-search"></i>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Rechercher des articles..."
              className="search-input"
            />
          </div>
        
</div>
  )
}

export default Headerarticle
