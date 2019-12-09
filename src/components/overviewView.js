import React, { Component } from 'react';
import OverviewPresentaion from '../presentation/overviewPresentation';
class OverviewView extends Component {
    constructor(props){
        super(props);
        this.state ={
            menu: this.props.model.getFullMenu(),
            fullPrice: this.props.model.getTotalMenuPrice(),
            numberOfGuests:this.props.model.getNumberOfGuests()
        };
        this.props.model.addObserver((param)=>{
                this.setState({menu:this.props.model.getFullMenu(),
                    fullPrice: this.props.model.getTotalMenuPrice(),
                    numberOfGuests:this.props.model.getNumberOfGuests()
                }); 
        });
    } 
    render() { 
        return ( 
            <div id="container-overview">
                <OverviewPresentaion menu ={this.state.menu} price ={this.state.fullPrice} numberOfGuests={this.state.numberOfGuests} />
            </div>
         );
    }
}
 
export default OverviewView;