// TableRow.js
import React from 'react';
import "./TableRow.css"
import { useNavigate } from 'react-router-dom';

function TableRow({ row }) {
  const navigate = useNavigate();

  const goToStockDetail = () => {
    navigate(`/stocks/${row.id}`);
  };

  return (
    <div className="tablerow">
      <div className="tablerow-id">{row.id}</div>
      <div className="tablerow-code">{row.code}</div>
      <div className="tablerow-name" onClick={goToStockDetail}>{row.name}</div>
      <div className="tablerow-price">{row.latestClosingPrice}</div>
    </div>
  );
}

export default TableRow;
