import * as React from 'react';
import { Tabs, Tab, Grid, Card, Cell, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

export default class Projects extends React.Component {
    constructor (props) {
        super(props)
        this.state = { activeTab: 0};       
    }

    render() {        
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })} ripple={true}>                         
                     <Tab>HTML/CSS</Tab>
                     <Tab>React</Tab>
                     <Tab>Unity</Tab>
                     <Tab>Javascript</Tab>
                     <Tab>C#</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    // The categories are indexed from left to right beginning at 0,
    // in this case 0 = "HTML/CSS"
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                // HTML/CSS

                <div className="projects-grid">

                    {/* Project 1 and Card components */} 

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://my.alliant.edu/ICS/icsfs/under_construction.jpg?target=9664e852-79ba-4537-bae4-319d2f6edce7) center / cover'}}> >HTML/CSS Project 1 </CardTitle>
                        <CardText>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </CardText>
                        <div className="project-buttons">
                            <CardActions border>
                                <Button color={true}>
                                    <a href="https://github.com/" rel="noopener noreferrer" 
                                        target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />    
                                    </a>
                                </Button>                             
                            </CardActions>
                        </div>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                
                    {/* Project 2*/} 

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{background: 
                            'url(https://stmed.net/sites/default/files/castlevania%3A-order-of-ecclesia-hd-wallpapers-32878-1788893.jpg) center / cover',
                            color: '#ffff', height: '176px'}}> 
                            >HTML/CSS Project 2 
                        </CardTitle>                        
                        <CardText>
                            <p>
                                The Belmont Clan (ベルモンド一族 Berumondo Ichizoku?) is, by far, the most important and prominent clan in the Castlevania series. 
                                Despite their role in history, they are not, however, the only main protagonists seen throughout the franchise, 
                                but typically play an integral role in most games' storylines.
                            </p>
                        </CardText>
                        <div className="project-buttons">
                            <CardActions border>
                                <Button colored={true}>
                                    <a href="https://github.com/" rel="noopener noreferrer" 
                                        target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />      
                                    </a>
                                </Button>                            
                            </CardActions>
                        </div>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/} 

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{background: 
                            'url(https://static.giantbomb.com/uploads/original/8/87790/1751909-poster.jpg) center / cover', color: '#ffff', height: '176px'}}> 
                            >HTML/CSS Project 3 
                        </CardTitle>
                        <CardText>
                            <p>                            
                                The Belmont Clan was not formed with the purpose of destroying creatures of the night until after Castlevania: Lament of Innocence, 
                                when Leon Belmont vowed to kill the night. It was in the same time period that the Vampire Killer —the Belmonts' primary weapon— was created.
                            </p>
                        </CardText>
                        <div className="project-buttons">
                            <CardActions border>
                                <Button colored={true}>
                                    <a href="https://github.com/" rel="noopener noreferrer" 
                                        target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />      
                                    </a>
                                </Button>                            
                            </CardActions>
                        </div>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } 

        // REACT TAB

        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">

                {/* Project 1 and Card components */} 

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffff', height: '176px', background: 'url(http://www.wcny.org/wp-content/uploads/Flags.jpg) center / cover'}}> 
                        >Currency Converter 
                    </CardTitle>
                    <CardText>
                        <p>
                            This was my project for MSA 2018 Phase 1 and also 
                            my first React + TypeScript application. 
                            
                            The application prompts the user for
                            two country's currency code (e.g NZL/AUD) and the desired amount to convert. 
                        </p>
                    </CardText>
                    <div className="project-buttons">
                        <CardActions border>
                            {/* GitHub button */}
                            <Button colored={true}>
                                <a href="https://github.com/Timothys15/MSA.git" rel="noopener noreferrer" 
                                    target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />      
                                </a>
                            </Button>     
                            {/* View project */}
                            <Button colored={true}>
                                <a href="https://timscurrencyapp.azurewebsites.net" rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-calculator" />                                
                                </a>
                            </Button>                                           
                        </CardActions>
                    </div> 
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
        // UNITY TAB

        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">

                {/* Project 1 and Card components */} 

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{background: 
                        'url(https://image.ibb.co/cm1epq/Capture.png) center / cover',
                        color: '#ffff', height: '176px'}}> 
                            >Unity Project 1
                    </CardTitle>
                    <CardText>
                        <p>
                            Project for AUT paper Software Development Practice (COMP602).                  
                            This was a team project in which we created a 2D Top-down dungeon crawler game. 
                            Built with Unity and Visual Studio.                       
                        </p>
                    </CardText>
                        <div className="project-buttons">
                            <CardActions border>
                                <Button colored={true}>
                                    <a href="https://github.com/tylerboyd/SDPTeamDC.git" rel="noopener noreferrer" 
                                        target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />   
                                    </a>
                                </Button>                          
                            </CardActions>
                        </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }

        // JAVASCRIPT  - PLACEHOLDER
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">

                {/* Project 1 and Card components */} 

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffff', height: '176px', background: 'url(https://sertoma.org/wp-content/uploads/2017/09/COMING-SOON.jpg) center / cover'}}> >Javascript </CardTitle>
                    <CardText>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </CardText>
                        <div className="project-buttons">
                            <CardActions border>
                                <Button colored={true}>
                                    <a href="https://github.com/" rel="noopener noreferrer" 
                                        target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />     
                                    </a>
                                </Button>                           
                            </CardActions>
                        </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
        // C# - PLACEHOLDER
        else if(this.state.activeTab === 4){
            return(
                <div className="projects-grid">

                {/* Project 1 and Card components */} 

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '', height: '176px', background: 'url(https://i.redd.it/ounq1mw5kdxy.gif) center / cover'}}> >C#</CardTitle>
                    <CardText>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </CardText>                    
                    <div className="project-buttons">
                        <CardActions border>
                            <Button colored={true}>
                                <a href="https://github.com/" rel="noopener noreferrer" 
                                    target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />   
                                </a>
                            </Button>                                                     
                        </CardActions>
                    </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }
}


