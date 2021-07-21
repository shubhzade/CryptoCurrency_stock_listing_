import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, handleClick }) => {
  //array with value until 0-19 pages
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  //now it give 20
  console.log(pages);
  return (
    <div className="pagin_botom">
      <div className="pagin_left">
        {pages.map((num) => (
          <button className="btn" keys={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
