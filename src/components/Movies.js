import React from 'react';
import Movie from './movie';
import Notfound from './NotFound'
const Movies=(props)=>{
    return(
        <div className="container">
        <div className="row">
        { props.search==null? <Notfound />  :(props.search.map((item,index)=><Movie info={item} addToCart={props.addToCart} ind={index}/>))
        }
        </div>  
        </div>  
    )   
}
export default Movies;