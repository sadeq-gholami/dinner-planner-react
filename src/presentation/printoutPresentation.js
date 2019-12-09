import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const PrintoutPresentation = ({menu, numberOfGuests})=>{
    return(
        <div className="printout-container">
                    <div className="headline">
                        <h2>My Dinner : {numberOfGuests} people</h2>
                        <Link to ={"/search"}>
                            <button id="goBackButton" className="btn">Go back and edit dinner</button>
                        </Link>
                        <hr/>
                        <hr/>
                    </div>
                    <div>
                        {menu.map((dish) => <DishComponent dish ={dish}/>)}
                    </div>
                    <button id="printButton" className="btn" onClick={e => window.print()}>Print content</button>
                </div>
    );
}
export default PrintoutPresentation;
const DishComponent = ({dish})=>{
    return (
        <div className = "printout-content">
            <div className="dishpic-and-diets">
                <img className="dishpic-print" src={dish.image} alt="could not load image"/>
                <div className = "dish-title-and-ins">
                    <h2>{dish.title}</h2>
                    <p>orem ipsum dolor sit amet, et dapibus rutrum nisl dictumst dolor tellus, magna
                        eleifend velit pede lectus, sociis sollicitudin, lectus vestibulum orci viverra
                        diam rhoncus, nunc consequat sodales consectetuer.
                    </p>
                </div>
            </div>
            <div className = "preparation">
                <h2>PREPARATION</h2>
                <p dangerouslySetInnerHTML= {{__html: dish.instructions}}/>
            </div>
        </div>

    );
}