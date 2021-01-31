import React from 'react'
import Dashboard from './Dashboard'
import {Button} from 'react-bootstrap'
import Location from './Location'
import Taken from './Taken'
import Undecided from './Undecided'
import Friends from './Friends'


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
                <Friends></Friends>
                <h2 className="text-center" style={{marginTop: '50px', marginBottom: '50px'}}>Which one are you?</h2>
                <Button onClick={() => this.setState( {taking: true})} variant="success" size="lg" block>
                   I Pledge To Take The Vaccine
                </Button>
                <Button onClick={() => this.setState( {undecided: true})} variant="warning" size="lg" block>
                    I am Undecided
                </Button>
                <Button style={{marginBottom: '20px'}} onClick={() => this.setState({taken: true})} variant="primary" size="lg" block>
                    I Have Taken It Already
                </Button>
                {this.state.taking ? <Location/> : null}
                {this.state.taken ? <Taken/> : null}
                {this.state.undecided ? <Undecided/> : null}
            </div>
        )
    }
}


export default Home;