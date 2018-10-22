import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Notfound from './components/NotFound';
import MovieDetail from './components/movieDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies'

class App extends Component {
  constructor(){
    super();
    this.state={
      movieDetails:[{}],
      navToggle:'false',
      movies:'',       
      searchText:'',
      displayCart:false,
      search:[{
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
      Title: "Manchester by the Sea",
      Type: "movie",
      Year: "2016",
      imdbID: "tt4034228",
     }],
     cart:[{
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
      Title: "Manchester by the Sea",
      Type: "movie",
      Year: "2016",
      imdbID: "tt4034228",
     }]     
    }
  }
  movieDetl=[{}]
   searchmovie=(e)=>{
     let mobi=fetch('http://www.omdbapi.com/?s='+ e.target.value +'&apikey=34d9da6c')
     .then(response => response.json())
      .then(data => {
        console.log(data.Search)        
        this.setState({search:data.Search
        }
          )});
      this.setState({
        searchText: e.target.value    
      })
      console.log(this.state.search)
      //   let newResult=this.state.search.map((data)=>{
      //    fetch('http://www.omdbapi.com/?i=' + data.imdbID +'&apikey=34d9da6c')
      //    .then(response => response.json)
      //    .then(data=> console.log("\n TTId"+newResult))
      // })
  }
  callCartHandler=()=>{
    console.log("cartHandler")
  }
  showCartHandler=()=>{
    let show=this.state.displayCart;
    show=show?false:true;
    console.log("show :"+show)
    this.setState({
      displayCart:show
    })
  }
  CartHandler=(index1)=>{
    console.log(index1)
    let cart=this.state.search;
    cart.map((item,index)=>{
      if(index===index1){
        let newItem=this.state.search[index];
        this.setState({
          cart:[...this.state.cart ,newItem ]
        })
      }
    })
  }
  handleNavtoggle=()=>{
    let toggle= this.state.navToggle?false:true;
    this.setState({navToggle:toggle})
    console.log('toggle :'+toggle);
  }
  handleMovieDetails=(data)=>{
    this.setState({
      movieDetails:data
    })
  }
  
  render() {
    return (
      <div >
      <Navbar search={this.state.searchText} toggle={this.handleNavtoggle} togleClass={this.state.navToggle} searchString={this.searchmovie} cart={this.state.cart} cartHandler={this.showCartHandler} showCart={this.state.displayCart} />
      <BrowserRouter>
      <Switch>
      
        <Route exact path="/"  render={()=> <Movies navToggle={this.state.navToggle}  search={this.state.search}  addToCart={this.CartHandler} />} />
        
        
        <Route path="/:id" exact render={(props)=> <MovieDetail navToggle={this.state.navToggle}  {...props} HandleMobi={this.handleMovieDetails} movieDetails={this.state.movieDetails} addToCart={this.callCartHandler}/>} />
        <Route path="/" render={()=> <Notfound />} />
        </Switch>
      </BrowserRouter>
      {/* */}
          
      </div>     
    );
  }
}
export default App;