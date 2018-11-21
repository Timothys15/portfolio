import * as React from 'react';
import { Cell, Grid } from 'react-mdl';
import timpic from '../img/timpic.png';


class Landing extends React.Component {
    public render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={timpic}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Third Year University Student</h1>

                            <hr/>
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