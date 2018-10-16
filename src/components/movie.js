import React from 'react';
import Img from './img.png'
const Movie=(props)=>{
    return(
        <div className="col-sm-4 mt-2 mb-2">       
           <div className="card" >
                <img className="card-img-top img-responsive" src={props.info.Poster=="N/A"?Img:props.info.Poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.info.Title}</h5>
                    <p className="card-text"> Type: {props.info.Type}</p>
                    <a href="#" className="btn btn-primary">Add to cart <i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
            </div>
    )   
}
export default Movie;