import React from 'react'
import FriendsData from './FriendsData'
import Dashboard from './Dashboard'
import {Button} from 'react-bootstrap'
import Location from './Location'
import Taken from './Taken'
import Undecided from './Undecided'


class Home extends React.Component {
    state = {
        taking: false,
        taken: false,
        undecided: false
    }


    render() {
        return(
            <div className="container-fluid" style={{height: '1000'}}>
                <Dashboard></Dashboard>
                
                <h2 className="text-center" style={{marginTop: '50px', marginBottom: '50px'}}>I pledge to</h2>
                <Button onClick={() => this.setState( {taking: true})} variant="success" size="lg" block>
                    Take the vaccine
                </Button>
                <Button onClick={() => this.setState( {undecided: true})} variant="warning" size="lg" block>
                    Undecided/Later
                </Button>
                <Button onClick={() => this.setState({taken: true})} variant="primary" size="lg" block>
                    Taken Already
                </Button>
                {this.state.taking ? <Location/> : null}
                {this.state.taken ? <Taken/> : null}
                {this.state.undecided ? <Undecided/> : null}
            </div>
        )
    }
}


export default Home;