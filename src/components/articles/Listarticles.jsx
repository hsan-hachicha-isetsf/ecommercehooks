import React, { useEffect, useState } from 'react'
import {fetcharticlesPagination} from "../../services/articleservice"

import "./article.css"
import Affichearticle from './Affichearticle';
import Pagination from './Pagination';

import Headerarticle from './Headerarticle';
const Listarticles = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const [limit, setLimit]=useState(5)
  const [searchText, setSearchText] = useState('');
  const fetchProducts = async (page,limit,searchText) => {
    try {
      const res = await fetcharticlesPagination(page,limit,searchText)
     
      setArticles(res.data.products);
      setTotalPages(res.data.totalPages);
      console.log(res.data.products)
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(() => {
   
    fetchProducts(currentPage,limit,searchText);
  }, [currentPage,limit,searchText]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setCurrentPage(1);  
  };
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);  
  };
  return (
    <div>
      <Headerarticle searchText={searchText}
      handleSearchChange={handleSearchChange}/>
      <Affichearticle articles={articles} handleLimitChange={handleLimitChange} limit={limit}/>
      <Pagination handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
      currentPage ={currentPage }
      />
    </div>
 
  )
}

export default Listarticles
