import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import rp from "request-promise";
import cheerio from "cheerio";
import './Dashboard.css'


class Dashboard extends React.Component {
    state = {number: null}
    componentDidMount() {
        // use the request-promise library to fetch the HTML from cdc
        rp("https://cors-anywhere.herokuapp.com/https://covid.cdc.gov/covid-data-tracker/#datatracker-home")
        .then(html => {
            let $ = cheerio.load(html);
    
            // find what element ids, classes, or tags you want from opening console in the browser
            // cheerio library lets you select elements similar to querySelector
            const number = $('#status-bar-container #status-bar #totalVaccineAdmin div:first').text()
            this.setState({ number});
          })
    }

    render() {
        return <div>
            <Jumbotron className='dashboard' style={{color: 'white'}}>
                <h1>29,577,902 People Vaccinated in the US</h1>
                <h3 style={{color: '#4ecc4e'}}>56 friends have vaccinated</h3>
                <h3 style={{color: 'yellow'}}>156 friends pledged to get vaccinated</h3>
            </Jumbotron>
        </div>
    }
}

export default Dashboard;