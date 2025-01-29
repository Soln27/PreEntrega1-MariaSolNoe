import {CartWidget} from "./CartWidget"
import ButtonComponent from "./Components/ButtonComponent/ButtonComponent";




const Navbar = () => {
    return (
        <nav>
            <div className="logo">Morita</div>
            <div className="nav-buttons">
                <ButtonComponent categoria="verano25" />
                <ButtonComponent categoria="nuevo" />
                <ButtonComponent categoria="sale" />
            </div>
            <div className="cart-container">
                <CartWidget />  
            </div>
        </nav>
    );
};

export default Navbar;