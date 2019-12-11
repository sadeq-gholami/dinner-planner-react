import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoeaderComponent from '../presentation/loaderComponent';
import CollapsibleButton from '../presentation/collapsibleButton';
import SearchFormComponent from '../presentation/searchFormComponent';
import SearchResultComponent from '../presentation/searchResultComponent'
class SearchView extends Component {
     constructor(props){
        super(props);
        this.state = { 
            dishType:"",
            searchText:"",
            searchedDishes: this.props.model.searchedDishes
         }
        this.props.model.addObserver((param)=>{
            this.setState({searchedDishes:this.props.model.searchedDishes}); 
        });
    } 
    searchTextChanged = (searchText)=>{
        this.state.searchText = searchText;
    }
    dishTypeChanged=(dishType)=>{
        this.state.dishType= dishType;
    }
    render() { 
        return ( 
        <div id="container-search" className= "details-box">
             <div>
                <CollapsibleButton/>
                <SearchFormComponent buttonClicked={this.search} 
                    dishTypeChanged={this.dishTypeChanged} 
                    searchTextChanged={this.searchTextChanged}
                />
                <div id="searchLoader" className={"center-content"} style={{display: "none"}}>
                <LoeaderComponent/>
                </div>
                <div  id={"searchResult"} style={{display: "block"}}>
                    <SearchResultComponent dishes = {this.state.searchedDishes}/>
                </div>
            </div>
        </div> 
        );
    }
    search= ()=> {

         const node = ReactDOM.findDOMNode(this);
         node.querySelector("#searchLoader").style.display = "block";
         node.querySelector("#searchResult").style.display = "none";
        this.props.model.getAllDishes(this.state.dishType, this.state.searchText).then(dishes => {
                this.props.model.addSearchDishes(dishes);
            }
        ).catch(er => console.log(er))
        .finally(  () => {
            node.querySelector("#searchLoader").style.display = "none";
            node.querySelector("#searchResult").style.display = "block";
        })
    }
}
 
export default SearchView;