import React, { Component } from "react";

const Pagination = props => {
  let records = props.records;
  let totalCount = records.length;

  let offset = props.offset;
  let limit = props.limit;
  // let selectedPage = props.selectedPage;
  let selectedPage = Math.floor(offset / limit) + 1;

  let totalPages = totalCount / limit;
  records = records.slice(offset, limit + offset);

  var pages = [];
  for (let index = 0; index < totalPages; index++) {
    pages.push(
      <li
        key={index}
        className={
          selectedPage === index + 1 ? "page-item active" : "page-item"
        }
      >
        <a
          href="#"
          className="page-link"
          onClick={() => props.onPageChange(index)}
        >
          {index + 1}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li> */}
        {pages}
        {/* <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
