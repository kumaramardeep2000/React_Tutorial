import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                
            </header>
        </div>
    )
}
export default Header;