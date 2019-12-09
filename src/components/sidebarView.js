import React, { Component } from 'react';
class SidevarView extends Component {
    state = {  }
    render() { 
        return (
            <div id="container-sidebar" className = "side-bar content">
                <div>
                <div>
                    <h2>Mydinner</h2>
                    <label>people</label>
                    <input id ="numberOfGuests" className="side-bar-input" type="number"/>
                </div>
                <div id={"dishMenuTable"}/>
                <button id ="conformButton" className="btn">Confirm Dinner</button>
            </div>
            </div> 
         );
    }
}
 
export default SidevarView;