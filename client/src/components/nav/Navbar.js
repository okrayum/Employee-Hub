import React from "react"
import { connect } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import LogInOutButton from "../partials/LogInOutButton"
import ProfileModalAndButton from "../partials/ProfileModalAndButton"
import "../../styles/Navbar.css"

const Navbar = (props) => {
    const { pathname } = useLocation()
    return (
        <>
        <nav className="navbar">
            {
                !props.auth.isAuth ? <h3 className="navBarTitle">EMPLOYEE HUB</h3> : <h3 className="greeting">Hello {props.app.user.userName} </h3>
            }
            <div className="linksDiv">
            {
                props.auth.isAuth && pathname !== "/directory" && <Link to="/directory"><h4 className="navlink">Directory</h4></Link>
                
            }
            {
                props.auth.isAuth && pathname !== "/posts" && <Link to="/posts"><h4 className="navlink bulletinNavLink" >Bulletin</h4></Link>
            }
            {
                props.auth.isAuth &&  pathname !== "/directory" && <ProfileModalAndButton />
            }
            {
                <LogInOutButton />
            }
            </div>
        </nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        app: state.app
    }
}

export default connect(mapStateToProps, null)(Navbar)