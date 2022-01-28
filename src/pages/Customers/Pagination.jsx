import React from "react";

const Pagination = ({
  customerPerPage,
  totalPosts,
  paginate,
  handleNextbtn,
  handlePrevbtn,
  minPageNumberLimit,
  maxPageNumberLimit,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / customerPerPage); i++) {
    pageNumbers.push(i);
  }
  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <nav className="pagination-nav">
      <ul>
        <li className="pre">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            &laquo;
          </button>
        </li>
        {pageDecrementBtn}
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
       return   <li
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active-page" : "page-numbers"}
          >
            {number}
          </li>
            
          }else{
            return null;
          }
        })}
        {pageIncrementBtn}

        <li className="next">
          <button
            onClick={handleNextbtn}
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
