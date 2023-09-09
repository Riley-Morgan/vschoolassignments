import React from 'react'


export default function Spot(props) {
    let moneyType
    if (props.price < 500) {
        moneyType = "$"
    } else if (500 < props.price < 1000) {
        moneyType = "$$"
    } else if (1000 < props.price ) {
        moneyType ="$$$"
    }

    return (
        <div className="spot--box">
            {moneyType && <div className="spot--badge">{moneyType}</div>}
            <div className='spot--name'>{props.place}</div>
            <div className="spot--price">{props.price}</div>
            <div className="spot--time">{props.timeToGo}</div>
        </div>
    )
}



