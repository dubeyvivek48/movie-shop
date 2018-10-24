import React from 'react';
import './cart.css';
const Cart=(props)=>{
    
    let items=  props.cart.map((item, index)=>{
        return (
            <li key ={index+'sala'} className="list-Item cart-list"> 
                <div className="cart-Item">
                    <img className='cart-ItemImg' src={item.Poster}/>
                    <div className="cart-itemDiscription">
                         <h6>{item.Title}</h6>
                         <div className="flex">
                         <span className="float-left"> Price: ${item.imdbID.substr(6, 3)}</span>
                         <div className="cart-btn-group"><i className="fas fa-minus-circle"></i> 1 <i className="fas fa-plus-circle"></i></div>
                         </div>
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