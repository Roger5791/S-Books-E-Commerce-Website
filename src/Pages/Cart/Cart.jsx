import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'


const Cart = ({cartItem, setCartItem}) => {


    //Increase Quantity==============

    function inc(product) {
        const exist =cartItem.find((x) => {
            return x.id === product.id;
        })
        setCartItem(cartItem.map((item) => {
            return item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
        }))
    }

        //Decrease Quantity==============

    function dec(product) {
        const exist =cartItem.find((x) => {
            return x.id === product.id;
        })
        setCartItem(cartItem.map((item) => {
            return item.id === product.id ? {...exist, quantity: exist.quantity + -1} : item
        }))
    }


    //Remove Items===============

    function removecart(product){
        const exist =cartItem.find((x) => {
            return x.id === product.id;
        })

        if(exist.quantity > 0){
            setCartItem(cartItem.filter((x)=> {
                return x.id !== product.id
            }))
        }

    }


    //Calculate Total=================

    const totalPrice = cartItem.reduce((price, product) => price + product.quantity * product.price, 0);


    const { userLoggedIn } = useAuth();


  return (
    <div className='cart-container container'>
    {cartItem.length === 0 &&
    <div>
    <h2 className="empty-cart">
        Cart Is Empty
    </h2>

    <Link to={'/shope'}>
    <button className='cart-shop btn btn-border' >Shop Now</button></Link>
 
    </div>
    }

    <div className="cart-wrapper">
        <div className="cart-product">

        {
            cartItem.map((product) => {
                return (
                <div className="cart-box" key={product.id}>
                    <div className="cart-product-container">
                        <div className="cart-img">
                           <Link to={`/details/${product.id}`} ><img src={product.image} alt="" /></Link>
                        </div>

                        <div className="cart-item-detail">
                        <Link to={`/details/${product.id}`}><h2>{product.name}</h2></Link>
                            <h3>$ {product.price}</h3>
                        </div>

                        <div className='cart-actions'>
                        <button className="cart-qnty-m" onClick={() => dec(product)}>-</button>

                        <input type="text" placeholder={product.quantity} />
                        <button className="cart-qnty-p" onClick={() => inc(product)}>+</button>
                        </div>
                        <h3>Sub Total: $ {product.price*product.quantity}</h3>

                        <button onClick={() => removecart(product)} className="remove-cart">
                        X
                    </button>
                        
                    </div>
                   
                </div>

            

                )
            })
        }

        </div>
        {cartItem.length > 0 && 
       <div className='cart-checkout'>
       <span>Subtotal: <span> $ {totalPrice.toFixed(2)}</span></span>
       <span>Shipping: <span> Free</span></span>
       <p>Total: <span>$ {totalPrice.toFixed(2)}</span></p>
            {userLoggedIn ?  <Link to='/checkout'><button className="checkout-btn btn btn-border">Checkout</button></Link> :  <Link to='/login'><button className="checkout-btn btn btn-border">Checkout</button></Link>}
           
            <Link to='/shope'><button className="checkout-btn btn btn-border">Continue Shopping</button></Link> 
            
            </div>
            
        }

    </div>


 

    </div>
  )
}

export default Cart
