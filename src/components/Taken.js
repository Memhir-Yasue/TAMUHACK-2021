import React from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {animateScroll as scroll} from 'react-scroll'

class Taken extends React.Component {
    componentDidMount() {
        scroll.scrollToBottom()
    }
    render() {
        return(
            <div className="text-center" style={{marginBottom: '50px'}}>
                <h2 style={{marginTop: '50px', marginBottom:'50px'}}>Share With Your Friends</h2>
                <InputGroup style={{height: '100px'}}>
                    <FormControl as="textarea" placeholder="I got vaccinated! #vaccine" aria-label="With textarea" />
                </InputGroup>
                <Button style={{marginLeft: '2px', marginTop: '5px'}}><i className="fab fa-twitter fa-3x"></i></Button>     
                <Button style={{marginLeft: '2px', backgroundColor:'green', marginTop: '5px'}}><i className="fab fa-whatsapp fa-3x"></i></Button>     
                <Button style={{marginLeft: '2px', backgroundColor:'darkblue', marginTop: '5px'}}><i className="fab fa-facebook-square fa-3x"></i></Button>     
            </div>
        )
    }
}


export default Taken;