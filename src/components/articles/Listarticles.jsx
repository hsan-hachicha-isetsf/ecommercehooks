import React, { useEffect, useState } from 'react'
import {fetcharticlesPagination} from "../../services/articleservice"



import "./article.css"
const Listarticles = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  
  const fetchProducts = async (page) => {
    try {
      const res = await fetcharticlesPagination(page,5)
      
      setArticles(res.data.products);
      setTotalPages(res.data.totalPages);
      console.log(res.data.products)
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(() => {
    
    fetchProducts(currentPage);
  }, [currentPage]);

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


  return (
    <div className="table-container">
      
<table >

<thead>
<tr>
    <th >Image</th>
    <th>Référence</th>
    <th>Désignation</th>
    <th>Marque</th>
    <th>Quanité</th>
    <th>Prix</th>
    <th>Modifier</th>
    <th>Supprimer</th>
</tr>
</thead>
<tbody>
    {
        articles.map((art,index)=>
        <tr key={index}>
            <td><img src ={art.imageart} width={80} height={80} /></td>
            <td>{art.reference}</td>
            <td>{art.designation}</td>
            <td>{art.marque}</td>
            <td>{art.qtestock}</td>
            <td>{art.prix}</td>
            <td><button className='edit'>
            <i className="fa-solid fa-pen-to-square"></i>Update</button></td>

            <td><button className="delete" >
        
            <i class="fa-solid fa-trash"></i>
            
            
             Delete</button></td>

        </tr>
        )}

</tbody>
<tfoot>
            <tr>
                <td colspan="8">
                  
                  
                <label>
                    Afficher
                    <select
                      value={4}
                     
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={100}>100</option>
                    </select>
                    éléments par page
                  </label>
                  Fin du tableau</td>

            </tr>
        </tfoot>
</table>
<div className="pagination">
      {/* Pagination controls */}
      <button onClick={()=>handlePrevPage()} disabled={currentPage === 1}
        
        >
      Previous
      </button>
     
        {Array.from({ length: totalPages }, (_, index) => (
          <button
         
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage === index + 1 ? 'page-link active' : ''}
          >
            {index + 1}
          </button>
        ))}
     
      <button onClick={()=>handleNextPage()} disabled={currentPage === totalPages}>
        
        Next
      </button>
      </div>
    
    </div>
  
  )
}

export default Listarticles
