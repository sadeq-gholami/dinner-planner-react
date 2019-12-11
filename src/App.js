import React, {Component} from 'react';
import HomeView from './components/homeView';
import HeaderView from './components/headerView';
import SearchView from './components/searchView';
import PrintoutView from './components/printoutView';
import OverviewView from './components/overviewView';
import DetailsView from './components/detailsView';
import SidebarView from './components/sidebarView';
import DinnerModel from './model/dinnerModel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state={model : new DinnerModel}
    if (localStorage.getItem("menu")!==null){
      this.state.model.selectedDishes = JSON.parse(localStorage.getItem("menu"));
    }
    if (localStorage.getItem("searchedDishes")!==null){
      this.state.model.searchedDishes = JSON.parse(localStorage.getItem("searchedDishes"));
    }
    if (localStorage.getItem("gnr")!==null){
      this.state.model.numberOfGuests = localStorage.getItem("gnr");
    }
  }
  render() { 
    return (  
      <Router>
        <React.Fragment>
            <HeaderView/>
            <Route  exact path="/" render={
                (props) => <HomeView {...props} model={this.state.model} />
                }
                />
           <Route path= "/(search|details)" render={
              (props) => <SidebarView {...props} model={this.state.model} />
              }
              />
            <Route path="/search" render={
                (props) => <SearchView {...props} model={this.state.model} />
                }
                />
            <Route path= "/details/:dishId" render={
                (props) => <DetailsView {...props} model={this.state.model} />
                }
                />
            <Route path="/printout" render={
                (props) => <PrintoutView {...props} model={this.state.model} />
                }
                />
            <Route path= "/overview" render={
                (props) => <OverviewView {...props} model={this.state.model} />
                }
                />
            
        </React.Fragment>
      </Router>
     );
  }
}

export default App;
