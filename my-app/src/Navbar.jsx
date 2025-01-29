import {CartWidget} from "./CartWidget"
import ButtonComponent from "./Components/ButtonComponent/ButtonComponent";




const Navbar = () => {
    return (
<>
<nav>
<CartWidget/>
    <ButtonComponent categoria="verano25" />
    <ButtonComponent categoria="nuevo" />
    <ButtonComponent categoria="sale" />
</nav>
</>
   
    )
}

export default Navbar;