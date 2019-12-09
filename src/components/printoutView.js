import React, { Component } from 'react';
import PrintoutPresentation from '../presentation/printoutPresentation';
class PrintoutView extends Component {
    state ={
        menu: this.props.model.getFullMenu(),
        fullPrice: this.props.model.getTotalMenuPrice(),
        numberOfGuests:this.props.model.getNumberOfGuests()
    };
    render() { 
        return ( 
            <div id="container-printout">
                <PrintoutPresentation menu ={this.state.menu} numberOfGuests={this.state.numberOfGuests} />
            </div>
         );
    }
}
 
export default PrintoutView;