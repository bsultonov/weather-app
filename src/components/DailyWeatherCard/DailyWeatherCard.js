import React from 'react';

import './DailyWeatherCard.css';

const DailyWeatherCard = ({ image, altText, weekDay, maxTemp, minTemp, onCardClick }) => {
    
    return(
        <div onClick={onCardClick} className="weather__card">
            <div>
                <h2 className="weather__title">
                    {weekDay}
                </h2>
            </div>
            <div className="image__container">
                <img className="weather__img" src={image} alt={altText} />
            </div>
            <div>
                <p className="weather__degrees">
                    {maxTemp}&deg;C / <span>{minTemp}&deg;C</span>
                </p>
            </div>
        </div>
    );
}

export default DailyWeatherCard;