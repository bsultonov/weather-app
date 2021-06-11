import React from 'react';
import './WeatherCard.css';

const WheatherCard = ({ image, weekDay, dayDegree, nightDegree }) => {
    return(
        <div className="Weather__card">
            <div>
                <h1 className="Weather__title">
                    {weekDay}
                </h1>
            </div>
            <div className="Image__container">
                <img className="Weather__img" src={image} />
            </div>
            <div>
                <p className="Weather__degrees">
                    {dayDegree} <span>{nightDegree}</span>
                </p>
            </div>
        </div>
    );
}

export default WheatherCard;