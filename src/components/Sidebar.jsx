import { NavLink } from "react-router-dom"

function SidebaR(){

    return(
        <div className="sidebar">
            <nav>
                <NavLink to="/">Home</NavLink>
                <p></p>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default SidebaR