import React, { useState } from 'react';
import logo from "../assets/logo.png"
import downarrow from "../assets/down-arrow.svg"
import search from "../assets/search.svg"
import kakaologo from "../assets/kakao_logo.png"
import "./TopBar.css"


function TopBar(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const viewmodeList = ["전체종목", "북마크"];

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (typeof props.onSearch === 'function') {
            props.onSearch(searchKeyword);
        }
    };

    return (
        <div className="topbar">
            <img src={logo} alt="Logo" className="topbar-logo"></img>
            <div className="topbar-viewmode" onClick={props.handleClick}>{viewmodeList[props.viewmode]}</div>
            <img src={downarrow} alt="Down Arrow" onClick={props.handleClick} className="topbar-downarrow"></img>
            <div className="topbar-search">
                <img src={search} alt="Search" />
                <input type="text" placeholder="검색어 입력" value={searchKeyword} onChange={handleSearchChange} />
                <button type="submit">검색</button>
            </div>
            <div className="topbar-login">Login with</div>
            <img src={kakaologo} alt="Kakao Logo" className="topbar-kakaologo"></img>
        </div>
    )
}


export default TopBar;