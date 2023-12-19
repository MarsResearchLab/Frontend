import logo from "../assets/logo.png"
import downarrow from "../assets/down-arrow.svg"
import search from "../assets/search.svg"
import kakaologo from "../assets/kakao_logo.png"
import "./TopBar.css"
import { useState } from "react"


function TopBar() {

    const [viewmode, setViewmode] = useState(0);
    const viewmodeList = ["전체종목", "북마크"];

    return (
        <div className="topbar">
            <img src={logo} className="topbar-logo"></img>
            <div className="topbar-viewmode">{viewmodeList[viewmode]}</div>
            <img src={downarrow} className="topbar-downarrow"></img>
            <div class="topbar-search">
                <img src={search} />
                <input type="text" placeholder="검색어 입력" />
            </div>
            <div className="topbar-login">Login with</div>
            <img src={kakaologo} className="topbar-kakaologo"></img>
        </div>
    )
}

export default TopBar;