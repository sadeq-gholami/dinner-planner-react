import {ENDPOINT, API_KEY } from './apiConfig'
export default class DinnerModel {

    constructor() {
      //TODO Lab 1
      // implement the data structure that will hold number of guests
      this.numberOfGuests = 1;
      // and selected dishes for the dinner menu
      this.selectedDishes = [];
      this.observers=[];
      this.searchedDish="";
      this.searchedDishes=[];
  
    }
    addObserver(observer){
      this.observers.push(observer);
    }
    removeObserver(observer){
      this.observers = this.observers.filter(obs => obs!==observer);
    }
    notifyObservers(payLoad){
      for(let i = 0; i <this.observers.length; i++){
        this.observers[i](payLoad);
      }
    }
    addSearchedDish(dish){
      this.searchedDish= dish;
      this.notifyObservers(dish);
    }
    addSearchDishes(dishes){
      this.searchedDishes = dishes;
      this.notifyObservers(dishes);
    }
    setNumberOfGuests(num) {
      if (num <= 0 ||!num) {
        this.numberOfGuests = 1;
      } else {
        this.numberOfGuests = num;
      }
     this.notifyObservers(this.numberOfGuests);
    }
  
  
    getNumberOfGuests() {
      //TODO Lab
      return this.numberOfGuests;
    }
  
    //Returns the dishes that are on the menu for selected type
    getSelectedDishes(type) {
      return this.selectedDishes.filter(dish => dish.dishTypes.includes(type));
    }
  
  
    //Returns all the dishes on the menu.
    getFullMenu() {
      //TODO Lab 1
      return this.selectedDishes;
    }
  
    //Returns all ingredients for all the dishes on the menu.
    getAllIngredients() {
      //TODO Lab 1
      return this.selectedDishes.map(value => value.extendedIngredients).flat();
    }
  
    //Returns the total price of the menu (price per serving of each dish multiplied by number of guests).
    getTotalMenuPrice() {
      return this.selectedDishes.map(dish => dish.pricePerServing).reduce((previousValue, currentValue) => {
        return (currentValue * this.numberOfGuests) + previousValue;
      }, 0);
    }
  
    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    addDishToMenu(dish) {
          this.selectedDishes = this.selectedDishes.filter(adish => {
            return !adish.dishTypes.some(item => dish.dishTypes.includes(item));
          });
      this.selectedDishes.push(dish);
      this.notifyObservers(dish);
    }
  
  
    //Removes dish with specified id from menu
    removeDishFromMenu(id) {
      this.selectedDishes= this.selectedDishes.filter(dish=> dish.id != id);
      this.notifyObservers();
    }
  
    //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
    //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
    //if you don't pass any query, all the dishes will be returned
    getAllDishes(type, query) {
       //we create a URL object.
       let url = new URL(ENDPOINT + "/recipes/search");

       //if getAllDishes is called with type, then add the type to url as a parameter.
       if (type) {
         url.searchParams.append('type', type);
       }
       //if getAllDishes is called with query, then add the type to url as a parameter.
       if (query) {
         url.searchParams.append('query', query);
       }
 
       //if getAllDishes is called without query or type.
       if (!type && !query) {
         url = new URL(ENDPOINT + "/recipes/search?number=10&offset=0");
       }
     return fetch(url.toString(),{
       "method": "GET",
       "headers" : {
         "X-Mashape-Key": API_KEY
       }}).catch(er=>console.log(er))
         .then(response => response.json())
         .then(res => res.results);
    }
  
  
  //Returns a dish of specific ID
    getDish(id) {
      return fetch(ENDPOINT +`/recipes/${id}/information`,{
        "method": "GET",
        "headers" : {
          "X-Mashape-Key": API_KEY
        }})
          //.then(response => this.handleHTTPError(response))
          .then(response => response.json());
    }
  }