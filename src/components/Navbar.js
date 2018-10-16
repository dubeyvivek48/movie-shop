import React from 'react';
import Cart from './cart';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Navbar=(props)=>{

    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      
      <a href="#" className="navbar-brand">MobiStore</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
          <Link to="/Movies" className="nav-link"> Movies </Link>
          </li> */}
        </ul>
        <form className="form-inline mt-2 mt-md-0 center " style={{position:'relative' , }}>
                 <input className="form-control mr-sm-2" style={{paddingLeft:'35px' }} onChange={(e)=>props.searchString(e)} value={props.search}  type="text" placeholder="Search" aria-label="Search" />
                 <i className="fas fa-search"  style={{position:'absolute' ,left:"10px", color:'#989898', top:'51.7%', transform:"translateY(-50%)" }}></i>
        </form>

        <div className="btn btn-primary"  style={{position:"relative"}} onClick={props.cartHandler}><i className="fas fa-shopping-cart"></i>
        <Cart cart={props.cart}  showCart={props.showCart}/>
        </div>
        <div className="btn ml-2" > <i class="fas fa-user" style={{color:'#ffffff', fontSize:'22px', position:'relative',top:'1px' }}></i>
        
        </div>
       
        
      </div>
    </nav>    
    )

}
export default Navbar;