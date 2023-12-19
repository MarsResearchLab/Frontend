import "./TableRow.css"


function TableRow(props) {

    var data = props.row;

    return (
        <div className="tablerow">
            <div className="tablerow-id">
                {data.id}
            </div>
            <div className="tablerow-code">
                {data.code}
            </div>
            <div className="tablerow-name">
                {data.name}
            </div>
            <div className="tablerow-price">
                {data.price}
            </div>
        </div>
    )
}


export default TableRow;