import React from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";

// installed 'lodash' and 'prop-types' libraries

const Pagination = props => {
    const { pageSize, currentPage, itemsCount, onPageChange } = props;

    let pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null; // Don't show pagination if there is only 1 page

    let pages = _.range(1, pagesCount + 1); // lodash.range doesn't include last number, so add 1 to make sure last page count

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        key={page}
                        className={
                            page === currentPage
                                ? "page-item active"
                                : "page-item"
                        }
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
