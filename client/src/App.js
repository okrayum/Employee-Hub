
import React, { useEffect } from "react"
import API from "./utils/api"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import PublicRoute from "./components/PublicRoute"
import PrivateRoute from "./components/PrivateRoute"
import Posts from "./components/views/Posts"
import Directory from "./components/views/Directory"
import Landing from "./components/views/Landing"
import Navbar from "./components/nav/Navbar"
import { connect } from "react-redux"
import actions from "./utils/redux/actions"


// class App extends React.Component {
//   async componentDidMount() {
//     let location = useLocation()

//     if (props.auth.isAuth) {
//       sessionStorage.setItem("location", location.pathname)
//     }

//     //get our user
//     await API.getUser()

//     // get all posts
//     // await API.getAllPosts()

//     // get all users
//     // await API.getAllUsers()

//     // check auth status
//     await API.checkAuth()
//   }
//   render() {
//     return (
//       <>
//         <Navbar />
//         <Routes>
//           <Route element={<PublicRoute />} >
//             <Route path="/" element={<Landing />} />
//           </Route>
//           <Route element={<PrivateRoute />} >
//             <Route path="/posts" element={<Posts />} />
//             <Route path="/directory" element={<Directory />} />
//             {/* <Route path="/messages" element={<Messages />} /> */}
//           </Route>
//         </Routes>
//       </>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     auth: state.auth,
//     app: state.app
//   }
// }

// export default connect(mapStateToProps, null)(App)

const App = (props) => {
  // console.log("APP PROPS ", props)
  let location = useLocation()
    useEffect(()=>{
        // console.log("HEEELLLLOO ",location)
        if(props.auth.isAuth){
          sessionStorage.setItem("location", location.pathname)

        }
    })

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />} >
          <Route path="/" element={<Landing />} />
        </Route>
        <Route element={<PrivateRoute />} >
          <Route path="/posts" element={<Posts />} />
          <Route path="/directory" element={<Directory />} />
          {/* <Route path="/messages" element={<Messages />} /> */}
        </Route>
      </Routes>
    </>
  )

}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth: state.auth,
    app: state.app
  }
}

export default connect(mapStateToProps, null)(App)