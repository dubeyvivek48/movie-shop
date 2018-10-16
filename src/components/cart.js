import React from 'react';
import './cart.css';
const Cart=(props)=>{
    
    let items=  props.cart.map((item)=>{
        return (
            <li className="list-Item"> 
                <div className="cart-Item">
                    <img className='cart-ItemImg' src={item.Poster}/>
                    <div className="cart-itemDiscription">
                         <h6>{item.Title}</h6>
                         <span className="float-left"> Price: ${item.imdbID.substr(6, 3)}</span>
                    </div>
                </div>
                <hr />
            </li>
           
        );
    });
           
    return(
        <div  className={props.showCart?"show shadow cart":"hide cart"}>  
        <ul style={{padding:'0'}}>  
           {items}
        </ul>   
        </div>
            
    )   
}
export default Cart;