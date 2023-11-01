import { useEffect } from "react"
import { connect } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const PrivateRoute = (props) => {
    // let location = useLocation()
    // useEffect(()=>{
    //     console.log("HEEELLLLOO ",location)

    // })
    return (
        <>
            {props.auth.isAuth ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)