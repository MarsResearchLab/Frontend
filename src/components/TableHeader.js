import React from 'react';
import "./TableHeader.css"


function TableHeader(props) {

    var data = props.row;

    return (
        <div className="tableheader">
            <div className="tableheader-id">
                {data.id}
            </div>
            <div className="tableheader-code">
                {data.code}
            </div>
            <div className="tableheader-name">
                {data.name}
            </div>
            <div className="tableheader-price">
                {data.price}
            </div>
        </div>
    )
}


export default TableHeader;