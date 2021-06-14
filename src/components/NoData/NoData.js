import React from 'react'

import './NoData.css';
import NoDataImg from '../../assets/images/nodata.png'

const NoData = ({message}) => {
    return (
        <div>
            <img className="nodata__image" src={NoDataImg} alt={message} />
            <h2 className="center">{message}</h2>
        </div>
    )
}

export default NoData
