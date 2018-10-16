import React, { Component } from 'react';
//import { Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies'

class App extends Component {
  constructor(){
    super();
    this.state={
      movies:'',
      cart:'0', 
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

  showCartHandler=()=>{
    let show=this.state.displayCart;
    show=show?false:true;
    console.log("show :"+show)
    this.setState({
      displayCart:show
    })
  }
  addToCartHandler=()=>{
    
  }
  
  render() {
    return (
      <div >
      <Navbar search={this.state.searchText} searchString={this.searchmovie} cart={this.state.cart} cartHandler={this.showCartHandler} showCart={this.state.displayCart} />
      {/* <Route path="/" component={Home}/>
      <Route path="/airports" component={Airport}/>
      <Route path="/cities" component={City}/> */}
      
      <div className="container" style={{marginTop:'56px'}} >
        <Movies search={this.state.search} />      
      </div>
     </div>
    );
  }
}
export default App;