import * as React from 'react';
import { Cell, Grid, ProgressBar } from 'react-mdl';


export default class Skills extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={1}>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={this.props.skill}
                            style={{
                                backgroundColor: 'transparent',
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </Cell>

                <Cell col={11}>
                    {/* Simple Progress Bar */}

                    <div className="progress-bar-container">
                        <div className="progress-bar-child">
                            <ProgressBar style={{
                                justifyContent: 'center',
                                margin: 'auto',
                                width: '75%'                                
                            }}
                                progress={this.props.progress}
                            />
                        </div>
                    </div>
                </Cell>
            </Grid>
        )
    }
}