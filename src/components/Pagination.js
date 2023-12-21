// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, onChange }) => {
    return (
        <div className="pagination">
            <button onClick={() => onChange(Math.max(0, currentPage - 1))} disabled={currentPage === 0}>이전</button>
            <span>페이지 {currentPage + 1}</span>
            <button onClick={() => onChange(currentPage + 1)}>다음</button>
        </div>
    );
};

export default Pagination;
