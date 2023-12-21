import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function StockDetailPage() {
    const [stockDetail, setStockDetail] = useState(null);
    const { stockId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.marsresearchlab.com:8080/api/stocks/${stockId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStockDetail(data);
            } catch (error) {
                console.error('Fetching error:', error);
            }
        };

        fetchData();
    }, [stockId]);

    const requestPrediction = async () => {
        try {
            const response = await fetch(`http://api.marsresearchlab.com:8080/stocks/prediction/${stockId}`, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Prediction request failed');
            }

            await response.json();
            // 요청 성공 후 처리. 예를 들어, 페이지를 새로고침하거나 알림을 표시할 수 있음
            alert('예측 요청이 성공적으로 처리되었습니다.');
            // 페이지 새로고침 또는 stockDetail 상태 업데이트
            // window.location.reload();
        } catch (error) {
            console.error('Error during prediction request:', error);
            alert('예측 요청 중 오류가 발생했습니다.');
        }
    };

    const getBusinessDays = (startDate, days, isPast) => {
        let result = [];
        let counter = days;
        let date = new Date(startDate);
        if (!isPast) {
            // 오늘 포함 이후 날짜 계산시
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                result.push(new Date(date));
                counter--;
            }
        }
        while (counter > 0) {
            date.setDate(date.getDate() + (isPast ? -1 : 1));
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                result.push(new Date(date));
                counter--;
            }
        }
        return result;
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    };


    const calculateExpectedReturn = () => {
        if (stockDetail && stockDetail.next5DaysPredictions.length > 0) {
            const firstDayPrice = stockDetail.next5DaysPredictions[0];
            const lastDayPrice = stockDetail.next5DaysPredictions[stockDetail.next5DaysPredictions.length - 1];
            const returnPercentage = ((lastDayPrice - firstDayPrice) / firstDayPrice) * 100;
            return returnPercentage.toFixed(2); // 소수점 둘째 자리까지 표시
        }
        return null;
    };

    const pastDates = getBusinessDays(new Date(), 12, true).map(formatDate).reverse();
    const futureDates = getBusinessDays(new Date(), 5, false).map(formatDate);

    const chartData = stockDetail ? {
        labels: [...pastDates, ...futureDates],
        datasets: [
            {
                label: 'Last 15 Days Prices',
                data: stockDetail.last15DaysPrices,
                fill: false,
                borderColor: 'black',
                tension: 0.1
            },
            {
                label: 'Next 5 Days Predictions',
                data: [...Array(pastDates.length).fill(null), ...stockDetail.next5DaysPredictions],
                fill: false,
                borderColor: 'red',
                tension: 0.1
            }
        ]
    } : {};

    const expectedReturn = calculateExpectedReturn();

    if (!stockDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2> 종목명: {stockDetail.name} <br>
            </br>종목코드: {stockDetail.code}</h2>
            {expectedReturn && <h3>5일 후 예상 수익률: {expectedReturn}%</h3>}
            {!stockDetail.predicted && (
                <button onClick={requestPrediction}>예측 요청</button>
            )}
            <Line data={chartData} />
        </div>
    );
}

export default StockDetailPage;
