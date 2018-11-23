import * as React from 'react';
import { Cell, Grid} from 'react-mdl';

export default class Volunteer extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.volunteerPlace}</h4>
                    <p>{this.props.volunteerDescription}</p>
                </Cell>
        </Grid>
        )
    }
}