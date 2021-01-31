import React from 'react'
import {Card} from 'react-bootstrap'

class FriendsData extends React.Component {
    render() {
        return(
            <div className="container-fluid text-center">
                <h3 style={{marginTop:'30px', marginBottom: '10px'}}>Your Friends</h3>

                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                    <div className="col">
                    <Card style={{marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Already Vaccinated</Card.Title>
                            <Card.Text>43</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Planning To Vaccinate</Card.Title>
                            <Card.Text>43</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title>Undecided/Not Now</Card.Title>
                            <Card.Text>43</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
             
                </div>
            </div>
        )
    }
}

export default FriendsData;