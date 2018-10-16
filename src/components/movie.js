import React from 'react';
import Img from './img.png'
const Movie=(props)=>{
    return(
        <div className="col-sm-4 mt-2 mb-2 ">       
           <div className="card shadow" >
                <img className="card-img-top img-responsive" src={props.info.Poster=="N/A"?Img:props.info.Poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.info.Title}</h5><hr></hr>
                    <p className="card-text"> Type: {props.info.Type}</p>
                    <p className="card-text"> Price: ${props.info.imdbID.substr(6, 3)}</p>
                    <a href="#" className="btn btn-primary shadow"> <i className="fas fa-shopping-cart"></i> Add to cart</a>
                    <a href="#" className="btn btn-primary shadow"> <i class="fas fa-bolt"></i>  Buy  </a>
                </div>
            </div>
            </div>
    )   
}
export default Movie;