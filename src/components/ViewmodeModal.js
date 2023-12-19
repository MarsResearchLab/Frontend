import "./ViewmodeModal.css"


function ViewmodeModal(props) {

    return (
        <div className="viewmode-modal">
            <div className="viewmode-modal-li1"
                onClick={props.handleClick}
                style={{ color: props.viewmode == 0 ? "#FFFFFF" : "#DD6532", backgroundColor: props.viewmode != 0 ? "#FFFFFF" : "#FF9F6D" }}>
                전체종목
            </div>
            <div className="viewmode-modal-li2"
                onClick={props.handleClick}
                style={{ color: props.viewmode == 1 ? "#FFFFFF" : "#DD6532", backgroundColor: props.viewmode != 1 ? "#FFFFFF" : "#FF9F6D" }}>
                북마크
            </div>
        </div>
    )
}


export default ViewmodeModal;