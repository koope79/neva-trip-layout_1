import React, { useState } from 'react';
import "./TripCard.scss";
import clock_icon from "../../assets/img/clock.svg";
import ruble_icon from "../../assets/img/ruble.svg";

export const TripCard = ({ img, title, banner, timeIntervals, price, isOnDock}) => {
    const [moreTimes, setMoreTimes] = useState(false);

    const intervalTimes = timeIntervals.map((time, index) => <div key={index} className='timeInterval'><p>{time}</p></div>);
    
    return (
        <div className='trip_card'>
            <div className='imgBlock'>
                <img src={img} alt="-" />
                <div className='imgBlock__banner' style={{background: banner.color}}><p>{banner.logo}</p></div>
            </div>
            <div className='content'>
                <div className='timeTrip'>
                    <img src={clock_icon} alt="-" />
                    <span>2 часа</span>
                </div>
                <div className='title'><p>{title}</p></div>
                <div className='description'>
                    <ul>
                        <li>Билет на целый день</li>
                        <li>Неограниченное число катаний</li>
                        <li>6 остановок у главных достопримечательностей</li>
                        <li>Ближайший рейс сегодня
                            {intervalTimes.length > 4 && !moreTimes
                            ? <div className='timeIntervalContent'>{intervalTimes.slice(0,2)}
                                <div className='timeInterval' onClick={() => setMoreTimes(status => !status)}>ещё...</div>
                            </div>
                            : moreTimes ? <div className='timeIntervalContent'>{intervalTimes}</div>
                            : <div className='timeIntervalContent'>{intervalTimes}</div>
                            }
                        </li>                        
                    </ul>
                </div>
                <div className='price'>
                    <div className='currentPrice'>
                        <p>{price} <img src={ruble_icon} alt="-"/></p>
                        {isOnDock ? <p className='dockPrice'>1200 ₽ на причале</p> : null}
                    </div>
                    <div className='buttonInfo'>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}