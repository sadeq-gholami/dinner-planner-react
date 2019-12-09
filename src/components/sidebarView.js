import React, { Component } from 'react';
import SideBarpresentaion from '../presentation/sidebarPresentation';
class SidevarView extends Component {
    constructor(props){
        super(props);
        this.state ={
            menu: [],
            fullPrice: 0,
            numberOfGuests:0
        };
        this.props.model.addObserver((param)=>{
                this.setState({menu:this.props.model.getFullMenu(),
                    fullPrice: this.props.model.getTotalMenuPrice(),
                    numberOfGuests:this.props.model.getNumberOfGuests()}); 
        });
    } 
   
    render() { 
        return (
            <div id="container-sidebar" className = "side-bar content">
                <SideBarpresentaion 
                    menu={this.state.menu}
                    price ={this.state.fullPrice}
                    remove={dishId=>this.props.model.removeDishFromMenu(dishId)}
                    numberOfGuests={this.state.numberOfGuests}
                    changeNumberOfGuests={gnr =>this.props.model.setNumberOfGuests(gnr)}
                    />
            </div>
         );
    }
}
 
export default SidevarView;