import { useState } from "react"
import { NavLink } from "react-router-dom"
// import logo from '../assets/shared/logo.svg'

const Navbar = () => {

    const [burgerNav, setBurgerNav] = useState("")
    const burgerMenu = () =>{
        burgerNav === "" ? setBurgerNav("burgerNav") : setBurgerNav("")
    }

    return (
        <>
            <nav className="navbar-container">
                <img className="logo" src="/src/assets/shared/logo.svg" alt="Logo" />
                <div className={`link-container${burgerNav}`}>
                    <NavLink to={"/"}><p>00</p>HOME</NavLink>
                    <NavLink to={"/destination/moon"}><p>01 </p>DESTINATION</NavLink>
                    <NavLink to={"/crew/douglas hurley"}><p>02</p> CREW</NavLink>
                    <NavLink to={"/technology"}><p>03</p> TECHNOLOGY</NavLink>
                {/* <p className="croix">\002716</p> */}
                </div>
                <img className={`burger${burgerNav}`} src="/src/assets/shared/icon-hamburger.svg" alt="burger menu"  onClick={burgerMenu} />
            </nav>
        </>

    )
}

export default Navbar;
