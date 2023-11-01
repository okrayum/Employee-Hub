import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { Navigate, Outlet, useLocation} from "react-router-dom"

const PublicRoute = (props) => {
    let location = useLocation()
    let [currentLocation, setCurrentLocation] = useState("")
    useEffect(()=>{
        // console.log("HEEELLLLOO ",location)
        let storage = sessionStorage.getItem("location")
        // console.log("storage", storage)
        setCurrentLocation(storage)

    })
    return (
        <>
        {props.auth.isAuth ? <Navigate to ={currentLocation || "/posts"} /> : <Outlet />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PublicRoute)