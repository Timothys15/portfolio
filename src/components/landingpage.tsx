import * as React from 'react';
import { Cell, Grid } from 'react-mdl';
import timpic from '../img/timpic.gif';


class Landing extends React.Component {
    public render() {
        return(
            <div className ="DEBUG ME" style={{width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} style={{height: '100%'}}>
                        <img 
                            src={timpic}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Timothy Serrano</h1>
                            <hr/>
                            <h2>Bachelor of Computer and Information Sciences (BCIS)</h2>
                            <h2>Auckland University of Technology</h2>
                            
                            <p>HTML/CSS | JavaScript | React | C# </p>

                            { /* Social Media Integration */}
                            <div className="social-links">
                                <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"> 
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/*Git hub */}
                                <a href="https://www.github.com" rel="noopener noreferrer" target="_blank"> 
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/*Instagram */}
                                <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"> 
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                                {/*Google */}
                                <a href="https://www.google.com" rel="noopener noreferrer" target="_blank"> 
                                    <i className="fa fa-google" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;