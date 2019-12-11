import React, { Component } from 'react';
import SideBarpresentaion from '../presentation/sidebarPresentation';
class SidevarView extends Component {
    constructor(props){
        super(props);
        this.state ={
            menu: this.props.model.getFullMenu(),
            price:this.props.model.getTotalMenuPrice(),
            numberOfGuests:this.props.model.getNumberOfGuests()
        }
        this.props.model.addObserver((param)=>{
                this.setState({menu:this.props.model.getFullMenu(),
                    price: this.props.model.getTotalMenuPrice(),
                    numberOfGuests:this.props.model.getNumberOfGuests()}); 
        });
    } 
   
    render() { 
        return (
            <div id="container-sidebar" className = "side-bar content">
                <SideBarpresentaion 
                    menu={this.state.menu}
                    price ={this.state.price}
                    remove={dishId=>this.removeDish(dishId)}
                    numberOfGuests={this.state.numberOfGuests}
                    changeNumberOfGuests={gnr =>this.setNumberOfGuests(gnr)}
                    />
            </div>
         );
    }
    removeDish=(dishId)=>{
        this.props.model.removeDishFromMenu(dishId);
        sessionStorage.setItem("menu",JSON.stringify(this.props.model.getFullMenu()));
    }
    setNumberOfGuests=(gnr)=>{
        this.props.model.setNumberOfGuests(gnr);
        sessionStorage.setItem("gnr",gnr);
    }
}
 
export default SidevarView;