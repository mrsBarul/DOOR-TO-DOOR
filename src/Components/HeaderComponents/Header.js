import ModalCart from "../ModalComponents/ModalCart";
import ModalCategories from "../ModalComponents/ModalCategories";
import Search from "../SearchComponents/Search";
import logo from './logo.png'

const Header = () => {
    return(
        <nav>
            <div className="LogoMenu">
                <div className="logo">
                    <img src={ logo } alt='logo'/>
                    <h1>DOOR-TO-DOOR</h1>
                </div>
            </div>
            <div className="SearchContact">
                <Search/>
                <ModalCategories/>
                <ModalCart/>
            </div>
        </nav>
    )
}

export default Header;