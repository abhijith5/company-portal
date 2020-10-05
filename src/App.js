import React from 'react'
import Protected from './components/common/protected'
import NavBar from './components/navigation/navBar'
import Login from './views/login'
import ManageJobs from './views/manageJobs'

export default function App() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      {/* <Login></Login> */}
      <Protected></Protected>
      {/* <ManageJobs></ManageJobs> */}
    </div>
  )
}
