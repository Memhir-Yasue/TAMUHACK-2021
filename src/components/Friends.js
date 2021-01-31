import React from 'react'
import {Carousel} from 'react-bootstrap'
import {animateScroll as scroll} from 'react-scroll'
import faker from 'faker'


class Friends extends React.Component {
    
    render() {
        return(
            <div className="text-center" style={{marginBottom: '50px', marginTop: '50px'}}>
                <h2 style={{marginBottom: '30px'}}>Your Friends Who Just got Vaccinated</h2>
               <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        height='250px'
                        width='500px'
                        style={{borderRadius: '20px'}}
                        src={faker.image.people()}
                        alt="avatar"
                        />
                 
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        height='250px'
                        width='500px'
                        style={{borderRadius: '20px'}}
                        src='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                        alt="Third slide"
                        />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        height='250px'
                        width='500px'
                        style={{borderRadius: '20px'}}
                        src='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg'
                        alt="Third slide"
                        />
                    
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default Friends;