import React, { Component } from 'react';
import LoeaderComponent from './loaderComponent';
import {Link} from 'react-router-dom';

const DishDetailsBox= ({dish, numberOfGuests, buttonClicked})=>{
    
    if (dish.length ===0){
        return (
            <div className="center-content">
             <LoeaderComponent />
            </div>
        )
    }
    else{
        let ingTotal= 0;
        return(
            <div className="details-box-grid">
                <div id="dishDetails">
                    <h1 id="dishTitle">{dish.title}</h1>
                    <img id="dishPicture" src={dish.image} alt="could not load image"/>
                    <div id="dishInstructions" dangerouslySetInnerHTML={{__html: dish.instructions}}/>
                    <Link to= "/search">
                    <button className="btn">Back to search view</button>
                    </Link>
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
                        <button className="btn" onClick ={buttonClicked}>Add to menu</button>
                    </div>
            </div>
        );

    }
}
export default DishDetailsBox;

const ExtendedIngredientsRow =({ing ,ingTotal} )=> {
    let amount =Math.floor(Math.random() * 10);
    ingTotal+= amount;
    return(
        <tr>
            <td>{ing.amount + " " + ing.unit}</td>
            <td>{ing.name}</td>
            <td>SEK</td>
            <td>{amount}</td>
        </tr>
    );
}