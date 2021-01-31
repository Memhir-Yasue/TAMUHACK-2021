import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import rp from "request-promise";
import cheerio from "cheerio";


class Dashboard extends React.Component {
    state = {names: null}
    componentDidMount() {
        // use the request-promise library to fetch the HTML from pokemon.org
        rp("https://cors-anywhere.herokuapp.com/https://covid.cdc.gov/covid-data-tracker/#datatracker-home")
        .then(html => {
            let names = '4';
            let $ = cheerio.load(html);
    
            // find what element ids, classes, or tags you want from opening console in the browser
            // cheerio library lets you select elements similar to querySelector
            $("#status-bar-container #status-bar #totalVaccineAdmin").each(function(i, element) {
                // , '#vaccinations-wrapper' , '#vaccinations-banner-wrapper', '.container',  '.pgdata-main' 
                let name = $(this)
                .text();
                names = name
            });
            console.log(names)
            this.setState({ names });
          })
          .catch(function(err) {
            console.log("crawl failed");
          });
    }

    render() {
        return <div>
            <Jumbotron style={{backgroundColor: 'black', color: 'white'}}>
                <h1>{this.state.names}: 29,577,902</h1>
            </Jumbotron>
        </div>
    }
}

export default Dashboard;