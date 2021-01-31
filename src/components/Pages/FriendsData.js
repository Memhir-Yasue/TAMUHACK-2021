import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

class FriendsData extends React.Component {
    render() {
        return(
            <div className="container justify-content-center">
                <h3>Your Friends</h3>
                <div className="row">
                    <div className="col">
                    <Card style={{ width: '15rem'}}>
                        <Card.Body>
                            <Card.Title>Already Vaccinated</Card.Title>
                            <Card.Text>43</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Planning To Vaccinate</Card.Title>
                            <Card.Text>43</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>Not Vaccinating Now</Card.Title>
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