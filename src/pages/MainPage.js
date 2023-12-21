import React, { useState, useEffect } from 'react';
import './MainPage.css';
import TableRow from '../components/TableRow';
import TableHeader from '../components/TableHeader';
import Pagination from '../components/Pagination';

function MainPage() {
    const [stocks, setStocks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://api.marsresearchlab.com:8080/api/stocks';
                if (searchKeyword) {
                    url += `/search?keyword=${encodeURIComponent(searchKeyword)}&size=10`;
                }
                else {
                    url += `?page=${currentPage}&size=10`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Fetching error:', error);
            }
        };

        fetchData();
    }, [currentPage, searchKeyword]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
    };


    return (
        <div className="main-page">
            <div className="main-page-table">
                <div className="main-page-table-amount">{stocks.length}개</div>
                <TableHeader row={{ "id": "ID", "code": "종목코드", "name": "종목명", "price": "가격" }} />
                {
                    stocks.map((row, idx) => (
                        <TableRow key={row.id} row={row} />
                    ))
                }
            </div>
            <Pagination 
                currentPage={currentPage} 
                onChange={setCurrentPage} 
            />
        </div>
    );
}

export default MainPage;
