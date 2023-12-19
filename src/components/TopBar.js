import logo from "../assets/logo.png"
import downarrow from "../assets/down-arrow.svg"
import search from "../assets/search.svg"
import kakaologo from "../assets/kakao_logo.png"
import "./TopBar.css"


function TopBar(props) {

    const viewmodeList = ["전체종목", "북마크"];

    return (
        <div className="topbar">
            <img src={logo} className="topbar-logo"></img>
            <div className="topbar-viewmode" onClick={props.handleClick}>{viewmodeList[props.viewmode]}</div>
            <img src={downarrow} onClick={props.handleClick} className="topbar-downarrow"></img>
            <div className="topbar-search">
                <img src={search} />
                <input type="text" placeholder="검색어 입력" />
            </div>
            <div className="topbar-login">Login with</div>
            <img src={kakaologo} className="topbar-kakaologo"></img>
        </div>
    )
}


export default TopBar;