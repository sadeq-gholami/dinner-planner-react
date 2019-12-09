import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const CreateSearchResultComponent = ({dishes}) => {
    if (dishes.length<1) {
        return (<div>No result to show</div>);
    }
    return (
<div className={"search-result"}>{dishes.map((dish, i) => <CreateDishContainer dish = {dish} key={i}/>)}</div>
    );
}
export default CreateSearchResultComponent;
const CreateDishContainer = ({dish})=> {
    return(
            <div className={"dishPic-and-title-overview"}>
                <Link to={`/details/${dish.id}`}>
                <img className={"dishPic-overview"}
                 src={"https://spoonacular.com/recipeImages/" + dish.image}
                     alt={"could not load image"}
                     />
                </Link>
                <span>{dish.title}</span>
            </div>
    );
}