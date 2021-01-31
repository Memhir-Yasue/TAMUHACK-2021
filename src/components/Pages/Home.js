import React from 'react'
import FriendsData from './FriendsData'
import Dashboard from './Dashboard'

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <Dashboard></Dashboard>
                <FriendsData></FriendsData>
            </div>
        )
    }
}


export default Home;