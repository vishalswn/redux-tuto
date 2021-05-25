import React from 'react'

function Home (){
    return(
        <div>
            <div className="add-to-cart">
                <img src="hhh"/>
            </div>
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
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Home;