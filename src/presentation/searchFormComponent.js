import React, { Component } from 'react';
const SearchFormComponent=({buttonClicked, dishTypeChanged, searchTextChanged})=>{ 
        return (  
        <React.Fragment>
            <h2>Find A Dish</h2>
            <input type="text" defaultValue={sessionStorage.getItem("searchText")} 
            onChange={e => searchTextChanged(e.target.value) }
            onKeyPress={e=> {
                        let key = e.which || e.keyCode;
                         if(key===13) buttonClicked(e)}}/>
            <select defaultValue = {sessionStorage.getItem("dishType")}onChange={ e => dishTypeChanged(e.target.value)}>
                <option value ="">all</option>
                <option value="Main Course" >Main Course</option>
                <option value="Side Dish" >Side Dish</option>
                <option value="Desert" >Desert</option>
                <option value="Appetizer" >Appetizer</option>
                
            </select>
            <button className={"btn"} onClick={buttonClicked}>Search</button>
            <hr/>
        </React.Fragment> );
}
 
export default SearchFormComponent;