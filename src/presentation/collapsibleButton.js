import React, { Component } from 'react';
class CollapsibleButton extends Component {
    state = {  }
    render() { 
        return ( <div>
            <button  className="collapsible" onClick={collapse}>Dinner Overview</button>
        </div> );
    }
}
 
export default CollapsibleButton;
function collapse (e){
    e.target.classList.toggle("active");
        let content = document.getElementById("container-sidebar")
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
}