import React from "react";
import './Header.css'
class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header">
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Contact</span>
                    <span>About Us</span>
                </header>
            </div>
        )
    }

}
export default Header; 