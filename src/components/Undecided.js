import React from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap'
import {animateScroll as scroll} from 'react-scroll'

class Undecided extends React.Component {
    componentDidMount() {
        scroll.scrollToBottom()
    }
    render() {
        return(
            <div className="text-center" style={{marginBottom: '50px'}}>
                <h2 style={{marginTop: '50px', marginBottom:'50px'}}>Quick links and resources</h2>
                <a style={{marginBottom:'20px', marginLeft: '10px'}} href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank" className="btn btn-info" role="button">General Information</a>  
                <a style={{marginBottom:'20px', marginLeft: '10px'}} href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/expect.html" target="_blank" className="btn btn-info" role="button">Vaccine Guidelines</a>  
                <a style={{marginBottom:'20px', marginLeft: '10px'}} href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html" target="_blank" className="btn btn-info" role="button">Vaccine FAQs</a>  
            </div>
        )
    }
}


export default Undecided;