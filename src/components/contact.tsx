import * as React from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
import contact_tim from '../img/contacttim.png';


class Contact extends React.Component {

    public render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* Each cell has a column of 6 
                        First col={6} is col 1-6
                        Second col={6} is col 6-12
                    */}
                    <Cell col={6}>
                        <h2>Timothy Serrano</h2>
                        <img
                            src={contact_tim}
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>

                                {/* Contact number */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (021) 161-3579
                                    </ListItemContent>
                                </ListItem>

                                {/* E-mail */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        tim.serrano@live.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        tmd9567@autuni.ac.nz
                                    </ListItemContent>
                                </ListItem>

                                {/* Third contact, skype? */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        tim.serrano@live.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Contact;