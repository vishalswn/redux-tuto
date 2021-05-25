import React from 'react'

function Home (props){
    console.warn('home',props.data);
    return(
        <div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="hhh"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        i-phone
                    </span>
                    <span>
                        price:$1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({price:1000,name:'i-phone 11'})
                    }>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Home;