import * as React from 'react';
import { Cell, Grid } from 'react-mdl';
import StudyArea from '../img/studyarea.jpg';

class About extends React.Component {
    public render() {
        return(
              <Grid>
                  <Cell col={6}>
                    <div className="bg">
                        <div id="bg-overlay"/>
                        <img src={StudyArea} 
                            id="bg" 
                            alt="" 
                        />

                     </div>
                  </Cell>
                  <Cell col={6}>
                      <div className="about-me-right-side">
                            <h1>About Tim</h1>

                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'EB Garamond, serif'}}>
                                I am currently a third year student at Auckland University of Technology studying a BCIS and majoring in software development.
                                I have a great passion for development and technology and find creating web applications and projects a lot of fun. A few of my hobbies
                                include PC gaming, kick-boxing, cooking and baking.
                            </p>

                            <h2> [Reserved for future updates] </h2>
                            <h3>INSERT MEDIA</h3>
                            <h3> To add: 'About me' Video </h3>
                        </div>    
                  </Cell>
              </Grid>
        )
    }
}

export default About;