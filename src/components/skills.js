import * as React from 'react';
import { Cell, Grid, ProgressBar } from 'react-mdl';

export default class Skills extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>
                        {this.props.skill}                        
                        {/* Simple Progress Bar */}
                            <ProgressBar style={{
                                justifyContent: 'center',
                                margin: 'auto', 
                                width: '75%'
                                }} 
                                progress={this.props.progress} 
                            />
                    </div>
                </Cell>
            </Grid>
        )
    }
}