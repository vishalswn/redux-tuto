import React from 'react'

function Header (props){
    console.warn('home',props.data);
    return(
        <div>
            <div className="add-to-cart">
                <span>{props.data.length}</span>
                <img src="hhh"/>
            </div>
            <h1>Home component</h1>
        </div>
    );
}
export default Header;