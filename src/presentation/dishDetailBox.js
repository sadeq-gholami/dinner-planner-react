import React, { Component } from 'react';
import LoeaderComponent from './loaderComponent';

const DishDetailsBox= ({dish, numberOfGuests})=>{
    let ingTotal= 0;
    if (dish.length ===0){
        return <LoeaderComponent/>
    }
    else{
        return(
            <div className="details-box-grid">
                <div id="dishDetails">
                    <h1 id="dishTitle">{dish.title}</h1>
                    <img id="dishPicture" src={dish.image} alt="could not load image"/>
                    <div id="dishInstructions" dangerouslySetInnerHTML={{__html: dish.instructions}}/>
                    <button id="backButton" className="btn">Back to search view</button>
                </div>
                    <div id="ingredientsBox">
                        <b>Ingredients for {numberOfGuests} people</b>
                        <hr/>
                        <div id="extendedIngredients">
                            <table className="table-style">
                                <tbody>
                                {dish.extendedIngredients.map(
                                    (ing,i) => <ExtendedIngredientsRow 
                                                ing= {ing}
                                                key ={i} 
                                                ingTotal={ingTotal}
                                                    />)
                                }
                                </tbody>
                            </table>
                            <hr/>
                            <div className="ingTotal"><span> Total </span>{"SEK " + ingTotal}</div>
                        </div>
                        <button id={"addButton"} className="btn">Add to menu</button>
                    </div>
            </div>
        );

    }
}
export default DishDetailsBox;

const ExtendedIngredientsRow =({ing, ingTotal})=> {
    let amount =Math.floor(Math.random() * 10);
    ingTotal += amount;
    return(
        <tr>
            <td>{ing.amount + " " + ing.unit}</td>
            <td>{ing.name}</td>
            <td>SEK</td>
            <td>{amount}</td>
        </tr>
    );
}