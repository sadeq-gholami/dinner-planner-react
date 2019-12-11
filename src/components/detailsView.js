import React, { Component } from 'react';
import CollapsibleButton from '../presentation/collapsibleButton';
import DishDetailsBox from '../presentation/dishDetailBox';
class DetailsView extends Component {
    constructor(props){
        super(props);
        this.state = { 
            searchedDish: [],
            numberOfGuests:this.props.model.getNumberOfGuests()
         }
        this.props.model.addObserver((param)=>{
            //if (param && this.props.model.searchedDish && param.id === this.props.model.searchedDish.id)
             this.setState({searchedDish:this.props.model.searchedDish, numberOfGuests:this.props.model.getNumberOfGuests()}); 
        });
        
    } 
    componentWillMount(){
        this.getDishFromAPI();
    }
    render() { 
        return (
            <div id="container-details">
                    <CollapsibleButton/>
                        <DishDetailsBox 
                            dish={this.state.searchedDish} 
                            numberOfGuests={this.state.numberOfGuests}
                            buttonClicked={this.addDishToMenu}
                            />
            </div>
          );
    }
    getDishFromAPI=()=>{
         this.props.model.getDish(this.props.match.params.dishId).then(dish=> {
            this.props.model.addSearchedDish(dish);
        }).catch(er =>console.log(er))
            .finally(()=>{
            })
    }
    addDishToMenu =()=>{
        this.props.model.addDishToMenu(this.state.searchedDish);
        console.log(this.props.model.getFullMenu());
    }
}

 
export default DetailsView;