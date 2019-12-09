import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const OverviewPresentation = ({menu, price, numberOfGuests})=>{
    return(
        <div>
            <div className="headline">
                <h2>{"My Dinner " + numberOfGuests + " people"} </h2>
                <Link to ="/search">
                <button className="btn">Go back and edit dinner</button>
                </Link>
                <hr/>
                <hr/>
            </div>
            <div id="overview-container-andBtn">
                <div className="overview-container">
                    {menu.map(dish => <DishContainer dish = {dish} key={dish.id} />)}
                    <hr/>
                    <div className="ingTotal overview-total">
                        <span> Total: </span>{"SEK " + price}</div>
                </div>
                <hr/>
                <div>
                    <Link to ="/printout">
                    <button id={"conformButton"} className={"btn"}>Print Full Recipe</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default OverviewPresentation;
const DishContainer = ({dish})=> {
    return (
        <div className={"dish-box-overview"}>
            <div className={"dishPic-and-title-overview"}>
                <img className={"dishPic-overview"} src={dish.image}/>
                <span>{dish.title}</span>
            </div>
            <span>{"SEK " + dish.pricePerServing}</span>
        </div>
    );
}