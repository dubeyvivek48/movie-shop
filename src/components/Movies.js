import React from 'react';
import Movie from './movie';
import Notfound from './NotFound'
const Movies=(props)=>{
    return(
        <div className="container">
        <div className="row">
        { props.search==null? <Notfound />  :(props.search.map((item)=><Movie info={item}/>))
        }
        </div>  
        </div>  
    )   
}
export default Movies;