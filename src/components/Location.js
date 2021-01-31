import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {Button, Form} from 'react-bootstrap'
import {animateScroll as scroll} from 'react-scroll'

class Location extends React.Component {
    componentDidMount() {
        scroll.scrollToBottom()
    }

    onInputChange(e) {
        console.log(e.target.value)
    }
    render() {
        return(
            <div className="container-fluid text-center">
                <h2 style={{marginTop: '50px', marginBottom:'50px'}}>Find Vaccine Hubs Near You</h2>
                <Form>
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center"  style={{marginTop: '30px', marginBottom: '30px'}}>
                    <div className="col">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Texas" />
                    </div>
                    <div className="col" >
                    <Form.Label>County</Form.Label>
                    <Form.Control type="text" placeholder="Brazos" />
                    </div> 
                </div>
                <div className='col'>
                    <a style={{marginBottom:'20px'}} href="https://stjoseph.stlukeshealth.org/covidvaccine" target="_blank" className="btn btn-info" role="button">More Information</a>
                    </div>
                </Form>
            </div>
        )
    }
}


export default Location;