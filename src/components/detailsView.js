import React, { Component } from 'react';
import CollapsibleButton from '../presentation/collapsibleButton';
import LoeaderComponent from '../presentation/loaderComponent';
import ReactDOM from 'react-dom';
import DishDetailsBox from '../presentation/dishDetailBox';
class DetailsView extends Component {
    constructor(props){
        super(props);
        this.state = { 
            searchedDish: []
         }
        this.props.model.addObserver((param)=>{
            this.setState({searchedDish:param}); 
        });
        
    } 
    componentWillMount(){
        this.getDishFromAPI();
    }
    render() { 
        return (
            <div id="container-details">
                    <CollapsibleButton/>
                    <div id={"detailsBox"}>
                        <DishDetailsBox dish={this.state.searchedDish} numberOfGuests={this.props.model.getNumberOfGuests()}/>
                    </div>
            </div>
          );
    }
    getDishFromAPI=()=>{
         this.props.model.getDish(this.props.match.params.dishId).then(dish=> {
            this.props.model.addSearchedDish(dish);
            console.log(this.props.model.searchedDish);
        }).catch(er =>console.log(er))
            .finally(()=>{
            })
    }
}

 
export default DetailsView;