import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class HomeView extends Component {
    render() { 
        return ( 
        <div className="container-home" id="container-home">
            <div className="text-button">
                <p style={{fontSize: "2rem", marginLeft:"100px", marginRight: "100px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut
                    iaculis diam. Aliquam
                    magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh
                    elementum euismod a sit
                    ame arcu. Maecenas a efficitur leo.
                </p>
                <div className="spacing-medium"></div>
                <Link to="/search">
                <button id="startBtn" className="btn">Create new dinner</button>
                </Link>
            </div>
        </div>  
        );
    }
}
export default HomeView;