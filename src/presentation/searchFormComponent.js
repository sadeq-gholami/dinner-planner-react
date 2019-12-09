import React, { Component } from 'react';
const SearchFormComponent=({buttonClicked, dishTypeChanged, searchTextChanged})=>{ 
        return (  
        <React.Fragment>
            <h2>Find A Dish</h2>
            <input type="text" onChange={e => searchTextChanged(e.target.value) }/>
            <select onChange={ e => dishTypeChanged(e.target.value)}>
                <option value="Main Course" >Main Course</option>
                <option value="Side Dish" >Side Dish</option>
                <option value="Desert" >Desert</option>
                <option value="Appetizer" >Appetizer</option>
                <option value ="">...</option>
            </select>
            <button className={"btn"} onClick={buttonClicked}>Search</button>
            <hr/>
        </React.Fragment> );
}
 
export default SearchFormComponent;