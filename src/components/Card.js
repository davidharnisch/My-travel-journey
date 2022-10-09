import React from "react"
import ReactDOM from "react-dom/client"
    return (
        
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/Star-1.png"  className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">{props.item.stats.reviewCount} • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}