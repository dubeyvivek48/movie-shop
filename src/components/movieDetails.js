import React , {Component} from 'react';
class MovieDetails extends Component {
    componentDidMount(){
        let mobi=fetch('http://www.omdbapi.com/?i='+ this.props.match.params.id +'&apikey=34d9da6c')
        .then(response => response.json())
         .then(data => {
            console.log(data);
            this.props.HandleMobi(data);
            });
    }
    render(){
        return(
            <div className={this.props.navToggle?'mt-56 container':'mt-140 container-fluid'}  >
               <div class="row">
               <div class="col-md-4 col-sm-6 col-xs-12 mt-2 mb-2 ">
               <div class="card shadow">
               <img class="card-img-top mobiDetails img-responsive" src={this.props.movieDetails.Poster} alt="Card image cap" />
               <div class="card-body">
              
               <hr />
               <a class="btn buy cart-link btn-primary shadow" onClick={this.props.addToCart}><i class="fas fa-shopping-cart"></i> Add to cart</a>
                <a class="btn btn-primary cart-link shadow"><i class="fas fa-bolt"></i>  Buy  </a>
                <br></br>
                </div>
                </div>
                </div>


                <div class="col-md-8 col-sm-6 col-xs-12 mt-2 mb-2 ">
                 <div class="card shadow">
                    <div class="card-body">                             
                        <strong class="card-title "> {"Title : "+this.props.movieDetails.Title} </strong>
                        <hr />
                        <p> {"Actors: : "+this.props.movieDetails.Actors} </p>
                        <hr />
                        <p> {"Genre : "+this.props.movieDetails.Genre} </p>
                        <hr />
                        <p> {"Director : "+this.props.movieDetails.Director} </p>
                        <hr />
                        <p> {"Ratings : "+this.props.movieDetails.imdbRating} </p>
                        <hr />
                        <p> {"Year : "+this.props.movieDetails.Year} </p>
                </div>
                </div>                
                </div>
                </div>
                <div className="row">
                        <div className="col-md-12">                      
                        <div class="card shadow">
                    <div class="card-body">    
                        <p> {"Plot : "+this.props.movieDetails.Plot} </p>
                        <hr />

                        <p> {"Awards : "+this.props.movieDetails.Awards} </p>
                        <hr />
                        <p> {"BoxOffice : "+this.props.movieDetails.BoxOffice} </p>
                        <hr />
                        <p> {"Country : "+this.props.movieDetails.Country} </p>
                        <hr />
                        <p> {"DVD : "+this.props.movieDetails.DVD} </p>
                        <hr />                    
                        <p> {"Language : "+this.props.movieDetails.Language} </p>
                        <hr />
                        <p> {"Metascore : "+this.props.movieDetails.Metascore} </p>
                        <hr />
                        <p> {"Production : "+this.props.movieDetails.Production} </p>
                        <hr />
                        <p> {"Rated: "+this.props.movieDetails.Rated} </p>
                        <hr />                        
                        <p> {"Released : "+this.props.movieDetails.Released} </p>
                        <hr />
                        <p> {"Response : "+this.props.movieDetails.Response} </p>
                        <hr />
                        <p> {"Runtime : " +this.props.movieDetails.Runtime} </p>
                        <hr />
                        <p> {"Type : "+this.props.movieDetails.Type} </p>
                        <hr />
                        <p>Website : <a href={this.props.movieDetails.Website} target="_blank">{" "+this.props.movieDetails.Website} </a></p>
                        <hr />
                        <p> {"Writer: "+this.props.movieDetails.Writer} </p>
                        <hr />
                        <p> {"imdbVotes : "+this.props.movieDetails.imdbVotes} </p>
                        </div>
                </div>
                </div>
                </div>
            </div>
           
        )   
    }
   
    
}
export default MovieDetails;