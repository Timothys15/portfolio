import * as React from 'react';
import { Cell, Grid } from 'react-mdl';

export default class Education extends React.Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px', paddingLeft: '10px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}