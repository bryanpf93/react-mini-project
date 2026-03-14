import { NavLink } from "react-router-dom"

function SidebaR(){

    return(
        <div className="sidebar">
            <nav>
                <NavLink to="/">HOME</NavLink>
                <p></p>
                <NavLink to="/about">ABOUT</NavLink>
            </nav>
        </div>
    )
}

export default SidebaR