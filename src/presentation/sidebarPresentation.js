import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const SideBarpresentaion = ({menu, price, remove, numberOfGuests, changeNumberOfGuests})=>{
    return(
        
        <React.Fragment>
        <div>
            <h2>Mydinner</h2>
            <label>people</label>
            <input className="side-bar-input" type="number" value={numberOfGuests} onChange={e =>changeNumberOfGuests(e.target.value)}/>
        </div>
        <div id={"dishMenuTable"}/>
        <DishTableBox menu={menu} price={price} remove={remove} />
        <Link to ={"/overview"}>
            <button id ="conformButton" className="btn">Confirm Dinner</button>
        </Link>
         </React.Fragment>
    );
}
export default SideBarpresentaion;
const DishTableBox=({menu, price, remove})=>{
    return(
        <div id="extendedIngredients">
            <table className="table-style">

                <tbody>
                <tr>
                    <th>Dish name</th>
                    <th>SEK</th>
                    <th>Cost</th>
                    <th>Remove</th>
                </tr>
                {menu.map(dish =><DishTableComponent dish={dish} remove={remove} key={dish.id}/>)}
                </tbody>
            </table>
            <hr/>
            <div className="ingTotal"><span> Total price </span>{"SEK " + price}</div>
        </div>
    )
}
const DishTableComponent=({dish, remove})=> {
    return(
        <tr>
            <td>{dish.title}</td>
            <td>SEK</td>
            <td>{dish.pricePerServing}</td>
            <td><button onClick={e=>remove(dish.id)}>remove</button></td>
        </tr>
    );
}