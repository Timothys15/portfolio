import * as React from 'react';
import { Cell, Grid } from 'react-mdl';

export default class Experience extends React.Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <ul>{this.props.companyPicture}</ul>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.workPlace}</h4>
                    <p>
                        {/* Bullet Points of Experience */}
                        <ul>
                            <li>{this.props.jobDescription1}</li>
                            <li>{this.props.jobDescription2}</li>
                            <li>{this.props.jobDescription3}</li>
                        </ul>                  
                    </p>
                </Cell>
            </Grid>
        )
    }
}