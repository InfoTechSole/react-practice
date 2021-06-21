import React, { Component } from "react";

const Pagination = props => {
  let records = props.records;
  let totalCount = records.length;
  let itemsPerPage = props.itemsPerPage;

  let totalPages = totalCount / itemsPerPage;
  records.slice(0, itemsPerPage);

  var pages = [];
  for (let index = 0; index < totalPages; index++) {
    pages.push(
      <li className="page-item">
        <a href="#" className="page-link">
          {index + 1}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
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
