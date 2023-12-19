import './MainPage.css'
import TableRow from '../components/TableRow'
import TableHeader from '../components/TableHeader';

function MainPage() {

    const list = [{ "id": 1, "code": "ABC", "name": "삼성전자", "price": 100000 },
    { "id": 2, "code": "ABC", "name": "삼성전자", "price": 100000 },
    { "id": 3, "code": "ABC", "name": "삼성전자", "price": 100000 },
    { "id": 4, "code": "ABC", "name": "삼성전자", "price": 100000 },
    { "id": 5, "code": "ABC", "name": "삼성전자", "price": 100000 }];

    return (
        <div className="main-page">
            <div className="main-page-table">
                <div className="main-page-table-amount">총 8개</div>
                <TableHeader row={{ "id": "ID", "code": "종목코드", "name": "종목명", "price": "종가" }}></TableHeader>
                {
                    list.map((row, idx) => (
                        <TableRow row={row}></TableRow>
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage;